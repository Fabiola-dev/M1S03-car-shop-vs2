const cars = [
    {
        modelo: 'Modelo 1',
        marca: 'Marca 1',
        kmRodados: 10000,
        cor: 'cor 1',
        valor: 150000,
        image: null,
    },
    {
        modelo: 'Modelo 2',
        marca: 'Marca 2',
        kmRodados: 10000,
        cor: 'cor 2',
        valor: 150000,
        image: null,
    },
    {
        modelo: 'Modelo 3',
        marca: 'Marca 3',
        kmRodados: 10000,
        cor: 'cor 3',
        valor: 150000,
        image: null,
    },
    {
        modelo: 'Modelo 4',
        marca: 'Marca 4',
        kmRodados: 10000,
        cor: 'cor 4',
        valor: 150000,
        image: null,
    },
]

function displayCarros () {
    const carros = getAllCars();

    for (const carro of carros) {
        document.querySelector(".container").appendChild(createCards)
    }
}

/* function createCard (carro) {
    const card = document.createElement("div");
    card.classList = 'card';
    card.innerHTML =

}
 */
