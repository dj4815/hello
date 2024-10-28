import React from "react";
import Section from "./Section";
import Card from "./Card";
import Footer from "./Footer";

export default function Main() {
  return (
    <>
      <Section
        image="./assets/blue-waves.jpg"
        heading="Hello there!"
        paragraph="Welcome to my website. As you can see, this is a work in progress. There is not much content yet, as I am still working on the base structure and components of the website. The finished product should have a homepage (you're viewing it right now) and a projects section, where I am going to show off what I have. I also want to implement a language switcher German <> English, as well as a dark mode. So for now, everything is going to be super bright and in English only, sorry about that! Also, the page is going to be extra messy on desktop, as I am doing mobile first."
        buttonText="View Projects"
        buttonVariant="primary"
      />
      <Card
        heading="I am Card."
        headingColor="secondary"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, labore
        odio tempora dolorem voluptates reprehenderit, molestias doloribus
        voluptatibus provident illum eaque? Possimus atque ea quas cupiditate
        assumenda! Placeat, beatae dolor. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat libero rerum voluptatum dicta, harum saepe
        dolorem cupiditate officia nesciunt optio sunt assumenda voluptatibus
        eum? Inventore, maxime! Delectus odio placeat fuga."
        paragraphColor="secondary"
      />
      <Section
        image="./assets/black-and-white-buildings.jpg"
        heading="I am Section Two."
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, labore
        odio tempora dolorem voluptates reprehenderit, molestias doloribus
        voluptatibus provident illum eaque? Possimus atque ea quas cupiditate
        assumenda! Placeat, beatae dolor. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat libero rerum voluptatum dicta, harum saepe
        dolorem cupiditate officia nesciunt optio sunt assumenda voluptatibus
        eum? Inventore, maxime! Delectus odio placeat fuga."
        buttonText="Secondary Button"
        buttonVariant="secondary"
      />
      <Footer />
    </>
  );
}
