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

  const grid = Array.from({ length: rows }, () => Array(cols).fill(null));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let availableImages = images.slice();

      // filter out adjacent images

      // top
      if (row > 0) {
        const above = grid[row - 1][col];
        availableImages = availableImages.filter(img => img !== above);
      }

      // side
      if (col > 0) {
        const left = grid[row][col - 1];
        availableImages = availableImages.filter(img => img !== left);
      }

      const selected = availableImages[Math.floor(Math.random() * availableImages.length)];
      grid[row][col] = selected;

      const tile = document.createElement("div");
      tile.className = "tile";
      tile.style.width = `${tileSize}px`;
      tile.style.height = `${tileSize}px`;
      tile.style.backgroundImage = `url(${selected})`;
      tile.style.backgroundSize = "cover";
      tile.style.backgroundPosition = "center";

      mosaic.appendChild(tile);
    }
  }
}

generateMosaic();
window.addEventListener("resize", generateMosaic);
