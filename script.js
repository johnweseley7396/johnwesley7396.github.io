// Animate bar fills
document.querySelectorAll('.bar-fill').forEach(bar => {
  const width = bar.getAttribute('data-width');
  setTimeout(() => {
    bar.style.width = width + '%';
  }, 500);
});

// Animate circular skills
document.querySelectorAll('.circular-skill').forEach(circular => {
  const value = +circular.getAttribute('data-percentage');
  const number = circular.querySelector('.number');
  const circle = circular.querySelector('svg circle');
  const r = circle.r.baseVal.value,
    c = 2 * Math.PI * r;
  circle.style.strokeDasharray = `${c}`;
  circle.style.strokeDashoffset = c;
  setTimeout(() => {
    let count = 0;
    const anim = setInterval(() => {
      if (count <= value) {
        number.textContent = count + '%';
        let offset = c - (c * count) / 100;
        circle.style.strokeDashoffset = offset;
        if (count === value) clearInterval(anim);
        count++;
      }
    }, 15);
    circle.classList.add('active');
  }, 800);
});
