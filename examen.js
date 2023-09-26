var nombre = prompt("cual es tu nombre");
var pr1 = prompt("¿Cuánta agua hay en la Tierra? \n A. Alrededor de un 41% de la superficie terrestre es agua \n B. Alrededor de un 51% de la superficie terrestre es agua \n C. Alrededor de un 71% de la superficie terrestre es agua ");
if(pr1 == C){
    pr1=1;
}
 else if (pr1 == "A"){
    pr1=0;
}
else(pr1 == "B");{
    pr1=0;
}
var pr2 = prompt("¿Qué océano es el más grande? \n A. El Pacífico \n B. El Atlántico \n C. El Índico");
if(pr2 == "A"){
    pr2=1;
}
 else if(pr2 == "C"){
    pr2=0;
}
else(pr2 == "B");{
    pr2=0;
}
var pr3 = prompt("¿Cuánto mide la parte más profunda de los Océanos? \n A. 11 Km \n B. 23 Km \n C. 31 Km");
if(pr3 == "A"){
    pr3=1;
}
else if (pr3 == "C"){
    pr3 = 0;
}
else(pr3 == "B");{
    pr3 = 0;

}
var total = pr3+pr2+pr1
if (total=<2){
    Total = "muy bien"
}
else(total=<1){
    
}