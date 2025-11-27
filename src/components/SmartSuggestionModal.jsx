import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const SmartSuggestionModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  const modalRef = useRef();
  const { user } = useAuth();

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSuggest = async () => {
    setLoading(true);
    setSuggestion("");

    // Retrieve user data from localStorage
    const storedData = JSON.parse(localStorage.getItem("userData")) || {};

    // const { location, dob, gender, alergens, diseases } = storedData;
    const { dob, gender, alergens, diseases } = storedData;
    const age = dob
      ? new Date().getFullYear() - new Date(dob).getFullYear()
      : "";

    const prompt = `
Give 3-5 names of healthy ${query} packaged products available in India. for a ${age}-year-old ${gender}, living in India. 
Avoid products containing ${alergens || "none"} and consider health condition(s): ${diseases || "none"}.
Each suggestion should single line explain very briefly why it fits well for their health profile. Provide the response in a numbered list format, no markdown, 1 line gap between each suggestion.
`;

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      const resultText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No suggestions found.";
      setSuggestion(resultText);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestion("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40  flex justify-center items-center z-50 px-4">
      <div
        ref={modalRef}
        className="relative bg-emerald-900/20 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl w-full max-w-md p-6 text-white"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white/70 hover:text-white text-lg font-bold"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center text-white">
          Smart Suggestions
        </h2>

        {/* Always visible intro text */}
        <p className="text-sm text-gray-100 mb-4 text-center">
          Based on your health info, we’ll give you product suggestions tailored
          to your allergens and conditions.
        </p>

        {/* Conditional content */}
        {user ? (
          <div className="space-y-3 text-sm text-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="e.g., energy drink, snacks..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button
                onClick={handleSuggest}
                disabled={loading || !query.trim()}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-all"
              >
                {loading ? "..." : "Go"}
              </button>
            </div>

            {suggestion && (
              <div className="mt-4 p-3 bg-white/10 border border-white/20 rounded-lg text-sm whitespace-pre-line">
                {suggestion}
              </div>
            )}
          </div>
        ) : (
          <p className="text-center text-sm text-gray-200 mt-2">
            Please{" "}
            <NavLink
              to="/login"
              className="font-semibold text-emerald-200 hover:underline"
              onClick={onClose}
            >
              Enter your details
            </NavLink>{" "}
            to view smart suggestions.
          </p>
        )}
      </div>
    </div>
  );
};

export default SmartSuggestionModal;
