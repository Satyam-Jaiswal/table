// import instance from "./axios";

import React, { useState, useEffect } from "react";
import axios from "axios";
// const complete_url = "rest/v2/all";

function Maincomp() {
  const [country, setcountry] = useState([]);

  useEffect(() => {
    async function getcountrydetails() {
      const response = await axios.get(
        "https://api.first.org/data/v1/countries"
      );
      setcountry(response.data);
      //   console.log(country);
    }
    getcountrydetails();
  }, []);

  return (
    <div>
      {country.map((countigh) => (
        <h1>{countigh}</h1>
      ))}
    </div>
  );
}
export default Maincomp;
