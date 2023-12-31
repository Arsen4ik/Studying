const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const inputElements = document.querySelectorAll(".chart__input");
const formElement = document.querySelector(".chart__data");

const GAP = {
  HOR: 100,
  VERT: 30,
};

const COLORS = ["#b3d5fc", "#98d9d9", "#ede493"];

const BarSize = {
  MAX_HEIGHT: 190,
  WIDTH: 50,
};

const BarCoords = {
  X: 80,
  Y: 220,
};

const LabelCoords = {
  X: 30,
  Y: 70,
};

const Font = {
  SIZE: "18px",
  FAMILY: "Tahoma",
};

const getDate = (inputElements) => {
  return Array.from(inputElements).map((input, index) => ({
    name: input.name,
    value: input.value,
    color: COLORS[index],
  }));
};

const items = getDate(inputElements);

const renderChart = (items) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let currentBarX = BarCoords.X;
  let currentLableY = LabelCoords.Y;

  const gapBetweenBars = BarSize.WIDTH + GAP.HOR;

  for (const item of items) {
    const barHeight = (item.value * BarSize.MAX_HEIGHT) / 100;

    ctx.fillStyle = item.color;
    ctx.font = `${Font.SIZE} ${Font.FAMILY}`;
    ctx.save();

    ctx.translate(0, canvas.height);
    ctx.rotate(-Math.PI / 2);

    ctx.fillText(item.name.toUpperCase(), LabelCoords.X, currentLableY);
    ctx.restore();

    ctx.fillRect(currentBarX, BarCoords.Y, BarSize.WIDTH, -barHeight);

    currentBarX += gapBetweenBars;
    currentLableY += gapBetweenBars;
  }
};

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  renderChart(getDate(inputElements));
  console.log(renderChart(getDate(inputElements)));
  formElement.reset();
});
