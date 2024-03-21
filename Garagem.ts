import { Carro } from "./Carro"

export class Garagem {
  private espacoDisponivel: number
  private carrosEstacionados: Carro[]

  constructor(capacidade: number) {
    this.espacoDisponivel = capacidade
    this.carrosEstacionados = []
  }

  // Método para estacionar um carro na garagem
  estacionarCarro(carro: Carro): void {
    if (this.espacoDisponivel > 0) {
      this.carrosEstacionados.push(carro)
      this.espacoDisponivel --

      console.log(`${carro.marca} ${carro.modelo} estacionado na garagem.`)
    } else {
      console.log('A garagem está lotada. Não é possível estacionar mais carros.')
    }
  }

  // Método para remover um carro da garagem
  removerCarro(carro: Carro): void {
    const index = this.carrosEstacionados.indexOf(carro)

    if (index !== -1 ) {
      this.carrosEstacionados.splice(index, 1)
      this.espacoDisponivel ++

      console.log(`${carro.marca} ${carro.modelo} removido da garagem.`)
    } else {
      console.log('O carro especificado não está estacionado na garagem.')
    }
  }

  // Método para exibir os carros estacionados na garagem
  exibirCarrosEstacionados(): void {
    console.log('Carros estacionados na garagem:')
    this.carrosEstacionados.forEach((carro, index) => {
      console.log(`${index + 1}. ${carro.marca} ${carro.modelo}`)
    })
  }
}