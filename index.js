for (let i = 0; i < document.querySelectorAll(".student").length; i++) {
  document.querySelectorAll(".student")[i].addEventListener("click", createRipple);
}

let std = document.querySelector('.student');

function createRipple(e) {
  let std = e.target;
  let boundingBox = std.getBoundingClientRect();
  let x = e.clientX - boundingBox.left;
  let y = e.clientY - boundingBox.top;

  let ripple = document.createElement('span');
  ripple.classList.add('ripple');
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  std.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove()
  });

}
