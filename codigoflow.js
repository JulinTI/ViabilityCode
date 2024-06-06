const body = [{
    id: "77092",
    sigla: "PSO-RA-175",
    item: "terminal",
    marcador: "terminal",
    latitude: "-20.71692042",
    longitude: "-46.60024543",
    cor: "#000000",
    portas: "16",
    fibras: "48",
    distancia: "236.03",
    modoProjeto: "N",
    idItemRedePoste: "48406",
    possuiAtendimento: "S",
    totalRecipientes: "0",
    portasLivres: "4",
    portasOcupadas: "0",
    portasReservadas: "0",
    portasReservadasCliente: "0",
    portasClienteAtendimento: "12",
    portasProjeto: "0",
    portasProjetoLivres: "0",
    portasProjetoOcupadas: "0",
    portasProjetoReservadas: "0",
    portasProjetoReservadasCliente: "0",
    portasProjetoClienteAtendimento: "0",
    fibrasLivres: "38",
    fibrasOcupadas: "10",
    fibrasReservadas: "0",
    fibrasReservadasCliente: "0",
    fibrasClienteAtendimento: "0",
    fibrasProjeto: "0",
    fibrasProjetoLivres: "0",
    fibrasProjetoOcupadas: "0",
    fibrasProjetoReservadas: "0",
    fibrasProjetoReservadasCliente: "0",
    fibrasProjetoClienteAtendimento: "0",
    porcentagemOcupacaoPortas: "75.00",
    porcentagemOcupacaoFibras: "20.83",
    porcentagemOcupacaoGeral: "34.38",
    statusViabilidade: ""
  },
  {
    id: "77092",
    sigla: "PSO-RA-175",
    item: "terminal",
    marcador: "terminal",
    latitude: "-20.71692042",
    longitude: "-46.60024543",
    cor: "#000000",
    portas: "16",
    fibras: "48",
    distancia: "236.03",
    modoProjeto: "N",
    idItemRedePoste: "48406",
    possuiAtendimento: "S",
    totalRecipientes: "0",
    portasLivres: "4",
    portasOcupadas: "0",
    portasReservadas: "0",
    portasReservadasCliente: "0",
    portasClienteAtendimento: "12",
    portasProjeto: "0",
    portasProjetoLivres: "0",
    portasProjetoOcupadas: "0",
    portasProjetoReservadas: "0",
    portasProjetoReservadasCliente: "0",
    portasProjetoClienteAtendimento: "0",
    fibrasLivres: "38",
    fibrasOcupadas: "10",
    fibrasReservadas: "0",
    fibrasReservadasCliente: "0",
    fibrasClienteAtendimento: "0",
    fibrasProjeto: "0",
    fibrasProjetoLivres: "0",
    fibrasProjetoOcupadas: "0",
    fibrasProjetoReservadas: "0",
    fibrasProjetoReservadasCliente: "0",
    fibrasProjetoClienteAtendimento: "0",
    porcentagemOcupacaoPortas: "75.00",
    porcentagemOcupacaoFibras: "20.83",
    porcentagemOcupacaoGeral: "34.38",
    statusViabilidade: ""
  },
  {
    id: "77092",
    sigla: "PSO-RA-175",
    item: "terminal",
    marcador: "terminal",
    latitude: "-20.71692042",
    longitude: "-46.60024543",
    cor: "#000000",
    portas: "16",
    fibras: "48",
    distancia: "236.03",
    modoProjeto: "N",
    idItemRedePoste: "48406",
    possuiAtendimento: "S",
    totalRecipientes: "0",
    portasLivres: "4",
    portasOcupadas: "0",
    portasReservadas: "0",
    portasReservadasCliente: "0",
    portasClienteAtendimento: "12",
    portasProjeto: "0",
    portasProjetoLivres: "0",
    portasProjetoOcupadas: "0",
    portasProjetoReservadas: "0",
    portasProjetoReservadasCliente: "0",
    portasProjetoClienteAtendimento: "0",
    fibrasLivres: "38",
    fibrasOcupadas: "10",
    fibrasReservadas: "0",
    fibrasReservadasCliente: "0",
    fibrasClienteAtendimento: "0",
    fibrasProjeto: "0",
    fibrasProjetoLivres: "0",
    fibrasProjetoOcupadas: "0",
    fibrasProjetoReservadas: "0",
    fibrasProjetoReservadasCliente: "0",
    fibrasProjetoClienteAtendimento: "0",
    porcentagemOcupacaoPortas: "75.00",
    porcentagemOcupacaoFibras: "20.83",
    porcentagemOcupacaoGeral: "34.38",
    statusViabilidade: "sem"
  }];
  

let possui = false;
let sem = false;

for (const item of body) {
  switch (item.statusViabilidade) {
    case "possui":
      possui = true;
      break;
    case "sem":
      sem = true;
      break;
    default:
      break;
  }
}

let viabilidade;

switch (true) {
  case possui:
    viabilidade = "Possui viabilidade";
    break;
  case sem:
    viabilidade = "Possui viabilidade, mas não tem porta disponível";
    break;
  default:
    viabilidade = "Não possui viabilidade";
    break;
}
console.log(viabilidade)

console.log('Teste para Jessica');

console.log('mais um teste')