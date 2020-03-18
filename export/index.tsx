import fs from "fs";
import moment from 'moment';
import React from "react";
import ReactPDF from "@react-pdf/renderer";
import { Resume } from "../src/Resume";

const date = moment().format("YYYY-MM-DD");
var iteration = 1;
var path = `./export/${date}_FENRIQUEZ-${iteration.toString()}.pdf`;

while (fs.existsSync(path)) {
  iteration += 1;
  path = `./export/${date}_FENRIQUEZ-${iteration.toString()}.pdf`;
} 

ReactPDF.render(<Resume />, path);