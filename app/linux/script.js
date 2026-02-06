const images = [
    "./images/icon1.png",
    "./images/icon2.png",
    "./images/icon3.png",
    "./images/icon4.png",
    "./images/icon5.svg",
    "./images/icon6.svg",
    "./images/icon7.png",
    "./images/icon8.webp",
    "./images/icon9.png",
    "./images/icon10.png",
    "./images/icon11.png",
    "./images/icon12.png",
    "./images/icon13.png"
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
