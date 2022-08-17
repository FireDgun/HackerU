export const GetData = async () => {
  const MAINN_API_URL = "http://localhost:3001";
  let FetchedDataArray = [];
  let HelperArray = [];
  await fetch(`${MAINN_API_URL}/Lecturer`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      FetchedDataArray.push(data.Languages);
      data.Lecturers.map((Lecturer) => {
        let lenArray = [];
        data.Languages.map((language) => {
          if (Lecturer.languages.includes(language.id)) {
            lenArray.push(language.name + "");
          }
        });
        HelperArray.push({
          id: Lecturer.id,
          name: Lecturer.name,
          email: Lecturer.email,
          languages: lenArray,
        });
      });
      FetchedDataArray.push(HelperArray);
    });

  return FetchedDataArray;
};
