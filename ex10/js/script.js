function cadastraMarcaVeiculo (marca) {
    const marcaVeiculo = JSON.parse(localStorage.getItem("marcaVeiculo")) || [];
    marcaVeiculo.push(marca);
    console.log(`A marca ${marca} foi cadastrada com sucesso!`);
    console.log(marcaVeiculo);
    localStorage.setItem("marcaVeiculo", JSON.stringify(marcaVeiculo));
}

function cadastraModeloVeiculo (modelo, marca) {
    const modeloVeiculo = JSON.parse(localStorage.getItem("modeloVeiculo")) || [];
    modeloVeiculo.push({ modelo, marca });
    console.log(`O modelo ${modeloVeiculo} foi cadastrada com sucesso!`);
    console.log(marcaVeiculo);
    localStorage.setItem("modeloVeiculo", JSON.stringify(modeloVeiculo));
}

function cadastraVeiculo (modelo, marca, km, valor, cor) {
    const veiculoCar = JSON.parse(localStorage.getItem("veiculoCar")) || [];
    veiculoCar.push({
        modelo, 
        marca,
        km, 
        valor, 
        cor
    });
    console.log(`Veículo cadastrado com sucesso!`);
    console.log(veiculoCar);
    localStorage.setItem("veiculoCar", JSON.stringify(veiculoCar));
}
