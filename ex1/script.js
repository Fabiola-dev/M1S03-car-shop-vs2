// [M1S03] Ex 1 - Crie uma função para cadastrar a Marca de um Veículo
// 1.Crie uma variavél no escopo global para armazenar as marcas que 
//serão cadastradas pela função.
// 3.Crie uma função para cadastrar a marca de um veículo.
//Como parâmetro receba o nome da marca
// 5.Chame a função e cadastre pelo menos três veículos
// 6.A cada cadastro IMPRIMA uma mensagem "Marca cadastrada com sucesso!"
// 7.Após a chamada imprima as marcas cadastradas

//var marcaVeiculo = 'Chevrolet';
var marcaVeiculo = ['Volkswagen', 'Ford', 'Chevrolet'];
//var marcaVeiculo = [];

function cadastraMarcaVeiculo (marca) {
    marcaVeiculo.push(marca);
    console.log(`A marca ${marca} foi cadastrada com sucesso!`);
    
}    

// Opções de loops para imprimir o cadastro das 3 marcas:
//1.
marcaVeiculo.forEach((marca) => console.log(`A marca ${marca} foi cadastrada com sucesso!`));

//2.
/* var array = ['Volkswagen', 'Ford', 'Chevrolet'];

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}  */