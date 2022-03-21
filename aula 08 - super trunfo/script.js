var carta1 = {
  nome: "Atena",
  imagem:
    "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/04/deusa-atena-quem-e-historia-e-curiosidades-da-deusa-da-sabedoria-2.jpg",
  atributos: {
    Poder: 88,
    Força: 86,
    Inteligência: 97
  }
};

var carta2 = {
  nome: "Apolo",
  imagem:
    "https://3.bp.blogspot.com/-U8_VC4vOVzg/W2yS4CW6QSI/AAAAAAAAmQ8/YLgCJkhpnIYW4Z9MH56dlRHchU4adscOACLcBGAs/s1600/Apolo.jpg",
  atributos: {
    Poder: 91,
    Força: 92,
    Inteligência: 94
  }
};

var carta3 = {
  nome: "Ares",
  imagem:
    "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/03/deus-ares-quem-e-historia-e-habilidades-do-deus-da-guerra.jpg",
  atributos: {
    Poder: 91,
    Força: 95,
    Inteligência: 92
  }
};

var carta4 = {
  nome: "Zeus",
  imagem:
    "https://pm1.narvii.com/8115/27f8dc45e875adc683c533652655f003242717eer1-1000-998v2_hq.jpg",
  atributos: {
    Poder: 95,
    Força: 96,
    Inteligência: 86
  }
};

var carta5 = {
  nome: "Ártemis",
  imagem:
    "https://escolaeducacao.com.br/wp-content/uploads/2018/11/imagem-deusa-artemis-750x430.jpg",
  atributos: {
    Poder: 85,
    Força: 83,
    Inteligência: 84
  }
};

var carta6 = {
  nome: "Hera",
  imagem: "https://images4.alphacoders.com/106/thumb-350-1061193.jpg",
  atributos: {
    Poder: 94,
    Força: 92,
    Inteligência: 88
  }
};

var carta7 = {
  nome: "Afrodite",
  imagem:
    "http://pm1.narvii.com/7152/e001175b7a32ec58cb8d1e9607fed0947c7d6428r1-940-838v2_00.jpg",
  atributos: {
    Poder: 86,
    Força: 82,
    Inteligência: 88
  }
};

var carta8 = {
  nome: "Deméter",
  imagem: "https://img.freepik.com/vetores-gratis/deusa-demeter_175624-68.jpg",
  atributos: {
    Poder: 77,
    Força: 77,
    Inteligência: 86
  }
};

var carta9 = {
  nome: "Posseidon",
  imagem:
    "https://1.bp.blogspot.com/-wY540cZ2lCw/YJdG-Ag4QvI/AAAAAAAAWZw/W4U0Ok6OrpIvL5BTzAzLRJN8ULTmK4r7ACLcBGAsYHQ/s1920/poseidon.jpg",
  atributos: {
    Poder: 95,
    Força: 97,
    Inteligência: 92
  }
};

var carta10 = {
  nome: "Hefesto",
  imagem:
    "https://pm1.narvii.com/8140/3ef72644d2b91e052bccc1c4e52f9c803f8b2fbfr1-1056-1056v2_hq.jpg",
  atributos: {
    Poder: 89,
    Força: 99,
    Inteligência: 67
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 11);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 11);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 11);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage= "url(" + cartaJogador.imagem + ")"  equivale ao código acima
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}