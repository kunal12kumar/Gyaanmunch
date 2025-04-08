// App.jsx - Main entry point
"use client"
import { useState } from 'react';
import LoginPage from './login/page';
import SignupPage from './signup/page';

export default function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-[linear-gradient(to_right,_#000510_0%,_#001624_50%,_#000510_100%)]">
      {/* Left side - Image/Brand */}
      {/* <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 text-white flex-col justify-center items-center p-12">
        <div className="max-w-md text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-xl mb-8">Secure, fast, and easy to use. The perfect solution for your needs.</p>
          <div className="h-64 w-64 mx-auto bg-white/20 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>
      </div> */}

      {/* Right side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center  justify-center p-8">
        <div className="w-full max-w-md">
          {isLoginView ? (
            <LoginPage toggleView={toggleView} />
          ) : (
            <SignupPage toggleView={toggleView} />
          )}
        </div>
      </div>
    </div>
  );
}