// [M1S03] Ex 3 - Crie função para cadastrar Veículo.
// Crie uma lista no escopo global para armazenar os veiculos que serão cadastrados
//Chame a função para cadastrar o Veículo.
//Como parâmetro receba o nome do modelo, nome da marca e o nome do veículo, 
//km, valor e cor.
//A cada cadastro imprima uma mensagem "Veículo cadastrado com sucesso!"
//Após a chamada imprima os veículos cadastrados
//-----------------------------------------------------------------

var veiculoCar = [
    {
        marca: 'Volkswagen', 
        modelo: 'Gol', 
        km: 50000, 
        valor: 35000, 
        cor: 'vermelha'
    },
    {
        marca: 'Fiat', 
        modelo: 'Uno', 
        km: 5000, 
        valor: 25000, 
        cor: 'preta'
    }
];

function cadastraVeiculo (modelo, marca, km, valor, cor) {
    veiculoCar.push({
        modelo, 
        marca,
        km, 
        valor, 
        cor
    });
    console.log(`Veículo cadastrado com sucesso!`)
}
//cadastraVeiculo('volkswagen', 'Gol', 'veiculo1', '50000', '35.000', 'vermelha');
for (let index = 0; index < veiculoCar.length; index++) {
    console.log(veiculoCar[index]);
}


//RASCUNHOS
/* function cadastraVeiculo (modelo, marca, veiculo, km, valor, cor) {
    veiculoCar.push(modelo.value, marca.value, veiculo.value, km.value, valor.value, cor.value);
    console.log(`Veículo cadastrado com sucesso!`)
}
 */