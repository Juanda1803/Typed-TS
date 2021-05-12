// Orientacion para fotografias
// const landscape = 0
// const portrait = 1
// const square = 2
// const panomara = 3

enum PhotoOrientation {
  Landscape = 0, // 0
  Portrait = 1, // 1
  Square = 2, // 2
  Panomara = 3, // 3
}
console.log(PhotoOrientation);
const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log(landscape);
console.log(PhotoOrientation[landscape]);

enum PictureOrientation {
  Landscape = 10, // 10
  Portrait, // 11
  Square, // 12
  Panomara, // 13
}

console.log(PictureOrientation.Portrait);

enum Country {
  Bolivia = "bol",
  Colombia = "col",
  Mexico = "mex",
  EEUU = "usa",
  España = "esp",
}

const country: Country = Country.Colombia;
console.log(country);
