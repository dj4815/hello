import React from "react";
import Section from "./Section";
import Card from "./Card";

export default function Home() {
  return (
    <>
      <Section
        image="./assets/blue-waves.jpg"
        heading1="Welcome to my personal website."
        heading1Style="secondary"
        heading2="Why don't you have a look at my resume?"
        heading2Style="primary"
        titleStyle="secondary"
        buttonText={["Download Resume"]}
        buttonVariants={["bluePrimary"]}
        noTopPadding={true}
      >
        <p>
          I need to fill this with some text, and I don't want to use lorem
          ipsum so instead, I'm going to tell you how I made this website.
        </p>
        <p>
          I used React because I wanted to practice it and show off my skills,
          not because it was needed. Plain old HTML and CSS would have done the
          job.
        </p>
        <p>
          I am a big fan of TailwindCSS, so that's what I used. I can write CSS
          myself, but I prefer working within a set design system. It just looks
          more professional.
        </p>
        <p>
          I also learned how to deploy this website automatically on each git
          push through GitHub actions, which was a valuable lesson and
          surprisingly easy.
        </p>
      </Section>
      <Card
        heading="My name is Dominik."
        headingStyle="secondary"
        bgColor="bg-gradient-to-b from-blue-700 to-cyan-500"
      >
        <ul className="list-disc pl-5 mt-1">
          <li>Age: 35</li>
          <li>Nationality: German</li>
          <li>Favorite Food: Chinese</li>
          <li>Stack: React + Tailwind</li>
        </ul>
      </Card>
      <Section
        image="./assets/black-and-white-buildings.jpg"
        heading1="Another awesome heading because why not."
        heading1Style="secondary"
        heading2="I am section two."
        heading2Style="primary"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, labore
        odio tempora dolorem voluptates reprehenderit, molestias doloribus
        voluptatibus provident illum eaque? Possimus atque ea quas cupiditate
        assumenda! Placeat, beatae dolor. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat libero rerum voluptatum dicta, harum saepe
        dolorem cupiditate officia nesciunt optio sunt assumenda voluptatibus
        eum? Inventore, maxime! Delectus odio placeat fuga."
        buttonText="Secondary Button"
        buttonVariant="secondary"
        noTopPadding={true}
      />
      <Card
        heading="I am card two."
        headingStyle="secondary"
        bgColor="bg-gradient-to-b from-black to-gray-500"
      ></Card>
    </>
  );
}
