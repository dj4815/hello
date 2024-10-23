import React from "react";
import Button from "./Button";

export default function Section() {
  return (
    <div className="container-2xl bg-slate-50 px-12 sm:px-32 xl:px-96 py-24 lg:py-48">
      <h1 className="text-6xl font-bold mb-4">I am Section One.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, labore
        odio tempora dolorem voluptates reprehenderit, molestias doloribus
        voluptatibus provident illum eaque? Possimus atque ea quas cupiditate
        assumenda! Placeat, beatae dolor. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Repellat libero rerum voluptatum dicta, harum saepe
        dolorem cupiditate officia nesciunt optio sunt assumenda voluptatibus
        eum? Inventore, maxime! Delectus odio placeat fuga.
      </p>
      <Button />
    </div>
  );
}
