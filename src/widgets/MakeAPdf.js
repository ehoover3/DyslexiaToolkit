import * as React from "react";
import PdfGenerator from "../components/PdfGenerator";

export default function MakeAPdf() {
  return (
    <React.Fragment>
      <h2>Make a Dyslexic Friendly Font PDF</h2>
      <PdfGenerator />
    </React.Fragment>
  );
}