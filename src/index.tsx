import React from "react";
import ReactDOM from "react-dom";
import { Resume } from "./Resume";
import { PDFViewer } from "@react-pdf/renderer";
import "./index.css";

function App() {
  return (
    <PDFViewer>
      <Resume />
    </PDFViewer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
