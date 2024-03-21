export class Carro {
  // Propriedades da classe
  marca: string
  modelo: string
  ano: number
  cor: string
  velocidade: number

  // Construtor da classe
  constructor(marca: string, modelo: string, ano: number, cor: string) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
    this.cor = cor
    this.velocidade = 0
  }

  // Método para acelerar o carro
  acelerar(velocidade: number): void {
    this.velocidade += velocidade
  }

  // Método para desacelerar o carro
  desacelerar(velocidade: number): void {
    this.velocidade -= velocidade
  }

  // Método para ligar o carro
  ligar(): void {
    console.log(`O ${this.marca} ${this.modelo} ligou.`)
  }

  // Método para desligar o carro
  desligar(): void {
    console.log(`O ${this.marca} ${this.modelo} desligou.`)
  }

  // Método para obter a velocidade atual do carro
  getVelocidade(): number {
    return this.velocidade;
  }
}