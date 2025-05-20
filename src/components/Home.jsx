import React from "react";
import Section from "./Section";
import SectionNoImg from "./SectionNoImg";

export default function Home() {
  return (
    <>
      <Section
        image="./assets/blue-waves.jpg"
        heading1="Welcome to my personal website."
        heading1Style="secondary"
        titleStyle="secondary"
        buttonText={["Download Resume"]}
        buttonVariants={["bluePrimary"]}
        noTopPadding={true}
      >
        <p>
          I need to fill this section with some text, and I don't want to use
          lorem ipsum so instead, I'm going to tell you how I made this website.
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
    </>
  );
}
