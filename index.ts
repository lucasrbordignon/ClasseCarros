import { Carro } from './Carro'
import { Garagem } from './Garagem'

// Criando instâncias de carros
const carro1 = new Carro('Toyota', 'Corolla', 2022, 'Prata')
const carro2 = new Carro('Honda', 'Civic', 2023, 'Preto')
const carro3 = new Carro('Ford', 'Focus', 2021, 'Azul')
const carro4 = new Carro('Chevrolet', 'Cruze', 2022, 'Branco')
const carro5 = new Carro('Volkswagen', 'Golf', 2020, 'Vermelho')

// Criando uma instância de garagem com capacidade para 5 carros
const garagem = new Garagem(5)

// Estacionando os carros na garagem
garagem.estacionarCarro(carro1);
garagem.estacionarCarro(carro2);
garagem.estacionarCarro(carro3);
garagem.estacionarCarro(carro4);
garagem.estacionarCarro(carro5); // Este carro não será estacionado porque a garagem já está lotada

// Exibindo os carros estacionados na garagem
garagem.exibirCarrosEstacionados();

// Removendo um carro da garagem
garagem.removerCarro(carro3);

// Exibindo os carros estacionados na garagem novamente
garagem.exibirCarrosEstacionados();