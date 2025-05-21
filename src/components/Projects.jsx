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
        roundedCornerClass="rounded-br-[100px]"
        noTopPadding={true}
      >
        <h2 className="text-4xl font-bold mb-4">Selection Sort</h2>
        <span className="bg-slate-900 text-white text-lg rounded-lg px-4 py-2 shadow shadow-slate-800">
          C
        </span>
        <p>
          This project features an implementation of the Selection Sort
          algorithm in C, applied to a randomly generated array of 50,000 unique
          integers. The algorithm repeatedly selects the smallest element from
          the unsorted portion of the array and swaps it with the element at the
          current position.
        </p>
        <p>
          Although not the most efficient for large datasets due to its O(n²)
          time complexity, this implementation demonstrates a fundamental
          sorting technique often used for educational purposes. The project
          includes additional arrays sorted in ascending, descending, and random
          order to provide a foundation for comparing the performance of
          different sorting algorithms.
        </p>
      </Section>

      {/* Indigo and Orange */}
      <Section
        image="./assets/indigo-and-orange.jpg"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        reverse={true}
        roundedCornerClass="rounded-bl-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Website: Indigo and Orange</h2>
        <span className="bg-slate-900 text-[#61DBFB] text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          React
        </span>
        <span className="bg-[#61DBFB] text-black text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          Tailwind CSS
        </span>
        <p>
          Indigo and Orange was my first real dive into web design using React
          and Tailwind CSS. The project started as an experiment to explore
          modern front-end tools and turned into a hands-on way to learn
          component-based development, responsive design, and styling with
          utility-first CSS.
        </p>
        <p>
          While it's simple, it marks the beginning of my journey into building
          user interfaces from scratch and taught me a lot about structuring
          code, working with state, and making things look good on different
          screen sizes.
        </p>
      </Section>

      {/* Calculator */}
      <Section
        image="./assets/calculator.jpg"
        buttonText={["View Code"]}
        buttonVariants={["blackPrimary"]}
        roundedCornerClass="rounded-br-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Calcu-Later</h2>
        <span className="bg-slate-900 text-white text-lg rounded-lg px-4 py-2 shadow shadow-slate-700">
          C
        </span>
        <p>
          Calcu-Later is a command-line calculator built in C that allows users
          to perform basic arithmetic operations: addition, subtraction,
          multiplication, and division. The app features a simple and
          interactive loop-based interface, enabling repeated calculations until
          the user chooses to exit. It includes input validation for division by
          zero and provides user-friendly feedback.
        </p>
        <p className="font-semibold">Key Features:</p>
        <ul className="list-disc pl-5 mt-1">
          <li>Supports +, -, *, and / operations</li>
          <li>Interactive loop with repeat prompt</li>
          <li>Graceful handling of division by zero</li>
          <li>Clear output formatting for results</li>
        </ul>
      </Section>

      {/* Random Pokemon */}
      <Section
        image="./assets/random-pokemon.jpg"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        reverse={true}
        roundedCornerClass="rounded-bl-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Random Pokémon Generator </h2>
        <span className="bg-slate-900 text-[#61DBFB] text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          React
        </span>
        <span className="bg-[#264de4] text-white text-lg rounded-lg px-4 py-2 shadow shadow-slate-700">
          CSS
        </span>

        <p>
          This React-based web application dynamically displays a random Pokémon
          using the official Pokémon artwork. Upon clicking the "Generate New
          Pokémon" button, the app fetches a new random Pokémon by generating a
          number between 1 and 1025, which corresponds to the Pokémon's ID in
          the PokéAPI asset repository.
        </p>
        <p>
          The displayed Pokémon updates instantly without reloading the page,
          thanks to React's useState hook for dynamic rendering. The interface
          is styled with custom CSS, featuring a visually appealing card layout
          and responsive image display. This project demonstrates basic React
          state management, event handling, and integration of external image
          assets.
        </p>
      </Section>

      {/* Color Boxes */}
      <Section
        image="./assets/color-boxes.jpg"
        buttonText={["View Code", "Live Demo"]}
        buttonVariants={["blackPrimary", "blackSecondary"]}
        roundedCornerClass="rounded-br-[100px]"
      >
        <h2 className="text-4xl font-bold mb-4">Color Boxes</h2>
        <span className="bg-slate-900 text-[#61DBFB] text-lg rounded-lg px-4 py-2 mr-2 shadow shadow-slate-700">
          React
        </span>
        <span className="bg-[#264de4] text-white text-lg rounded-lg px-4 py-2 shadow shadow-slate-700">
          CSS
        </span>

        <p>
          This React application generates a 4×4 grid of interactive,
          color-changing boxes. Each ColorBox component is initialized with a
          random color from a predefined palette of 16 vibrant shades. When a
          user clicks on a box, it instantly changes to a new random color,
          demonstrating dynamic state updates using React’s useState hook.
        </p>
        <p>
          The grid is created by the ColorBoxGrid component, which renders 16
          ColorBox elements. A reusable utility function ensures truly random
          color selection. The app's design is clean, visually engaging, and
          built with modular, maintainable code.
        </p>
        <p>This project showcases core front-end skills including:</p>
        <ul className="list-disc pl-5 mt-1">
          <li>Functional React components</li>
          <li>State management with useState</li>
          <li>Event handling</li>
          <li>Prop passing and component composition</li>
          <li>Custom styling with CSS</li>
        </ul>
      </Section>
    </>
  );
}
