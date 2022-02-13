const inputs = document.querySelectorAll("input");

function updateInput(e) {
  console.log(this.value);
}

inputs.forEach((input) => input.addEventListener("focus", updateInput));
