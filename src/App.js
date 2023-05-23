import React from "react";

const App = () => {
  return (
    <h1>
  <Movie />
  <Movie />
  <Movie />
  <Movie />
  </h1>
  );
};

const Movie = () => {
  return (
    <article>
      <ImageComponent />
      <TitleComponent />
    </article>
  );
};

const ImageComponent = () => {
  return (
    <img
    src="https://occ-0-4829-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ_MkVS7SCcEaSTGunJa3oFnVSMxsZekHkH2YERXlA5d44tyqo9Re8hWCOrViyx2pBZqyjle899vHWJUC6kbA4D7EuOoUg5Wtyyv-e5v3oZqZsld9pazNjx-77lGFvWlMkPX.jpg?r=12a"
    alt="netflix image show"
    />
  );
};

const TitleComponent = () => {
  return <h2 style={{color:"black", fontSize:"22px"}}> Movie Name: 
  <span style={{color: "greenyellow"}}> OUR UNIVERSE</span>
  </h2>
};

export default App;