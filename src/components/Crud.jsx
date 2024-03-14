import React, { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import AddProduct from "./AddProduct";
import ViewProducts from "./ViewProducts";

const Crud = () => {
  return (
    <div className="flex gap-4 m-10">
      <AddProduct />
      <ViewProducts />
    </div>
  );
};

export default Crud;
