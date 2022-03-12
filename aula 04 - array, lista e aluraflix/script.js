//Aprendendo sobre listas no JavaScript

var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"]
//elemento             1             2            3
//indice               0             1            2

//adicionando novos elementos à lista
listaFilmes.push("Harry Potter") 

//    valor inicial.            condição.           expressão final.
for (var indice = 0; indice < listaFilmes.length; indice = indice++) {
  document.write("<p>" + listaFilmes[indice] +"</p>");
}