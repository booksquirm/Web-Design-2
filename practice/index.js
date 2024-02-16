const cardContainer = document.querySelector(".card-container");
let containerWidth = 600; // = default width

// Observe container and keep track of its width.
const cardObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    containerWidth = entry.contentRect.width;
    document.querySelector(".size-val").innerText = containerWidth;
  });
});
cardObserver.observe(cardContainer);

const widths = [300, 400, 500, 600, 700, 900];
document
  .querySelector('[data-trigger="cycle-width"]')
  .addEventListener("click", () => {
    // Find next listed width greater than current containerWidth
    let widthIndex = widths.findIndex(function (potentialWidth) {
      return potentialWidth > containerWidth;
    });

    // No match found? Wing back to first eligible width
    widthIndex = widthIndex == -1 ? 0 : widthIndex;

    // Update container width
    cardContainer.style.width = `${widths[widthIndex]}px`;

    // Reset mouse position
    document.documentElement.style.setProperty("--mouse-x", `50%`);
    document.documentElement.style.setProperty("--mouse-y", `50%`);
  });

// Track mouse position over .layout
document.querySelector(".layout").addEventListener("pointermove", (evt) => {
  let x = evt.offsetX;
  let y = evt.offsetY;

  document.documentElement.style.setProperty("--mouse-x", `${x}px`);
  document.documentElement.style.setProperty("--mouse-y", `${y}px`);
});
