import React from "react";
import Section from "./Section";

export default function Resume() {
  return (
    <>
      <Section
        image="./assets/glitch-spiral.jpg"
        heading1="Hi, my name is"
        heading1Style="primaryBg"
        noTopPadding={true}
        roundedCornerClass="rounded-b-[150px]"
        content={
          <>
            <h2 className="text-4xl font-bold mb-4">Dominik Jonat</h2>
            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:djonat23@gmail.com"
                className="text-blue-600 underline"
              >
                djonat23@gmail.com
              </a>
            </p>
            <p className="mb-1">
              <strong>Phone:</strong>{" "}
              <a href="tel:017620998649" className="text-blue-600 underline">
                017620998649
              </a>
            </p>
            <p className="mb-1">
              <strong>Address:</strong> Paderborner Str. 8, 10709 Berlin
            </p>
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
            <div className="mb-6">
              <h4 className="flex justify-between">
                <span className="font-semibold">Content Manager</span>
                <span className="font-normal">03/2022 – Present</span>
              </h4>
              <p>Kiber Digital GmbH, Berlin</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Development of international content strategy</li>
                <li>
                  Creation and maintenance of websites
                  (WordPress/Elementor/Divi) and online stores
                  (Shopify/WooCommerce)
                </li>
                <li>Technical/on-page/off-page SEO</li>
                <li>
                  Planning, execution and analysis of email marketing campaigns
                  (Zapier)
                </li>
              </ul>
            </div>

            {/* Receptionist */}
            <div className="mb-4">
              <h4 className="flex justify-between">
                <span className="font-semibold">Receptionist</span>
                <span className="font-normal">03/2018 – 02/2022</span>
              </h4>
              <p>Meininger Oranienburger Straße GmbH, Berlin</p>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Guest support, check-in/out, and administrative tasks in a
                  fast-paced hospitality environment.
                </li>
              </ul>
            </div>

            {/* Student Assistant – FU Berlin */}
            <div className="mb-4">
              <h4 className="flex justify-between">
                <span className="font-semibold">
                  Student Assistant – Language Center
                </span>
                <span className="font-normal">10/2016 – 02/2018</span>
              </h4>
              <p>Freie Universität Berlin</p>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Administrative support for language courses and departmental
                  organization.
                </li>
              </ul>
            </div>

            {/* Student Assistant – Viadrina */}
            <div className="mb-4">
              <h4 className="flex justify-between">
                <span className="font-semibold">
                  Student Assistant – Language Center
                </span>
                <span className="font-normal">05/2015 – 09/2016</span>
              </h4>
              <p>Europa-Universität Viadrina, Frankfurt (Oder)</p>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Assisted instructors and managed digital resources for
                  language learning.
                </li>
              </ul>
            </div>

            {/* Student Assistant – SOEP */}
            <div className="mb-6">
              <h4 className="flex justify-between">
                <span className="font-semibold">
                  Student Assistant – Socio-Economic Panel (SOEP)
                </span>
                <span className="font-normal whitespace-nowrap">
                  10/2013 – 04/2015
                </span>
              </h4>
              <p>DIW Berlin</p>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Supported survey data preparation and literature research for
                  economic projects.
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-2 border-b border-blue-500 pb-1">
              Education
            </h3>

            {/* Software Development */}
            <div className="mb-4 w-full">
              <h4 className="flex justify-between">
                <span className="font-semibold">Software Development</span>
                <span className="font-normal whitespace-nowrap">
                  04/2024 – Present
                </span>
              </h4>
              <p>IU International University</p>
            </div>

            {/* History/German Philology */}
            <div className="mb-4 w-full">
              <h4 className="flex justify-between">
                <span className="font-semibold">History/German</span>
                <span className="font-normal whitespace-nowrap">
                  10/2016 – 09/2021
                </span>
              </h4>
              <p>Freie Universität Berlin</p>
            </div>

            {/* Law */}
            <div className="mb-4 w-full">
              <h4 className="flex justify-between">
                <span className="font-semibold">Law</span>
                <span className="font-normal whitespace-nowrap">
                  10/2013 – 09/2016
                </span>
              </h4>
              <p>Europa-Universität Viadrina, Frankfurt (Oder)</p>
            </div>

            <h3 className="text-2xl font-semibold mt-6 mb-2 border-b border-blue-500 pb-1">
              Certificates
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>CompTIA A+</li>
              <li>CompTIA Network+</li>
              <li>Duolingo CEFR C2 (English)</li>
            </ul>

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
