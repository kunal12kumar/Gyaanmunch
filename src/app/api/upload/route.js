import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Create a buffer from the file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Generate a unique filename to avoid conflicts
    const uniqueId = uuidv4();
    const originalName = file.name;
    const fileExtension = path.extname(originalName);
    const fileName = `${uniqueId}${fileExtension}`;
    
    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });
    
    // Write the file to disk
    const filePath = path.join(uploadDir, fileName);
    await writeFile(filePath, buffer);
    
    // Return the file details
    return NextResponse.json({
      success: true,
      fileName,
      originalName,
      filePath: `/uploads/${fileName}`,
      uniqueId
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'File upload failed' },
      { status: 500 }
    );
  }
}