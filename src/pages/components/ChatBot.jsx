import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false); // Stato per apertura/chiusura
  const [messages, setMessages] = useState([
    {
      text: "Hello! 👋 How can I help you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");

  // Funzione per inviare messaggi
  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const newMessages = [...messages, { text: input, sender: "user", time: newTime }];
      setMessages(newMessages);
      setInput("");

      // Risposta del bot
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "The bot is currently in experimental mode.",
            sender: "bot",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      {/* Icona del chatbot */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 hover:translate-y-[-5px] transition-all duration-300 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 4.924 0 11c0 2.994 1.216 5.721 3.234 7.766-.24 1.208-.797 2.924-1.865 4.125a.48.48 0 00.516.781c2.277-1.064 3.993-1.621 5.23-1.86C8.362 23.503 10.157 24 12 24c6.63 0 12-4.924 12-11S18.63 0 12 0zm6 14h-3a1 1 0 110-2h3a1 1 0 110 2zm-5 0H7a1 1 0 110-2h6a1 1 0 110 2zm6-4H7a1 1 0 110-2h12a1 1 0 110 2z" />
        </svg>
      </div>

      {/* Finestra della chat */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-white w-80 h-96 border border-gray-300 shadow-lg rounded-lg flex flex-col animate-slide-up-fade">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <p className="text-sm">The bot is currently in experimental mode.</p>
          </div>

          {/* Corpo della chat */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  msg.sender === "bot" ? "items-start" : "items-end"
                }`}
              >
                <div
                  className={`p-2 rounded-lg text-sm ${
                    msg.sender === "bot"
                      ? "bg-gray-100 text-gray-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {msg.time}
                </span>
              </div>
            ))}
          </div>

          {/* Input per i messaggi */}
          <form onSubmit={sendMessage} className="p-2 border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 text-sm border border-gray-300 rounded-l-md outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
