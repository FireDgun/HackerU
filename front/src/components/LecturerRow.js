import React from "react";
import LanguagesForLacturer from "./LanguagesForLacturer";
export default function LecturerRow({ Lecturers }) {
  return Lecturers.map((Lecturer) => {
    return (
      <tr key={Lecturer.id}>
        <td className="lanForLecturer">
          <LanguagesForLacturer languages={Lecturer.languages} />
        </td>
        <td>{Lecturer.email}</td>
        <td>{Lecturer.name}</td>
      </tr>
    );
  });
}
