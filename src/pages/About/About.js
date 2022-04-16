import React from "react";
import me from "../../images/me.jpg";

const About = () => {
  return (
    <div>
      <div className="relative z-0 top-0 h-[40vh] flex items-center justify-center  bg-gray-700 w-full p-4">
        <h1 className="text-white text-5xl">About Me</h1>
      </div>
      <div className="p-4">
        <div className="flex flex-col text-center justify-center md:flex-row">
          <div className="">
            <img src={me} alt="me" className="w-full md:w-1/5 m-auto" />

            <div className="mt-4">
              <h1 className="text-2xl font-semibold mb-3">Nahidujjaman</h1>
              <p className="text-gray-600">
                My name is Nahidujjaman. I am a software engineer. I am
                currently working as a software engineer.
                <br />
                <br />
                My goal is to become a full stack developer. For that I am
                learning new technologies and frameworks. Currently I am
                learning React, Node.js, Express.js, MongoDB, MySQL, JavaScript,
                HTML, CSS, Bootstrap, Git, and more.
                <br />
                <br />
                With the help of these technologies I will be able to build web
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
