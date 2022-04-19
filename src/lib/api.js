const FIREBASE_DOMAIN = process.env.REACT_APP_FIREBASE_URL;

export const getAllPalettes = async () => {
  const response = await fetch(`${FIREBASE_DOMAIN}/palettes.json`);
  const data = await response.json();
  return data;
};

export const getSinglePalette = async (id) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/palettes/${id}.json`);
  const data = await response.json();
  return data;
};
