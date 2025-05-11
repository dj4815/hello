import React from "react";
import Section from "./Section";
import Card from "./Card";

export default function Home() {

  return (
    <>
      <Section
        image="./assets/blue-waves.jpg"
        heading1="Welcome! Look at this website I made."
        heading1Style="secondary"
        heading2="I am section one."
        heading2Style="primary"
        titleStyle="secondary"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium cumque laboriosam ducimus facilis, dicta, omnis sit ipsa beatae eius ullam, distinctio deleniti architecto autem sed in fugit tempora voluptate doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem distinctio nisi fuga provident, ipsam blanditiis, totam consectetur, repellat dolorum nemo iste possimus sint fugit quas harum quia. Asperiores, voluptas."
        buttonText={["Primary Button", "Secondary Button"]}
        buttonVariants={["bluePrimary", "blueSecondary"]}
        noTopPadding={true}
      />

      <Card
        heading="I am card."
        headingStyle="secondary"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, labore
        odio tempora dolorem voluptates reprehenderit, molestias doloribus
        voluptatibus provident illum eaque? Possimus atque ea quas cupiditate
        assumenda! Placeat, beatae dolor. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat libero rerum voluptatum dicta, harum saepe
        dolorem cupiditate officia nesciunt optio sunt assumenda voluptatibus
        eum? Inventore, maxime! Delectus odio placeat fuga."
        paragraphColor="secondary"
        bgColor="bg-gradient-to-b from-blue-700 to-cyan-500"
      />
      <Section
        image="./assets/black-and-white-buildings.jpg"
        heading1="Another awesome h1 because why not."
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
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, labore
        odio tempora dolorem voluptates reprehenderit, molestias doloribus
        voluptatibus provident illum eaque? Possimus atque ea quas cupiditate
        assumenda! Placeat, beatae dolor. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat libero rerum voluptatum dicta, harum saepe
        dolorem cupiditate officia nesciunt optio sunt assumenda voluptatibus
        eum? Inventore, maxime! Delectus odio placeat fuga."
        paragraphColor="secondary"
        bgColor="bg-gradient-to-b from-black to-gray-500"
      />
    </>
  );
}
