import React from "react";
import HeroImage from "./HeroImage";
import Section from "./Section";

export default function Projects() {
  return (
    <>
      <HeroImage
        image="./assets/black-and-white-buildings.jpg"
        heading1="Projects"
        heading1Style="primaryBg"
      ></HeroImage>

      {/* Selection Sort */}
      <Section
        image="./assets/selection-sort.jpg"
        buttonText={["View Code"]}
        buttonVariants={["blackPrimary"]}
        buttonLinks={["https://github.com/dj4815/selection-sort"]}
        roundedCornerClass="rounded-br-[100px]"
        noTopPadding={true}
      >
        <h2 className="text-4xl font-bold mb-4">Selection Sort</h2>
        <span className="bg-black text-white font-semibold text-lg rounded-lg px-4 py-2 shadow shadow-slate-800">
          C
        </span>
        <p className="text-lg">
          This project features an implementation of the Selection Sort
          algorithm in C, applied to a randomly generated array of 50,000 unique
          integers. The algorithm repeatedly selects the smallest element from
          the unsorted portion of the array and swaps it with the element at the
          current position.
        </p>
        <p className="text-lg">
          Although not the most efficient for large datasets due to its O(n²)
          time complexity, this implementation demonstrates a fundamental
          sorting technique often used for educational purposes. The project
          includes additional arrays sorted in ascending, descending, and random
          order to provide a foundation for comparing the performance of
          different sorting algorithms.
        </p>
      </Section>

      {/* Blog Preview Card */}
      <Section
        image="./assets/blog-preview-card.png"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        buttonLinks={[
          "https://github.com/dj4815/blog-preview-card",
          "https://dj4815.github.io/blog-preview-card/",
        ]}
        roundedCornerClass="rounded-bl-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Blog Preview Card</h2>
        <span className="bg-[#e34c26] text-white font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          HTML
        </span>
        <span className="bg-[#264de4] text-white font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          CSS
        </span>

        <p className="text-lg">
          A sleek and responsive blog preview card built with pure HTML and CSS,
          faithfully recreated according to a provided Figma design. It features
          a clean layout with an engaging header image, concise text excerpt,
          and a clear call-to-action button. The design adapts smoothly to
          different screen sizes, showcasing modern styling techniques such as
          flexbox, custom fonts, and shadow effects to enhance user interaction.
        </p>
      </Section>

      {/* Calculator */}
      <Section
        image="./assets/calculator.jpg"
        buttonText={["View Code"]}
        buttonVariants={["blackPrimary"]}
        buttonLinks={["https://github.com/dj4815/calc-u-later"]}
        roundedCornerClass="rounded-br-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Calc-U-Later</h2>
        <span className="bg-black text-white font-semibold text-lg rounded-lg px-4 py-2 shadow shadow-slate-700">
          C
        </span>
        <p className="text-lg">
          Calc-U-Later is a command-line calculator built in C that allows users
          to perform basic arithmetic operations: addition, subtraction,
          multiplication, and division. The app features a simple and
          interactive loop-based interface, enabling repeated calculations until
          the user chooses to exit. It includes input validation for division by
          zero and provides user-friendly feedback.
        </p>
        <p className="font-semibold text-lg">Key Features:</p>
        <ul className="list-disc pl-5 mt-1 text-lg">
          <li>Supports +, -, *, and / operations</li>
          <li>Interactive loop with repeat prompt</li>
          <li>Graceful handling of division by zero</li>
          <li>Clear output formatting for results</li>
        </ul>
      </Section>

      {/* QR Code Component */}
      <Section
        image="./assets/qr-code-component.png"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        buttonLinks={[
          "https://github.com/dj4815/qr-code-component",
          "https://dj4815.github.io/qr-code-component/",
        ]}
        roundedCornerClass="rounded-bl-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">QR Code Component</h2>
        <span className="bg-[#e34c26] text-white font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          HTML
        </span>
        <span className="bg-[#264de4] text-white font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          CSS
        </span>

        <p className="text-lg">
          This project is a clean and responsive QR code card, built as part of
          a Frontend Mentor challenge to sharpen my foundational HTML and CSS
          skills. The component features a centered layout using Flexbox, styled
          with a modern aesthetic and a focus on simplicity and clarity.
        </p>
        <p className="text-lg">
          I used semantic HTML to structure the content and applied custom CSS
          to create a card with rounded corners, shadows, and smooth typography
          using the Google Fonts API. The layout is fully responsive and
          optimized for smaller screens, making it a great example of accessible
          and mobile-friendly design.
        </p>
        <p className="text-lg">
          This component helped me reinforce my understanding of layout
          techniques, visual hierarchy, and the importance of clean,
          maintainable code in front-end development.
        </p>
      </Section>

      {/* Pokedex */}
      <Section
        image="./assets/random-pokemon.png"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        buttonLinks={[
          "https://github.com/dj4815/random-pokemon",
          "https://dj4815.github.io/random-pokemon/",
        ]}
        reverse={true}
        roundedCornerClass="rounded-br-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Random Pokémon Generator </h2>
        <span className="bg-white text-[#0081A3] font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          React
        </span>
        <span className="bg-[#264de4] text-white font-semibold text-lg rounded-lg px-4 py-2 shadow shadow-slate-700">
          CSS
        </span>

        <p className="text-lg">
          This is a React-based web application I made for my son, who is a big
          Pokémon fan. It dynamically displays a random Pokémon using the
          official Pokémon artwork. Upon clicking the "Generate New Pokémon"
          button, the app fetches a new random Pokémon by generating a number
          between 1 and 1025, which corresponds to the Pokémon's ID in the
          PokéAPI asset repository.
        </p>
        <p className="text-lg">
          The displayed Pokémon updates instantly without reloading the page,
          thanks to React's useState hook for dynamic rendering. The interface
          is styled with custom CSS, featuring a visually appealing card layout
          and responsive image display. This project demonstrates basic React
          state management, event handling, and integration of external image
          assets.
        </p>
        <p className="text-lg">
          I plan on gradually turning this into a fully fledged Pokédex.
        </p>
      </Section>

      {/* Color Boxes */}
      <Section
        image="./assets/color-boxes.png"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        buttonLinks={[
          "https://github.com/dj4815/color-boxes",
          "https://dj4815.github.io/color-boxes/",
        ]}
        roundedCornerClass="rounded-bl-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Color Boxes</h2>
        <span className="bg-white text-[#0081A3] font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          React
        </span>
        <span className="bg-[#264de4] text-white font-semibold text-lg rounded-lg px-4 py-2 shadow shadow-slate-700">
          CSS
        </span>

        <p className="text-lg">
          This React application generates a 4×4 grid of interactive,
          color-changing boxes. Each ColorBox component is initialized with a
          random color from a predefined palette of 16 vibrant shades. When a
          user clicks on a box, it instantly changes to a new random color,
          demonstrating dynamic state updates using React’s useState hook.
        </p>
        <p className="text-lg">
          The grid is created by the ColorBoxGrid component, which renders 16
          ColorBox elements. A reusable utility function ensures truly random
          color selection. The app's design is clean, visually engaging, and
          built with modular, maintainable code.
        </p>
        <p className="text-lg">
          This project showcases core front-end skills including:
        </p>
        <ul className="list-disc pl-5 mt-1 text-lg">
          <li>Functional React components</li>
          <li>State management with useState</li>
          <li>Event handling</li>
          <li>Prop passing and component composition</li>
          <li>Custom styling with CSS</li>
        </ul>
      </Section>

      {/* Phonebook */}
      <Section
        image="./assets/phonebook.jpg"
        buttonText={["View Code"]}
        buttonVariants={["blackPrimary"]}
        buttonLinks={["https://github.com/dj4815/phonebook"]}
        roundedCornerClass="rounded-br-[100px]"
        reverse={true}
      >
        <h2 className="text-4xl font-bold mb-4">Phonebook</h2>
        <span className="bg-black text-white font-semibold text-lg rounded-lg px-4 py-2 shadow shadow-slate-700">
          C
        </span>
        <p className="text-lg">
          This simple C program allows users to add contact information to a CSV
          file through the command line. It's a lightweight tool built using
          only standard C libraries, making it easy to compile and run in any
          basic C environment.
        </p>
        <p className="font-semibold text-lg">Key Features:</p>
        <ul className="list-disc pl-5 mt-1 text-lg">
          <li>
            Add entries: Users are prompted to enter a name and phone number,
            which are then saved to a phonebook.csv file in a comma-separated
            format.
          </li>
          <li>
            Data persistence: All contacts are stored in a persistent,
            human-readable CSV file.
          </li>
          <li>
            Built with: Standard C (stdio.h, string.h), focusing on core
            programming concepts like user input and file handling.
          </li>
        </ul>
      </Section>

      {/* Random Color Generator */}
      <Section
        image="./assets/random-color-generator.png"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        buttonLinks={[
          "https://github.com/dj4815/random-color-generator",
          "https://dj4815.github.io/random-color-generator/",
        ]}
        roundedCornerClass="rounded-bl-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Random Color Generator</h2>
        <span className="bg-[#e34c26] text-white font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          HTML
        </span>
        <span className="bg-[#264de4] text-white font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          CSS
        </span>
        <span className="bg-[#f0db4f] text-[#323330] font-semibold text-lg rounded-lg px-4 py-2 shadow shadow-slate-700">
          JS
        </span>

        <p className="text-lg">
          This is a simple JavaScript project that demonstrates dynamic DOM
          manipulation and event handling in a visually engaging way. With a
          single button click, the background color of the webpage changes to a
          randomly generated RGB color, which is also displayed in real-time as
          text.
        </p>
        <p className="font-semibold text-lg">Key Features:</p>
        <ul className="list-disc pl-5 mt-1 text-lg">
          <li>Generates a new random RGB color on each button click.</li>
          <li>
            Updates both the background and on-screen text to reflect the
            current color.
          </li>
          <li>
            Responsive and accessible layout using semantic HTML and modern CSS.
          </li>
        </ul>
      </Section>

      {/* Scorekeeper */}
      <Section
        image="./assets/scorekeeper.png"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        buttonLinks={[
          "https://github.com/dj4815/scorekeeper",
          "https://dj4815.github.io/scorekeeper/",
        ]}
        roundedCornerClass="rounded-br-[100px]"
        reverse={true}
      >
        <h2 className="text-4xl font-bold mb-4">Scorekeeper</h2>
        <span className="bg-[#e34c26] text-white font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          HTML
        </span>
        <span className="bg-[#264de4] text-white font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          CSS
        </span>
        <span className="bg-[#f0db4f] text-[#323330] font-semibold text-lg rounded-lg px-4 py-2 shadow shadow-slate-700">
          JS
        </span>

        <p className="text-lg">
          This is a simple JavaScript project that demonstrates dynamic DOM
          manipulation and event handling in a visually engaging way. With a
          single button click, the background color of the webpage changes to a
          randomly generated RGB color, which is also displayed in real-time as
          text.
        </p>
        <p className="font-semibold text-lg">Key Features:</p>
        <ul className="list-disc pl-5 mt-1 text-lg">
          <li>Real-time score updates for two players.</li>
          <li>Reset functionality to start a new game instantly.</li>
          <li>Clean, minimal interface with intuitive interaction.</li>
        </ul>
      </Section>

      {/* Indigo and Orange */}
      <Section
        image="./assets/indigo-and-orange.jpg"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        buttonLinks={["https://github.com/dj4815/indigo-and-orange"]}
        reverse={true}
        roundedCornerClass="rounded-bl-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Website: Indigo and Orange</h2>
        <span className="bg-white text-[#0081A3] font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          React
        </span>
        <span className="bg-[#61DBFB] text-black font-semibold text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          Tailwind CSS
        </span>
        <p className="text-lg">
          Indigo and Orange was my first real dive into web design using React
          and Tailwind CSS. The project started as an experiment to explore
          modern front-end tools and turned into a hands-on way to learn
          component-based development, responsive design, and styling with
          utility-first CSS.
        </p>
        <p className="text-lg">
          While it's simple, it marks the beginning of my journey into building
          user interfaces from scratch and taught me a lot about structuring
          code, working with state, and making things look good on different
          screen sizes.
        </p>
      </Section>
    </>
  );
}
