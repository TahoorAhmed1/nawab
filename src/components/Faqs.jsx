import { useState } from "react";

const faqs = [
  "Why sell to Soni Auto Market?",
  "How does Soni Auto Market determine the value of my vehicle?",
  "What happens on the day of pick-up?",
  "Will my offer change when it gets picked up? Is the cash offer really 'firm'?",
  "Why won't you purchase my car?",
  "How does my auto loan get paid off?",
  "How do I get paid?",
  "I am still driving my car. Does Soni Auto Market allow a variation in mileage?"
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-screen-lg py-8">
        <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>

        <div className="space-y-2">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-3 text-left flex justify-between items-center"
              >
                <span className="text-gray-800 font-medium">{question}</span>
                <span className="text-gray-600">
                    {openIndex === index ? (
                    <i className="fa-solid fa-angle-down"></i>
                                            ) : (
                    <i className="fa-solid fa-angle-up"></i>
                     )}
                    </span>

              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">
                  <p>Here is the answer to the question.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="font-semibold text-gray-700 mb-4">Still have questions?</p>
          <button className="bg-black text-white px-6 py-2 rounded-full">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}