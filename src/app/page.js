import Navbar from "./Components/Navbar";
import Github from "./Components/Github";
import sumo from "./sumo.png";
import Image from "next/image";

const intro = `I'm currently a final year undergrad 
pursuing Bachelor of Technology in Computer Science & Engineering from India.
I'm a Kaggle Notebooks expert, currently ranked under 1000 globally. I'm inclined 
towards Natural Language Processing and Multimodal research.
I also like to explore & build model architectures from scratch.
`;
const intern = `
I'm currently a Junior Machine Learning Engineer Intern 
working on federated-split learning applications for bio-medical datasets consisting of CT scans and 3D MRIs.`;

const OpenForRoles = () => (
  <p
    className={`text-justify my-4 pl-2 py-2 border-l-4 border-solid border-green-600 bg-green-100`}
  >
    I am open to work in a full-time applied ML or research role.
  </p>
);

const Bar = () => (
  <div className={`border-b-[1px] border-solid border-gray-300 mb-6`}></div>
);

export default function Home() {
  return (
    <main className={`flex flex-col w-full md:w-1/2 px-4`}>
      <Navbar />
      <Bar />
      <div>
        <p className={`text-xl font-medium`}>Hello 👋</p>
        <p className={`text-justify`}>{intro}</p>
        <p className={`text-justify my-4`}>💼️ {intern}</p>
        <OpenForRoles />
        <p className={`text-justify mt-4 `}>
          Tools: 🔥 PyTorch, 🤗️ Transformers, 📊️ Scikit-Learn, ⚡ Lightning
        </p>
        <p className={`text-justify mb-4`}>
          Additional Tools: 🩻 MONAI, ⏭️ fast.ai, 📈️ WandB
        </p>
      </div>
      <Github />
      <Bar />
      <Image
        src={sumo}
        alt="an image of my dog Sumo when he was a month old."
        className={`w-1/2`}
      />
      <p className={`text-sm italic mb-6`}>
        my dog Sumo when he was a month old :)
      </p>
      <Bar />
    </main>
  );
}
