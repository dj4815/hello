import React from "react";
import Section from "./Section";

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
        roundedCornerClass="rounded-br-[100px]"
      >
        <p>
          Hi, my name is Dominik and I'm a passionate aspiring web developer focused on building fast,
          responsive, and accessible websites. With experience in HTML, CSS,
          JavaScript, and React, I enjoy turning ideas into code and solving
          real-world problems through intuitive design and development. Whether
          it's a portfolio, an app, or a custom project, I aim to write clean
          code and create smooth user experiences.
        </p>
      </Section>
    </>
  );
}
