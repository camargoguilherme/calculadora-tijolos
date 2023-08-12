document.addEventListener("DOMContentLoaded", function () {
  const wallWidthInput = document.getElementById("wallWidth");
  const wallHeightInput = document.getElementById("wallHeight");

  const calculateButton = document.getElementById("calculateButton");
  const resultDiv = document.getElementById("result");
  const netWallAreaSpan = document.getElementById("netWallArea");
  const brickAreaSpan = document.getElementById("brickArea");
  const bricksCountSpan = document.getElementById("bricksCount");

  calculateButton.addEventListener("click", function () {
    const wallWidth = parseFloat(wallWidthInput.value);
    const wallHeight = parseFloat(wallHeightInput.value);

    if (!isNaN(wallWidth) && !isNaN(wallHeight)) {
      const netWallArea =
        calculateWallArea(wallWidth, wallHeight) - calculateWindowArea();
      const brickArea = calculateBrickArea();
      const bricksCount = Math.ceil(netWallArea / (brickArea / 10000));

      netWallAreaSpan.textContent = netWallArea.toFixed(2);
      brickAreaSpan.textContent = brickArea.toFixed(2);
      bricksCountSpan.textContent = bricksCount;

      resultDiv.style.display = "block";
    }
  });

  function calculateWallArea(width, height) {
    return width * height;
  }

  function calculateWindowArea() {
    const windowWidthInput = document.getElementById("windowWidth");
    const windowHeightInput = document.getElementById("windowHeight");
    const width = parseFloat(windowWidthInput.value);
    const height = parseFloat(windowHeightInput.value);
    if (!isNaN(width) && !isNaN(height)) return (width * height) / 10000;
    return 0;
  }

  function calculateBrickArea() {
    const brickWidthInput = document.getElementById("brickWidth");
    const brickHeightInput = document.getElementById("brickHeight");
    const width = parseFloat(brickWidthInput.value);
    const height = parseFloat(brickHeightInput.value);
    if (!isNaN(width) && !isNaN(height)) return width * height;
    return 0;
  }
});
