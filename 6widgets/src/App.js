import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: " what is React? ",
    content: " React is Javascript library",
  },
  {
    title: " Why do you use React",
    content: " React is a favorite Javascript library",
  },
  {
    title: " How do you use React ",
    content: " You  use React by creating components ",
  },
];

const options = [
  {
    label: "The Color is Red",
    value: "red",
  },
  {
    label: "The Color is Green",
    value: "green",
  },
  {
    label: "The Color is Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
