import React from "react";

function Tools() {
  const tools = [
    "🔥 PyTorch",
    "🤗️ Transformers",
    "📊️ Scikit-Learn",
    "⚡ Lightning",
    "📈️ WandB",
    "⏭️ fast.ai",
    "🩻 MONAI",
  ];

  return (
    <div className={`my-6`}>
      <p className={`text-lg underline mb-6 font-medium`}>
        Frameworks & Libraries
      </p>
      {tools.map((tool, idx) => (
        <div key={idx} className={`inline-block mr-2 mb-2 px-2`}>
          {tool}
        </div>
      ))}
    </div>
  );
}

export default Tools;
