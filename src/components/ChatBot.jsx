import React, { useState } from 'react';
import whatsappImage1 from './what-black.png'; // Adjust the path as necessary
import messImage1 from './mess-black.png'; // Adjust the path as necessary

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center">
      <button
        onClick={toggleChat}
        className={`rounded-full bg-white text-white p-3 shadow-lg focus:outline-none mb-2 flex items-center justify-center w-12 h-12`}
      >
        {isOpen ? '❌' : <img src={messImage1} alt="ChatBot" className="w-6 h-6" />}
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
      <a
        href="https://api.whatsapp.com/send?phone=7825933039"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white p-3 shadow-lg focus:outline-none mt-2 flex items-center justify-center w-12 h-12"
      >
        <img src={whatsappImage1} alt="WhatsApp" className="w-6 h-6" />
      </a>
    </div>
  );
};

export default ChatBot;
