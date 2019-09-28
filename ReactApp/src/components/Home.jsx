import React, { Component } from "react";

class Home extends Component {
  // state = {  }
  render() {
    return (
      <main className="h-screen-85 text-center bg-gray-800 text-white">
        <h1 className="inline-block w-5/6 md:w-4/5 pt-24 text-lg md:text-4xl">
          Um simples Projeto em Django para organizar anotações e assuntos de
          qualquer interesse.
        </h1>
        <br />
        <button className="mt-8 p-4 bg-teal-500 hover:bg-white text-black">
          Go to project on Github
        </button>
      </main>
    );
  }
}

export default Home;
