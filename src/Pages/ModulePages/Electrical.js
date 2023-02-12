import React, { useState, useEffect } from "react";
import "firebase/compat/firestore";
import firebase from "../../config";
import { query, QuerySnapshot } from "@firebase/firestore";
import getmodules from "./GetModules";

function Electrical() {
  const [firebase_modules, setModule] = useState([]);
  const [loading, setloading] = useState(false);

  const ref = getmodules("Modules", "Electrical");

  useEffect(() => {
    setloading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setModule(items);
      setloading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>Electronics</div>
      <h1>Hello</h1>
      {firebase_modules.map((module) => (
        <div>
          <h2>{module.title}</h2>
          <p>{module.description}</p>
        </div>
      ))}
    </>
  );
}
export default Electrical;
