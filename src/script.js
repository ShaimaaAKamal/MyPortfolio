function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { images.push(r(item)); });
  return images;
}

 const images = importAll(require.context('./assets', false, /\.(jpg)$/));
export default images;