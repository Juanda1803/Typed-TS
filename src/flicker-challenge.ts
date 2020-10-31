
type PhotoSizes = '75x75' | '240x180' | '500x375' | '1024x768' | '3072x2304'
type FuncString = string 

function differentsPhotos(name: FuncString): FuncString{

  let square: PhotoSizes = '75x75'
  let small: PhotoSizes = '240x180'
  let medium: PhotoSizes = '500x375'
  let big: PhotoSizes = '1024x768'
  let veryBig: PhotoSizes = '3072x2304'

  return `
  ${name}
    square: ${square}
    small: ${small}
    medium: ${medium}
    big: ${big}
    veryBig: ${veryBig}
  `
}

console.log(differentsPhotos('Juan'))
