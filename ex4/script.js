// [M1S03] Ex 4 - Crie uma função para listar os veículos cadastrados.
// Crie uma função para listar os veículos cadastrados.
//O retorno dessa função DEVE ser um objeto javascript com as seguintes 
//informações nome do modelo, nome da marca, nome do veículo, km, cor e valor.
//-----------------------------------------------------------------

var veiculos = [
    {
        marca: 'Toyota',
        modelo: 'Jeep',
        nomeVeiculo: 'Corolla',
        kmRodados: 10000,
        cor: 'preta',
        valor: 150000
    
    },
    {
        marca: 'Fiat',
        modelo: 'Uno',
        nomeVeiculo: 'Compacto',
        kmRodados: 100000,
        cor: 'cinza',
        valor: 15000
    
    },
]


function listarVeiculos () {
    var objetos = [];
    for (const veiculo of veiculos) {
        var obj = {
            modelo: veiculo.modelo,
            marca: veiculo.marca,
            nomeVeiculo: veiculo.nomeVeiculo,
            kmRodados: veiculo.kmRodados,
            cor: veiculo.cor,
            valor: veiculo.valor
        }

        objetos.push(obj);
    }

    return objetos;

}

console.log(listarVeiculos());