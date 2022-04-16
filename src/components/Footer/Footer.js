import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold text-lg md:text-3xl">
              Elegant Photographer
            </h3>
            <p className="text-gray-400 text-base md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem.
            </p>
          </div>
          <div className="flex flex-row justify-between w-full md:w-auto">
            <div className="md:mr-8">
              <h4 className="text-white font-semibold text-lg md:text-3xl">
                Company
              </h4>
              <ul className="list-reset">
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    Jobs
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:ml-8">
              <h4 className="text-white font-semibold text-lg md:text-3xl">
                Resources
              </h4>
              <ul className="list-reset">
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    Docs
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    Guides
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-gray-500" href="#">
                    API
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
