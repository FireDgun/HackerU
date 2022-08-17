import React, { useEffect, useState } from "react";

export default function LangugeFilter({ Languges, filterDataByLan }) {
  const [langugesFilter, setlangugesFilter] = useState([]);
  useEffect(() => {
    Languges.map((lan) => {
      console.log(lan.name);
      setlangugesFilter((prev) => [...prev, lan.name]);
    });
    console.log(langugesFilter);
  }, [Languges]);

  useEffect(() => {
    filterDataByLan(langugesFilter);
  }, [langugesFilter]);

  const handle = (lan) => {
    let whereClicked = lan.target.tagName;
    if (whereClicked == "INPUT") {
      let lanText = lan.currentTarget.innerText;
      console.log(lanText);
      if (langugesFilter.includes(lanText)) {
        setlangugesFilter((current) =>
          current.filter((element) => {
            return element !== lanText;
          })
        );
      } else {
        setlangugesFilter((prev) => [...prev, lanText]);
      }
    }
  };

  return Languges.map((lan) => {
    return (
      <div key={JSON.stringify(lan)} onClick={(lan) => handle(lan)}>
        <input type="checkbox" defaultChecked="true" />
        {lan.name}
      </div>
    );
  });
}
