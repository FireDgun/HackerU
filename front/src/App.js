import React, { useState, useEffect } from "react";
import LangugeFilter from "./components/LangugeFilter";
import LecturerRow from "./components/LecturerRow";
import { GetData } from "./Helpers/FetchData";

import "./style.css";

function App() {


  const [Lecturers, setLecturers] = useState([]);
  const [Languges, setLanguges] = useState([]);
  const [filteredLecturers, setfilteredLecturers] = useState();

  useEffect(() => {
    GetData()
      .then((API_DATA) => {
        setLecturers(API_DATA[1]);
        setLanguges(API_DATA[0]);
        setfilteredLecturers(API_DATA[1]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);


//I filtered at the frontend, I could do it in the backend but I chose to write it here because of the simplicity of things
  
  const filterDataByLan = (lan) => { 
    setfilteredLecturers([]);
    Lecturers.map((lecturer) => {
      const filteredArray = lecturer.languages.filter((value) =>
        lan.includes(value)
      );
      if (filteredArray.length > 0) {
        setfilteredLecturers((prev) => [...prev, lecturer]);
      }
    });
  };

  

  return (
    <div className="mainContainer">
      <div className="filter">
        :סינון
        <LangugeFilter Languges={Languges} filterDataByLan={filterDataByLan} />
      </div>
      <table className="mainTable">
        <tbody>
          <tr className="tbHeader">
            <td>שפות</td>
            <td>אימייל המרצה</td>
            <td>שם המרצה</td>
          </tr>
          {Lecturers ? (
            filteredLecturers ? (
              <LecturerRow Lecturers={filteredLecturers} />
            ) : (
              <LecturerRow Lecturers={Lecturers} />
            )
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

export default App;
