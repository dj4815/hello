import React from "react";
import Section from "./Section";
import ResumeText from "./ResumeText";

export default function Resume() {
  return (
    <>
      <Section
        image="./assets/glitch-spiral.jpg"
        heading1="Hi, my name is"
        heading1Style="primaryBg"
        noTopPadding={true}
        paragraph={
          <div class="w-full bg-white text-gray-800 p-6 md:p-12">
            <h1 class="text-3xl md:text-4xl font-bold mb-2">Dominik Jonat</h1>
            {/* <p class="text-lg text-gray-600 mb-4">
              Aspiring Developer | JavaScript, React, C
            </p> */}
            <div class="border-b border-gray-300 mb-6"></div>

            <div class="mb-6">
              <p>Email: djonat23[at]gmail.com</p>
              <p>Phone: 017620998649</p>
              <p>Location: Berlin, Germany</p>
              <p>Website: dj4815.github.io/hello/</p>
            </div>

            {/* <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">Professional Summary</h2>
              <p class="text-gray-700">
                Creative and detail-oriented developer with 3+ years of
                experience building scalable web applications and working across
                the full stack. Passionate about clean code, UX, and modern
                JavaScript frameworks.
              </p>
            </div> */}

            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">Skills</h2>
              <ul class="list-disc list-inside text-gray-700">
                <li>JavaScript, C</li>
                <li>React, Tailwind CSS, Bootstrap</li>
                <li>Astro, Vite</li>
                <li>WordPress, Webflow, Divi, Elementor</li>
              </ul>
            </div>

            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">Experience</h2>
              <div class="mb-4">
                <h3 class="font-bold">Software Engineer – TechCorp</h3>
                <p class="text-sm text-gray-500">Jan 2022 – Present</p>
                <ul class="list-disc list-inside text-gray-700 mt-1">
                  <li>
                    Developed React-based internal tools used by 1,000+
                    employees.
                  </li>
                  <li>
                    Improved app performance by 25% through code refactoring.
                  </li>
                  <li>
                    Collaborated with designers and backend developers in Agile
                    team.
                  </li>
                </ul>
              </div>
            </div>

            <div class="mb-6">
              <h2 class="text-xl font-semibold mb-2">Education</h2>
              <p class="text-gray-700">
                B.S. in Computer Science – University of Somewhere
                <span class="text-sm text-gray-500">2016 – 2020</span>
              </p>
            </div>
          </div>
        }
      />
    </>
  );
}
