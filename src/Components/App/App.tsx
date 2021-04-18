import React from "react";
import "./App.css";
import PageTitle from "../AppTitle/AppTitle";
import Accordion from "../Accordion/Accordion";
import Rating from "../Rating/Rating";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageTitle title="I'm page title HAHAHAH" />
      </header>
      Article
      <Rating value={3} />
      <Accordion title="Menu" collapsed={true} />
      <Accordion title="Users" collapsed={false} />
      Article 2
      <Rating value={4} />
    </div>
  );
}

export default App;
