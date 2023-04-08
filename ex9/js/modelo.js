
let arrayModelCars = [];
let inputModelCars = document.querySelector("#nome-modelo");

let ul = document.querySelector(".modelos");

const botao = document.querySelector(".botao-principal");
botao.addEventListener("click", cadastraModeloVeiculo);

//selectMarcas();


function selectMarcas (marca) {
    const selectForm = document.querySelector("#option-marcas");
    const selecionar = document.createElement("option");
    selecionar.innerText = marca;
    selecionar.value = marca;
    selectForm.appendChild(selecionar);
} 

function cadastraModeloVeiculo () {
    const modelo = document.querySelector("#option-modelo").value;
    const marca = document.querySelector("#option-marcas").value;

    arrayModelCars.push({name: modelo, marca});
    console.log(`O modelo ${modelo} foi cadastrada com sucesso!`);
   

    const li = document.createElement("li");
    li.innerHTML = modelo;
    ul.appendChild(li);

    console.log(arrayModelCars);
}



/* 
    if (arrayModelCars[`${marca}`] && arrayModelCars[marca].includes(model)) {
        window.alert("Modelo já cadastrado para essa marca!");
        inputModelCars.value = "";
      } else {
        if (arrayModelCars[marca]) {
          arrayModelCars[marca].push(model);
        } else {
          arrayModelCars[marca] = [];
          arrayModelCars[marca].push(model);
        }
    }     */



