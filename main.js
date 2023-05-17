const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const resultado = document.querySelector(".resultado");

btn.addEventListener("click", transformar);

function transformar() {
  let numero = Number(input.value);
  const result = (9 / 5) * numero + 32;
  resultado.innerHTML = `${input.value} grados Celsius equivalen a ${result} Fahrenheit`;
}
