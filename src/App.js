import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./assets/Event.jfif";
import Axios from "axios";

function App() {
  const arrdata = [
    {
      id: 1,
      title: "Event 1",
      details: "This is demo event made for testing",
      img: img,
    },
    {
      id: 2,
      title: "Event 2",
      details: "This is demo event made for testing",
      img: img,
    },
    {
      id: 3,
      title: "Event 3",
      details: "This is demo event made for testing",
      img: img,
    },
  ];
  const addevent = () => {
    Axios.post("http://localhost:3000/create").then(() => {
      console.log("Success");
    });
  };
  return (
    <div>
      <Header />
      <Cards data={arrdata} />
    </div>
  );
}

export default App;
