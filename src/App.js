import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/men/85.jpg"
        name="Peter Palmer"
        online={true}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/57.jpg"
        name="Susan Medina"
        online={false}
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/8.jpg"
        name="Jason Johnson"
        online={true}
      />
    </div>
  );
}

export default App;
