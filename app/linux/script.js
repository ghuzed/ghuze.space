const images = [
  "./images/icon1.webp",
  "./images/icon2.webp",
  "./images/icon3.webp",
  "./images/icon4.webp",
  "./images/icon5.webp",
  "./images/icon6.webp",
  "./images/icon7.webp",
    "./images/icon8.webp",
  "./images/icon9.webp",
  "./images/icon10.webp",
  "./images/icon11.webp",
  "./images/icon12.webp",
  "./images/icon13.webp"
  ];

const tileSize = 128;
const mosaic = document.querySelector(".mosaic");

function generateMosaic() {
  mosaic.innerHTML = "";

  const cols = Math.ceil(window.innerWidth / tileSize) + 1;
  const rows = Math.ceil(window.innerHeight / tileSize) + 1;

  mosaic.style.display = "grid";
  mosaic.style.gridTemplateColumns = `repeat(${cols}, ${tileSize}px)`;
  mosaic.style.gridTemplateRows = `repeat(${rows}, ${tileSize}px)`;
  
  mosaic.style.gap = "10px";

  for (let i = 0; i < cols * rows; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
    tile.style.width = `${tileSize}px`;
    tile.style.height = `${tileSize}px`;
    tile.style.backgroundSize = "cover";
    tile.style.backgroundPosition = "center";
    mosaic.appendChild(tile);
  }
}

generateMosaic();

window.addEventListener("resize", generateMosaic);
