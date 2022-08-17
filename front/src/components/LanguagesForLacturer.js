import React from "react";

export default function LanguagesForLacturer({ languages }) {
  return languages.map((lan) => {
    return <div className="oneLanForLecturer">{lan}</div>;
  });
}
