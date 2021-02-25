// import instance from "./axios";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";
// import { Button } from "antd";
// const complete_url = "rest/v2/all";

function Maincomp() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function getcountrydetails() {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountry(response.data);
      // return response;
      // console.log(country);
    }
    getcountrydetails();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Capital",
      dataIndex: "capital",
      key: "capital",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
    },
  ];

  return (
    <div>
      {console.log(country)}
      <Table dataSource={country} columns={columns} />
    </div>
  );

  // function test() {
  //   console.log(country);
  // }

  // return (
  //   <div>
  //     {/* <button onClick={test}>Test</button> */}
  //     <table>
  //       <tr>
  //         <td>S.no</td>
  //         <td>Name</td>
  //         <td>Capital</td>
  //         <td>Flag</td>
  //       </tr>
  //       {country.map((con) => (
  //         <tr>
  //           <td></td>
  //           <td>{con.name}</td>
  //           <td>{con.capital}</td>
  //           <td>
  //             <img src={con.flag} alt={con.name} />
  //           </td>
  //         </tr>
  //       ))}
  //     </table>
  //   </div>
  // );
}
export default Maincomp;
