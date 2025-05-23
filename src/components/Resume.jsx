import React, { useEffect } from "react";
import Section from "./Section";

export default function Resume() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Section
        image="./assets/glitch-spiral.jpg"
        heading1="Hi, my name is"
        heading1Style="primaryBg"
        noTopPadding={true}
        roundedCornerClass="rounded-br-[100px]"
        content={
          <>
            <h2 className="text-4xl font-bold mb-4">Dominik Jonat</h2>
            {/* <p className="mb-1">
              <strong>Email:</strong> djonat23 at gmail.com
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> 0176/20998649
            </p>
            <p className="mb-1">
              <strong>Address:</strong> Paderborner Str. 8, 10709 Berlin
            </p> */}
            <p className="mb-6">
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/dj4815"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                github.com/dj4815
              </a>
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2 border-b border-blue-500 pb-1">
              Technical Skills
            </h3>
            <p className="mb-4">
              Astro, Bootstrap, C, CSS, Divi, Elementor, Git, HTML, JavaScript,
              Jira, React, Shopify, Tailwind CSS, Visual Studio Code, Vite,
              WordPress, Webflow
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-2 border-b border-blue-500 pb-1">
              Work Experience
            </h3>

            {/* Content Manager */}
            <div className="mb-6 w-full">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">Content Manager</p>
                <span className="bg-blue-600 text-white text-sm rounded-lg px-4 shadow shadow-slate-800">
                  03/2022 – Present
                </span>
              </div>
              <p>Kiber Digital GmbH, Berlin</p>
            </div>

            {/* Receptionist */}
            <div className="mb-6 w-full">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">Receptionist</p>
                <span className="bg-slate-600 text-white text-sm rounded-lg px-4 shadow shadow-slate-800">
                  03/2018 – 02/2022
                </span>
              </div>
              <p>Meininger Oranienburger Straße GmbH, Berlin</p>
            </div>

            {/* Student Assistant – FU Berlin */}

            <div className="mb-6 w-full">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">Student Assistant</p>
                <span className="bg-slate-600 text-white text-sm rounded-lg px-4 shadow shadow-slate-800">
                  10/2016 – 02/2018
                </span>
              </div>
              <p>Freie Universität Berlin</p>
            </div>

            {/* Student Assistant – Viadrina */}
            <div className="mb-6 w-full">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">Student Assistant</p>
                <span className="bg-slate-600 text-white text-sm rounded-lg px-4 shadow shadow-slate-800">
                  05/2015 – 09/2016
                </span>
              </div>
              <p>Europa-Universität Viadrina, Frankfurt (Oder)</p>
            </div>

            {/* Student Assistant – SOEP */}
            <div className="mb-6 w-full">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">Student Assistant</p>
                <span className="bg-slate-600 text-white text-sm rounded-lg px-4 shadow shadow-slate-800">
                  10/2013 – 04/2015
                </span>
              </div>
              <p>
                Deutsches Institut für Wirtschaftsforschung e. V. (DIW Berlin)
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-2 border-b border-blue-500 pb-1">
              Education
            </h3>

            {/* Software Development */}

            <div className="mb-6 w-full">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">Software Development</p>
                <span className="bg-blue-600 text-white text-sm rounded-lg px-4 shadow shadow-slate-800">
                  04/2024 – Present
                </span>
              </div>
              <p>IU Internationale Universität, online</p>
            </div>

            {/* History/German Philology */}
            <div className="mb-6 w-full">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">History/German</p>
                <span className="bg-slate-600 text-white text-sm rounded-lg px-4 shadow shadow-slate-800">
                  10/2016 – 09/2021
                </span>
              </div>
              <p>Freie Universität Berlin</p>
            </div>

            {/* Law */}
            <div className="mb-6 w-full">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">Law</p>
                <span className="bg-slate-600 text-white text-sm rounded-lg px-4 shadow shadow-slate-800">
                  10/2013 – 09/2016
                </span>
              </div>
              <p>Europa-Universität Viadrina, Frankfurt (Oder)</p>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-2 border-b border-blue-500 pb-1">
              Certificates
            </h3>

            <ul className="list-disc pl-5 mb-4">
              <li>CompTIA A+ (2025)</li>
              <li>Duolingo CEFR C2 English (2024)</li>
            </ul>

            <div className="flex flex-wrap gap-4 my-6">
              {/* Credly badge */}
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="389cf513-4e20-40a4-a842-50e3237f56ae"
                data-share-badge-host="https://www.credly.com"
              ></div>

              {/* Duolingo certificate image */}
              <a
                href="https://certs.duolingo.com/271y2qbfl1vu1neh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/duolingo-cert-sm.png"
                  alt="Duolingo CEFR C2 English"
                  className="w-auto h-[150px]"
                />
              </a>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-2 border-b border-blue-500 pb-1">
              Languages
            </h3>
            <ul className="list-disc pl-5">
              <li>German (Native)</li>
              <li>English (C2)</li>
              <li>French (Basic knowledge)</li>
              <li>Polish (Basic knowledge)</li>
            </ul>
          </>
        }
        buttonText={["Download Resume"]}
        buttonVariants={["bluePrimary"]}
      />
    </>
  );
}
