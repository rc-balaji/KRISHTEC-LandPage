import React, { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChat}
        className={`rounded-full ${!isOpen && "bg-blue-500"} text-white p-3 shadow-lg focus:outline-none`}
      >
        {isOpen ? '❌' : '💬'}
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg ${
          isOpen ? 'max-w-md w-full h-96' : 'max-w-xs w-0 h-0'
        }`}
      >
        {isOpen && (
          <iframe
            allow="microphone;"
            width="100%"
            height="100%"
            src="https://console.dialogflow.com/api-client/demo/embedded/cbef9606-2921-4933-9303-d2a76b7d7617"
            className="w-full h-full border-none"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ChatBot;
