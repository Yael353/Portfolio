import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <div>
      <div className="flex justify-center items-center mt-20 mx-40 p-20 space-x-3">
        <div className=" flex flex-col ">
          <h1 className="flex font-bold text-6xl mb-8 pb-4">
            Front-End developer!
            <img
              className="mr-20"
              src="https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand@2x.gif"
              alt="a waving hand"
            />
          </h1>
          <p className="text-4xl font-normal mt-4">
            Hi! I'm Yaser Elkhabiry and I'm a passionate Front-end developer.
          </p>
          <div className="flex space-x-2 mt-6">
            <FaLinkedin className="h-6 w-6 " />
            <FaGithub className="h-6 w-6" />
          </div>
        </div>
        <div>
          <img
            className="w-[500px] h-[400px] rounded-xl"
            src="https://images.unsplash.com/36/X7L5hgFXQZazzPaK3goC_14084990857_88cabf3b6d_o.jpg?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="This is a profile picture"
          />
        </div>
      </div>
      <div className="flex mb-20 mx-40 px-20 items-center justify-start">
        <h2 className="text-3xl font-light ml-10 text-blue-400">
          Tech Stack |{" "}
        </h2>
        <div className="flex m-2 p-2 space-x-5 ">
          <FaHtml5 className="w-10 h-10 transform transition duration-300 hover:scale-105" />
          <FaCss3 className="w-10 h-10 transform transition duration-300 hover:scale-105" />
          <FaJs className="w-10 h-10 transform transition duration-300 hover:scale-105" />
          <FaReact className="w-10 h-10 transform transition duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
