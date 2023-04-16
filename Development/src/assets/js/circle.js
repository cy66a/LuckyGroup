async function drawElements() {
  const circle = document.querySelector('.circle__round');
  const circleWidth = parseInt(window.getComputedStyle(circle).width, 10);
  const circleRadius = circleWidth / 2;
  const elements = document.querySelectorAll('.circle__element');
  const elementsCount = elements.length;

  let j = 0;

  await new Promise((resolve) => setTimeout(resolve, 3000));
  for (let i = 0; i < Math.PI * 2; i += (Math.PI * 2) / elementsCount) {
    const left = circleWidth / 2 + circleRadius * Math.sin(i);
    const top = circleWidth / 2 + circleRadius * Math.cos(i);

    await new Promise((resolve) => setTimeout(resolve, 400));

    if (elements[j]) {
      elements[j].style.left = `${left}px`;
      elements[j].style.top = `${top}px`;
    }

    j++;
  }
}

drawElements();
