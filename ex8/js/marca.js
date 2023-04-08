let arrayMarcaCars = [];

const inputMarcaCars = document.querySelector("#nome-marca");

const ul = document.querySelector(".marcas");

const botao = document.querySelector(".botao-principal");
botao.addEventListener("click", cadastrarMarcas);


function cadastrarMarcas () {
  let marca = inputMarcaCars.value;

  arrayMarcaCars.push(marca);
  console.log(`A marca ${marca} foi cadastrada com sucesso!`);

  const li = document.createElement("li");
  li.innerHTML = marca;
  ul.appendChild(li);

  console.log(arrayMarcaCars);
  inputMarcaCars.value = "";
}
