export const getAllPalettes = async () => {
  const response = await fetch(
    "https://spalette-5e18e-default-rtdb.europe-west1.firebasedatabase.app/palettes.json"
  );
  const data = await response.json();
  return data;
};

export const getSinglePalette = async (id) => {
  const response = await fetch(
    `https://spalette-5e18e-default-rtdb.europe-west1.firebasedatabase.app/palettes/${id}.json`
  );
  const data = await response.json();
  return data;
};
