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

      <Section
        image="./assets/selection-sort.jpg"
        buttonText={["View Code"]}
        buttonVariants={["blackPrimary"]}
      >
        <h2 className="text-4xl font-bold mb-4">
          Selection Sort{" "}
          <span className="bg-black text-white rounded-full px-4">C</span>
        </h2>
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

      <Section
        image="./assets/indigo-and-orange.jpg"
        buttonText={["View Code"]}
        buttonVariants={["blackPrimary"]}
      >
        <h2 className="text-4xl font-bold mb-4">
          Website: Indigo and Orange{" "}
          <span className="bg-black text-white rounded-full px-4">
            React/Tailwind
          </span>
        </h2>
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
    </>
  );
}
