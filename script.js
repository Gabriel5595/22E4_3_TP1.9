const advogado = {
    nome: "",
    horasTrabalhadas: "",
    valorHora: "",
    calcularGanho(horasTrabalhadas, valorHora) {
        const ganhos = this.horasTrabalhadas * this.valorHora;
        console.log(`Horas trabalhadas:  ${this.horasTrabalhadas},
Valor pago por hora:    ${this.valorHora},
Os ganhos foram de R$${ganhos}.`);
    }
}

advogado.nome = "Gabriel";
advogado.horasTrabalhadas = 40;
advogado.valorHora = 24;

advogado.calcularGanho(this.horasTrabalhadas, this.valorHora);