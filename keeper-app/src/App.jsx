import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../src/notes"

console.log(notes);


function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;