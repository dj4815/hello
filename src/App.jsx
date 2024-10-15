import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <body className="container-2xl mx-auto">
        <nav>
          <NavBar />
        </nav>
        <main>
          <Main />
        </main>
        <footer></footer>
      </body>
    </>
  );
}
