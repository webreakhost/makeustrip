import React from "react";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const agents = [
  {
    name: "Cody Fisher",
    title: "Founder and Principal Broker",
    description:
      "With over 15 years of real estate experience, Cody leads the Travila team with passion and expertise. His commitment to client satisfaction and market knowledge sets the standard for our exceptional service.",
    image: "https://travila-demos.vercel.app/assets/imgs/page/pages/team6.png", // Replace with the agent's image
  },
  {
    name: "Darrell Steward",
    title: "Founder and Principal Broker",
    description:
      "With over 15 years of real estate experience, Darrell leads the Travila team with passion and expertise. His commitment to client satisfaction and market knowledge sets the standard for our exceptional service.",
    image: "https://travila-demos.vercel.app/assets/imgs/page/pages/team.png",
  },
  {
    name: "Ronald Richards",
    title: "Founder and Principal Broker",
    description:
      "With over 15 years of real estate experience, Ronald leads the Travila team with passion and expertise. His commitment to client satisfaction and market knowledge sets the standard for our exceptional service.",
    image: "https://travila-demos.vercel.app/assets/imgs/page/pages/team2.png",
  },
  {
    name: "Jerome Bell",
    title: "Founder and Principal Broker",
    description:
      "With over 15 years of real estate experience, Jerome leads the Travila team with passion and expertise. His commitment to client satisfaction and market knowledge sets the standard for our exceptional service.",
    image: "https://travila-demos.vercel.app/assets/imgs/page/pages/team3.png",
  },
  {
    name: "Jenny Wilson",
    title: "Founder and Principal Broker",
    description:
      "With over 15 years of real estate experience, Jenny leads the Travila team with passion and expertise. Her commitment to client satisfaction and market knowledge sets the standard for our exceptional service.",
    image: "https://travila-demos.vercel.app/assets/imgs/page/pages/team4.png",
  },
  {
    name: "Floyd Miles",
    title: "Founder and Principal Broker",
    description:
      "With over 15 years of real estate experience, Floyd leads the Travila team with passion and expertise. His commitment to client satisfaction and market knowledge sets the standard for our exceptional service.",
    image: "https://travila-demos.vercel.app/assets/imgs/page/pages/team5.png",
  },
];

const TeamSection = () => {
  return (
    <div className="bg-gray-50 py-[5vw] px-6 lg:px-16 ">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-6 lg:mb-0">
          <h1 className="text-5xl font-bold text-gray-800">Meet our Agents</h1>
          <p className="text-gray-600 mt-4 text-2xl">
            Meet our exceptional team of agents, each dedicated to making your <br/> 
            property journey seamless and successful.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-gray-600">Need help? Call us</p>
          <span className="text-lg font-bold text-blue-500">
            1-800-222-8888
          </span>
        </div>
      </div>

      {/* Agents Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {agents.map((agent, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Image Section */}
            <img
              src={agent.image}
              alt={agent.name}
              className="w-full h-54 object-cover"
            />
            {/* Text Section */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800">{agent.name}</h3>
              <p className="text-gray-500 text-sm">{agent.title}</p>
              <p className="text-gray-600 text-sm mt-4">{agent.description}</p>
              {/* Social Icons */}
              <div className="flex items-center space-x-4 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-500 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-700 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
