// [M1S03] Ex 2 - Crie uma função para cadastrar um Modelo de Veículo
// Crie uma variável no escopo global para armazenar os modelos que serão cadastradas.
// Crie a função para cadastrar um Modelo de Veículo.
//Como parâmetro receba o nome do modelo e o nome da marca.
// A cada cadastro imprima uma mensagem "Modelo cadastrado com sucesso!"
// Após a chamada imprima os veículos cadastrados.
//-----------------------------------------------------------------

var marcaVeiculo = ['Volkswagen', 'Ford', 'Chevrolet'];
var modeloVeiculo = ['Gol', 'Fiesta', 'Vectra'];
//var marcaVeiculo = [];
//var modeloVeiculo = [];

function cadastraMarcaVeiculo (marca) {
    marcaVeiculo.push(marca);
    console.log(`A marca ${marca} foi cadastrada com sucesso!`);
}

function cadastraModeloVeiculo (modelo, marca) {
    modeloVeiculo.push({modelo, marca});
    console.log(`O modelo ${modeloVeiculo} foi cadastrada com sucesso!`);
    console.log(marcaVeiculo);
}

modeloVeiculo.forEach((modelo,marca) => console.log(`Modelo ${modelo} cadastrado com sucesso!`));
/* array = modeloVeiculo; 
for (let index = 0; index < array.length; index++) {
    console.log(`Modelo ${array[index]} cadastrado com sucesso!`);   
} */
console.log(marcaVeiculo);

// RASCUNHOS
/* function cadastraModeloVeiculo (modelo, marca) {
    modeloVeiculo.push(modelo.value, marca.value);
    console.log(`O modelo ${modelo} foi cadastrada com sucesso!`);
}
 */