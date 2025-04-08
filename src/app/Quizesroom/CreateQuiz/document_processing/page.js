"use client"
import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  
  const renderCurrentStep = () => {
    switch(currentStep) {
      case 1:
        return <ProcessingScreen goToNextStep={() => setCurrentStep(2)} />;
      case 2:
        return <ReviewQuestionsScreen 
          goToNextStep={() => setCurrentStep(3)} 
          goToPreviousStep={() => setCurrentStep(1)} 
        />;
      case 3:
        return <QuizSettingsScreen 
          goToNextStep={() => setCurrentStep(4)} 
          goToPreviousStep={() => setCurrentStep(2)} 
        />;
      case 4:
        return <ShareQuizScreen 
          goToNextStep={() => setCurrentStep(5)} 
          goToPreviousStep={() => setCurrentStep(3)} 
        />;
      case 5:
        return <SuccessScreen goToDashboard={() => setCurrentStep(6)} />;
      case 6:
        return <DashboardScreen createNewQuiz={() => setCurrentStep(1)} />;
      default:
        return <ProcessingScreen goToNextStep={() => setCurrentStep(2)} />;
    }
  };

  return (
    <div className="bg-[linear-gradient(to_right,_#000510_0%,_#001624_50%,_#000510_100%)]  text-[#e1e1e6] min-h-screen font-sans">
      {renderCurrentStep()}
    </div>
  );
}

function Header() {
  return (
    <div></div>
  );
}

function ProgressBar({ activeStep }) {
  const steps = [
    { number: 1, label: "Upload" },
    { number: 2, label: "Processing" },
    { number: 3, label: "Review" },
    { number: 4, label: "Settings" },
    { number: 5, label: "Share" }
  ];

  return (
    <div className="flex justify-between mb-8 relative">
      <div className="absolute top-[15px] left-0 right-0 h-[3px] bg-[#2a2d3b] z-[1]"></div>
      
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center z-[2]">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
            ${index + 1 < activeStep ? 'bg-[#36b37e] text-white' : 
              index + 1 === activeStep ? 'bg-[#4a6cf7] text-white' : 
              'bg-[#2a2d3b] text-[#a0a0b0]'}`}>
            {index + 1 < activeStep ? '✓' : step.number}
          </div>
          <div className={`text-xs ${index + 1 === activeStep ? 'text-white' : 'text-[#a0a0b0]'}`}>
            {step.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProcessingScreen({ goToNextStep }) {
  return (
    <div className="w-[70%]  mx-auto p-5">
      <Header />
      
      <h1 className="text-2xl text-center mb-2">Processing Document</h1>
      <div className="text-center text-[#a0a0b0] mb-8">Your document is being analyzed to generate quality questions</div>
      
      <ProgressBar activeStep={2} />
      
      <div className="bg-[#1a1d2d] rounded-xl p-6 mb-5">
        <div className="text-center py-10">
          <div className="w-[60px] h-[60px] border-[5px] border-[#2a2d3b] border-t-[#4a6cf7] rounded-full mx-auto mb-5 animate-spin"></div>
          <h2 className="text-xl font-bold mb-2">Analyzing content</h2>
          <p className="mb-2">Extracting key concepts and generating questions</p>
          <p>This may take a moment...</p>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <button className="px-6 py-3 rounded-md font-medium bg-[#2a2d3b] text-white">Cancel</button>
        <button onClick={goToNextStep} className="hidden">Continue</button>
      </div>
    </div>
  );
}

function ReviewQuestionsScreen({ goToNextStep, goToPreviousStep }) {
  return (
    <div className="max-w-[900px] mx-auto p-5">
      <Header />
      
      <h1 className="text-2xl text-center mb-2">Review Generated Questions</h1>
      <div className="text-center text-[#a0a0b0] mb-8">Edit, remove, or add questions before finalizing your quiz</div>
      
      <ProgressBar activeStep={3} />
      
      <div className="bg-[#1a1d2d] rounded-xl p-6 mb-5">
        <QuestionCard 
          type="Multiple Choice"
          question="What is the primary function of mitochondria in a cell?"
          options={[
            { text: "Energy production through cellular respiration", isCorrect: true },
            { text: "Protein synthesis", isCorrect: false },
            { text: "Cell division", isCorrect: false },
            { text: "Storage of genetic material", isCorrect: false }
          ]}
        />
        
        <QuestionCard 
          type="True/False"
          question="Photosynthesis occurs in all plant cells."
          options={[
            { text: "True", isCorrect: false },
            { text: "False", isCorrect: true }
          ]}
        />
        
        <QuestionCard 
          type="Fill in Blanks"
          question="The process of ________ is how plants make their own food using sunlight."
          answer="photosynthesis"
        />
        
        <button className="bg-[#4a6cf7] text-white px-6 py-3 rounded-md font-medium w-full mt-5">
          + Add New Question
        </button>
      </div>
      
      <div className="flex justify-between mt-8">
        <button onClick={goToPreviousStep} className="px-6 py-3 rounded-md font-medium bg-[#2a2d3b] text-white">Back</button>
        <button onClick={goToNextStep} className="px-6 py-3 rounded-md font-medium bg-[#4a6cf7] text-white">Continue to Settings</button>
      </div>
    </div>
  );
}

function QuestionCard({ type, question, options, answer }) {
  return (
    <div className="bg-[#1a1d2d] rounded-xl p-5 mb-4">
      <div className="flex justify-between mb-4">
        <div className="bg-[#2a2d3b] px-2 py-1 rounded text-xs">{type}</div>
        <div>
          <button className="bg-[#2a2d3b] px-2 py-1 rounded text-xs mr-1">Edit</button>
          <button className="bg-[#2a2d3b] px-2 py-1 rounded text-xs">Delete</button>
        </div>
      </div>
      <h3 className="text-lg font-medium mb-4">{question}</h3>
      
      {options && options.map((option, index) => (
        <div key={index} className="bg-[#2a2d3b] rounded-md p-3 mb-2 flex items-center cursor-pointer">
          <div className={`w-5 h-5 rounded-full border-2 border-[#4a6cf7] mr-4 flex items-center justify-center
            ${option.isCorrect ? 'after:content-[""] after:w-2.5 after:h-2.5 after:rounded-full after:bg-[#36b37e]' : ''}`}>
          </div>
          <div>{option.text}</div>
        </div>
      ))}
      
      {answer && (
        <div className="bg-[#2a2d3b] p-3 rounded-md">
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  );
}

function QuizSettingsScreen({ goToNextStep, goToPreviousStep }) {
  return (
    <div className="max-w-[900px] mx-auto p-5">
      <Header />
      
      <h1 className="text-2xl text-center mb-2">Quiz Settings</h1>
      <div className="text-center text-[#a0a0b0] mb-8">Configure your quiz options and preferences</div>
      
      <ProgressBar activeStep={4} />
      
      <div className="bg-[#1a1d2d] rounded-xl p-6 mb-5">
        <div className="mb-6">
          <h3 className="text-base font-medium mb-4">Quiz Information</h3>
          <input 
            type="text" 
            className="bg-[#2a2d3b] border-none rounded-md p-3 text-white w-full mb-2" 
            placeholder="Quiz Title" 
            value="Introduction to Biology Quiz"
          />
          <textarea 
            className="bg-[#2a2d3b] border-none rounded-md p-3 text-white w-full min-h-[80px]" 
            placeholder="Description (Optional)"
            defaultValue="Test your knowledge about basic biology concepts covered in the introduction document."
          ></textarea>
        </div>
        
        <div className="mb-6">
          <h3 className="text-base font-medium mb-4">Quiz Options</h3>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="randomize" defaultChecked className="mr-2" />
            <label htmlFor="randomize">Randomize question order</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="feedback" defaultChecked className="mr-2" />
            <label htmlFor="feedback">Show immediate feedback after each question</label>
          </div>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="results" className="mr-2" />
            <label htmlFor="results">Allow participants to see correct answers after submission</label>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-base font-medium mb-4">Time Limits</h3>
          <select className="bg-[#2a2d3b] border-none rounded-md p-3 text-white w-full">
            <option>No time limit</option>
            <option selected>30 seconds per question</option>
            <option>60 seconds per question</option>
            <option>2 minutes per question</option>
            <option>Custom time limit</option>
          </select>
        </div>
        
        <div className="mb-6">
          <h3 className="text-base font-medium mb-4">Access Control</h3>
          <select className="bg-[#2a2d3b] border-none rounded-md p-3 text-white w-full">
            <option selected>Public - anyone with the link</option>
            <option>Password protected</option>
            <option>Specific users only</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-between mt-8">
        <button onClick={goToPreviousStep} className="px-6 py-3 rounded-md font-medium bg-[#2a2d3b] text-white">Back</button>
        <button onClick={goToNextStep} className="px-6 py-3 rounded-md font-medium bg-[#4a6cf7] text-white">Continue to Sharing</button>
      </div>
    </div>
  );
}

function ShareQuizScreen({ goToNextStep, goToPreviousStep }) {
  return (
    <div className="max-w-[900px] mx-auto p-5">
      <Header />
      
      <h1 className="text-2xl text-center mb-2">Share Your Quiz</h1>
      <div className="text-center text-[#a0a0b0] mb-8">Choose how you want to distribute your quiz to participants</div>
      
      <ProgressBar activeStep={5} />
      
      <div className="bg-[#1a1d2d] rounded-xl p-6 mb-5">
        <h3 className="text-lg font-medium mb-2">Your quiz is ready to share!</h3>
        <p className="mb-5">Introduction to Biology Quiz has been created with 10 questions.</p>
        
        <div className="bg-[#2a2d3b] p-4 rounded-md flex my-5">
          <input 
            type="text" 
            readOnly 
            value="https://quizwiz.com/q/bio-intro-293847"
            className="bg-transparent border-none text-white flex-grow"
          />
          <button className="bg-[#4a6cf7] text-white px-4 py-1 rounded-md ml-2">Copy</button>
        </div>
        
        <h3 className="text-lg font-medium mb-4">Sharing Options</h3>
        
        <ShareOption 
          icon="@" 
          title="Email Invitations" 
          description="Send the quiz directly to participants via email"
          iconBg="#36b37e"
        />
        
        <ShareOption 
          icon="f" 
          title="Share on Facebook" 
          description="Post the quiz to your Facebook profile or page"
          iconBg="#4267B2"
        />
        
        <ShareOption 
          icon="t" 
          title="Share on Twitter" 
          description="Tweet the quiz link to your followers"
          iconBg="#1DA1F2"
        />
        
        <ShareOption 
          icon="in" 
          title="Share on LinkedIn" 
          description="Share with your professional network"
          iconBg="#0e76a8"
        />
      </div>
      
      <div className="flex justify-between mt-8">
        <button onClick={goToPreviousStep} className="px-6 py-3 rounded-md font-medium bg-[#2a2d3b] text-white">Back</button>
        <button onClick={goToNextStep} className="px-6 py-3 rounded-md font-medium bg-[#4a6cf7] text-white">Finish & Go to Dashboard</button>
      </div>
    </div>
  );
}

function ShareOption({ icon, title, description, iconBg }) {
  return (
    <div className="flex items-center bg-[#2a2d3b] rounded-md p-4 mb-4">
      <div 
        className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 text-white"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>
      <div className="flex-grow">
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-sm text-[#a0a0b0]">{description}</p>
      </div>
      <button className="bg-[#4a6cf7] text-white px-4 py-2 rounded-md">
        {title.includes("Email") ? "Send" : "Share"}
      </button>
    </div>
  );
}

function SuccessScreen({ goToDashboard }) {
  return (
    <div className="max-w-[900px] mx-auto p-5">
      <Header />
      
      <div className="bg-[#1a1d2d] rounded-xl p-10 mb-5 text-center">
        <div className="w-20 h-20 bg-[#36b37e] rounded-full flex items-center justify-center mx-auto mb-5 text-4xl text-white">
          ✓
        </div>
        <h1 className="text-2xl font-bold mb-2">Congratulations!</h1>
        <p className="text-lg mb-8">Your quiz has been successfully created and shared</p>
        
        <h3 className="text-xl mb-5">Introduction to Biology Quiz</h3>
        <p className="mb-1">10 questions • Medium difficulty</p>
        <p className="mb-8">Time limit: 30 seconds per question</p>
        
        <button className="bg-[#4a6cf7] text-white px-6 py-3 rounded-md font-medium w-full mb-4">
          View Quiz
        </button>
        <button 
          onClick={goToDashboard} 
          className="bg-[#2a2d3b] text-white px-6 py-3 rounded-md font-medium w-full"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
}

function DashboardScreen({ createNewQuiz }) {
  return (
    <div className="max-w-[900px] mx-auto p-5">
      <Header />
      
      <h1 className="text-2xl text-center mb-2">Quiz Management Dashboard</h1>
      <div className="text-center text-[#a0a0b0] mb-8">Manage your quizzes and view participant results</div>
      
      <div className="grid grid-cols-2 gap-5">
        <DashboardCard title="Active Quizzes" number="3" />
        <DashboardCard title="Total Participants" number="42" />
        <DashboardCard title="Average Score" number="76%" />
        
        <div className="bg-[#1a1d2d] rounded-xl p-5 flex flex-col">
          <div className="flex justify-between mb-4">
            <div className="font-bold">Recent Activity</div>
          </div>
          <div className="mt-2 flex-grow">
            <p>• New submission (2 min ago)</p>
            <p>• Quiz shared (1 hour ago)</p>
            <p>• Quiz created (3 hours ago)</p>
          </div>
          <button className="bg-[#4a6cf7] text-white px-6 py-3 rounded-md font-medium mt-auto">
            View All
          </button>
        </div>
      </div>
      
      <div className="bg-[#1a1d2d] rounded-xl p-6 mt-5 mb-5">
        <h2 className="text-xl font-bold mb-4">Recent Quizzes</h2>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="border-b border-[#2a2d3b] text-left">
              <th className="p-2">Quiz Title</th>
              <th className="p-2">Created</th>
              <th className="p-2">Questions</th>
              <th className="p-2">Participants</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <QuizTableRow 
              title="Introduction to Biology"
              created="2 days ago"
              questions={10}
              participants={12}
            />
            <QuizTableRow 
              title="World History Quiz"
              created="1 week ago"
              questions={15}
              participants={24}
            />
            <QuizTableRow 
              title="Programming Basics"
              created="2 weeks ago"
              questions={8}
              participants={6}
              noBorder
            />
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-center mt-8">
        <button 
          onClick={createNewQuiz} 
          className="px-6 py-3 rounded-md font-medium bg-[#4a6cf7] text-white"
        >
          Create New Quiz
        </button>
      </div>
    </div>
  );
}

function DashboardCard({ title, number, children }) {
  return (
    <div className="bg-[#1a1d2d] rounded-xl p-5 flex flex-col">
      <div className="flex justify-between mb-4">
        <div className="font-bold">{title}</div>
      </div>
      <div className="text-4xl font-bold my-4">{number}</div>
      <button className="bg-[#4a6cf7] text-white px-6 py-3 rounded-md font-medium mt-auto">
        {title === "Average Score" ? "Analytics" : "View All"}
      </button>
      {children}
    </div>
  );
}

function QuizTableRow({ title, created, questions, participants, noBorder }) {
  return (
    <tr className={`${noBorder ? '' : 'border-b border-[#2a2d3b]'}`}>
      <td className="p-2">{title}</td>
      <td className="p-2">{created}</td>
      <td className="p-2">{questions}</td>
      <td className="p-2">{participants}</td>
      <td className="p-2">
        <button className="bg-[#2a2d3b] px-2 py-1 rounded text-xs mr-1">Edit</button>
        <button className="bg-[#4a6cf7] px-2 py-1 rounded text-xs">Share</button>
      </td>
    </tr>
  );
}

export default App;