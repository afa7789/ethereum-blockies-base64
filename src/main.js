const pnglib = require('./pnglib');
const hsl2rgb = require('./hsl2rgb');

// The random number is a js implementation of the Xorshift PRNG
const randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

function seedrand(seed) {
  for (let i = 0; i < randseed.length; i++) {
    randseed[i] = 0;
  }
  for (let i = 0; i < seed.length; i++) {
    randseed[i % 4] = (randseed[i % 4] << 5) - randseed[i % 4] + seed.charCodeAt(i);
  }
}

function rand() {
  // based on Java's String.hashCode(), expanded to 4 32bit values
  const t = randseed[0] ^ (randseed[0] << 11);

  randseed[0] = randseed[1];
  randseed[1] = randseed[2];
  randseed[2] = randseed[3];
  randseed[3] = randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8);

  return (randseed[3] >>> 0) / (1 << 31 >>> 0);
}

function createColor() {
  //saturation is the whole color spectrum
  const h = Math.floor(rand() * 360);
  //saturation goes from 40 to 100, it avoids greyish colors
  const s = rand() * 60 + 40;
  //lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
  const l = (rand() + rand() + rand() + rand()) * 25 ;

  return [h / 360, s / 100, l / 100];
}

function createImageData(size) {
  const width = size; // Only support square icons for now
  const height = size;

  const dataWidth = Math.ceil(width / 2);
  const mirrorWidth = width - dataWidth;

  const data = [];
  for (let y = 0; y < height; y++) {
    let row = [];
    for (let x = 0; x < dataWidth; x++) {
      // this makes foreground and background color to have a 43% (1/2.3) probability
      // spot color has 13% chance
      row[x] = Math.floor(rand() * 2.3);
    }
    const r = row.slice(0, mirrorWidth).reverse();
    row = row.concat(r);

    for (let i = 0; i < row.length; i++) {
      data.push(row[i]);
    }
  }

  return data;
}

// Modifies the passed PNG to fill in a specified rectangle
function fillRect(png, x, y, w, h, color) {
  for(let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      png.buffer[png.index(x + i, y + j)] = color;
    }
  }
}

function buildOpts(opts) {
  if (!opts.seed) {
    throw new Error('No seed provided');
  }

  seedrand(opts.seed);

  return Object.assign({
    size: 8,
    scale: 16,
    color: createColor(),
    bgcolor: createColor(),
    spotcolor: createColor(),
    extracolor: createColor(),
  }, opts)
}

function makeGradientOld(address) {

  const opts = buildOpts({ seed: address.toLowerCase() });
  let calculated = opts.size * opts.scale
  const imageData = createImageData(opts.size);

  const p = new pnglib(calculated, calculated, 3);
  color = hsl2rgb(...opts.color)
  spotcolor = hsl2rgb(...opts.spotcolor)
  const colorDiff = [
    (spotcolor[0]-color[0])/(calculated-1),
    (spotcolor[1]-color[1])/(calculated-1),
    (spotcolor[2]-color[2])/(calculated-1)
  ]

  let pngColor = []
  let colorHere = []
  for (let i = 0; i < calculated; i++) {
    colorHere = [
      Math.floor(color[0]+colorDiff[0]*i),
      Math.floor(color[1]+colorDiff[1]*i),
      Math.floor(color[2]+colorDiff[2]*i),
      255
    ]
    pngColor[i] = p.color(...colorHere)

    for( let j=0; j< calculated; j++) {
      // const row = j;
      // const col = i;
      fillRect(p,i,j,2,2,pngColor[i]);
    }
  }
  
  return `data:image/png;base64,${p.getBase64()}`;
}


function makeGradient(address) {
  const opts = buildOpts({ seed: address.toLowerCase() });
  let calculated = opts.size * opts.scale

  const color = hsl2rgb(...opts.color)
  const spotcolor = hsl2rgb(...opts.spotcolor)
  const extracolor = hsl2rgb(...opts.extracolor)

  const color1 = `rgb(${color[0]},${color[1]},${color[2]})`
  const color2 = `rgb(${spotcolor[0]},${spotcolor[1]},${spotcolor[2]})`
  const color3 = `rgb(${extracolor[0]},${extracolor[1]},${extracolor[2]})`

  let SvgMoving = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${calculated} ${calculated}">
  <defs>
     <linearGradient id='a' gradientUnits='objectBoundingBox' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='${color1}'>
           <animate attributeName="stop-color"
              values="${color1};${color2};${color3};${color1};${color2};${color3};${color1};" dur="20s" repeatCount="indefinite">
           </animate>
        </stop>
        <stop offset='.5' stop-color='${color2}'>
           <animate attributeName="stop-color"
              values="${color2};${color3};${color1};${color2};${color3};${color1};${color2};" dur="20s" repeatCount="indefinite">
           </animate>
        </stop>
        <stop offset='1' stop-color='  ${color3}'>
           <animate attributeName="stop-color"
              values="${color3};${color1};${color2};${color3};${color1};${color2};${color3};" dur="20s" repeatCount="indefinite">
           </animate>
        </stop>
        <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5"
           dur="20s" repeatCount="indefinite" />
     </linearGradient>
     <linearGradient id='b' gradientUnits='objectBoundingBox' x1='0' y1='1' x2='1' y2='1'>
        <stop offset='0' stop-color='${color1}'>
           <animate attributeName="stop-color"
              values="${color1};${color2};${color3};${color1};${color2};${color3};${color1};" dur="20s" repeatCount="indefinite">
           </animate>
        </stop>
        <stop offset='1' stop-color='${color2}' stop-opacity="0">
           <animate attributeName="stop-color"
              values="${color2};${color3};${color1};${color2};${color3};${color1};${color2};" dur="20s" repeatCount="indefinite">
           </animate>
        </stop>
        <animateTransform attributeName="gradientTransform" type="rotate" values="360 .5 .5;0 .5 .5" class="ignore"
           dur="10s" repeatCount="indefinite" />
     </linearGradient>
  </defs>
  <rect fill='url(#a)' width='100%' height='100%' />
  <rect fill='url(#b)' width='100%' height='100%' />
</svg>`

  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(SvgMoving)))}`;
}

module.exports = makeGradient;
