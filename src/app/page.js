import Navbar from "./Components/Navbar";
import Github from "./Components/Github";
import sumo from "./sumo.png";
import Image from "next/image";
import Tools from "./Components/Tools";
import Link from "next/link";

const Highlight = ({ children }) => (
  <span className="relative inline-block">
    <span className="absolute inset-x-0 bottom-0 h-3 bg-yellow-300 opacity-50"></span>
    <span className="relative">{children}</span>
  </span>
);

export const Intro = () => (
  <ul className="list-disc pl-5 text-md text-justify mb-6">
    <li>
      Graduated with a <Highlight>Bachelor of Technology</Highlight> in Computer
      Science & Engineering from India.
    </li>
    <li>
      Currently deploying <Highlight>real-time ML systems</Highlight>
    </li>
    <li>Focused on Natural Language Processing and Multimodal research</li>
    <li>I enjoy implementing model architectures from scratch!</li>
  </ul>
);

export const WorkExperience = () => (
  <div className="text-sm text-justify mb-4">
    <div className="flex items-center">
      <span className="text-2xl mr-2">⌛️</span>
      <p className="ml-2 font-bold">
        <Highlight>Current:</Highlight> Project Assistant, IIT Bhilai x Bhilai
        Steel Plant
      </p>
    </div>
    <ul className="list-disc pl-5">
      <li>
        Continued development and deployment of system to predict and prevent
        failures in Bar and Rod Mill of Bhilai Steel Plant using{" "}
        <Highlight>Time Series Anomaly Detection</Highlight>.
      </li>
      <li>
        Addressed concept drift and multimodal data distribution with{" "}
        <Highlight>continual learning</Highlight> and custom data normalization
        approach.
      </li>
      <li>
        I led the development and deployment of{" "}
        <Highlight>custom PLC signal logic</Highlight> in Python with minimum
        latency to detect event-based failures, mechanical issues, and sensor
        faults.
      </li>
      <li>
        I manage and maintain the system with added{" "}
        <Highlight>automation</Highlight> for stability.
      </li>
      <li>
        Stack: Scikit-Learn, PyTorch, Metaflow (MLOps Framework), PostgreSQL,
        InfluxDB, Redis, Grafana
      </li>
    </ul>
  </div>
);

export const Internship = () => (
  <div className="text-sm text-justify mb-8">
    <div className="flex items-center">
      <span className="text-2xl mr-2">🔬️</span>
      <p className="ml-2 font-bold">
        Junior Machine Learning Engineer Intern, NetrAI x IIT Bhilai
      </p>
    </div>
    <ul className="list-disc pl-5">
      <li>
        Worked on <Highlight>federated-split learning</Highlight> applications
        for bio-medical <Highlight>3D Segmentation</Highlight> tasks.
      </li>
      <li>Stack: PyTorch, MONAI, nnUNet</li>
    </ul>
  </div>
);

export const Paper1 = () => (
  <div className="text-sm text-justify mb-8">
    <p className="ml-2 font-bold">
      <span className={`font-medium text-blue-400`}>Co-Author:</span> Beyond
      Federated Learning for IoT: Efficient Split Learning With Caching and
      Model Customization{" "}
      <span className={`text-blue-400`}>
        <Link
          href="https://ieeexplore.ieee.org/document/10587192/"
          className={`underline text-blue-600`}
          target="_blank"
          rel="noopener noreferrer"
        >
          [IEEE Xplore]
        </Link>
      </span>
    </p>
    <p className="ml-2 text-xs">
      Applied split-learning on biomedical datasets for 3D segmentation with
      emphasis on communication and computation overhead comparison,
      model-splitting methods and trade-offs. My experiments improved metrics by{" "}
      <Highlight>30%</Highlight> while reducing computation by{" "}
      <Highlight>29x</Highlight>
    </p>
  </div>
);

const OpenForRoles = () => (
  <p
    className={`text-justify mt-2 mb-4 px-2 py-2 border-l-4 border-solid bg-red-300 border-red-600 font-semibold`}
  >
    I am open to work in a full-time applied ML or research role.
  </p>
);

const BibleVerse = () => (
  <p
    className={`text-center mb-6 text-slate-400 w-full md:w-1/2 place-self-center italic`}
  >
    I will instruct thee and teach thee in the way which thou shalt go:I will
    guide thee with mine eye. <br></br> Psalm 32:8
  </p>
);

const Bar = () => (
  <div className={`border-b-[1px] border-solid border-gray-300 mb-6`}></div>
);

export default function Home() {
  return (
    <main className="min-h-screen w-screen overflow-x-scroll bg-[#fff7f2]">
      <div className="w-[95%] max-w-lg mx-auto">
        <Navbar />
        <Bar />

        <div className="w-full">
          <p className="text-xl font-medium">Hello 👋</p>
          <Intro />
        </div>

        <Bar />

        <OpenForRoles />

        <div className="w-full mt-6">
          <h2 className="text-lg font-medium">
            💼️ <span className="underline">Work Experience</span>
          </h2>
          <WorkExperience />
          <Internship />
        </div>

        <Bar />

        <div className="w-full mt-6">
          <h2 className="text-lg font-medium underline">
            Published Research Papers
          </h2>
          <Paper1 />
        </div>

        <Bar />

        <div className="w-full">
          <Tools />
          <Github />
        </div>

        <Bar />

        <div className="w-full flex justify-center">
          <BibleVerse />
        </div>

        <Bar />

        <div className="w-full">
          <Image
            src={sumo}
            alt="an image of my dog Sumo when he was a month old."
            className="w-11/12 max-w-xs justify-start"
          />
          <p className="text-sm italic text-gray-600 text-start mt-2">
            my dog Sumo when he was a month old :)
          </p>
        </div>

        <Bar />
      </div>
    </main>
  );
}
