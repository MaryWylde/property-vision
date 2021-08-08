import React from "react";
import Header from "../src/components/header/header";
import Content from "../src/pages/mainContent/content";
import "./App.styles.scss";
function App() {
  return (
    <>
      <head>
        <title>Property Vision</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,600;1,200;1,800&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <div>
        <div>
          <Header />
        </div>
        <main>
          <Content />
        </main>
      </div>
    </>
  );
}

export default App;
