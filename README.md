This is tutorial regarding git & github usage

//Lexical Envt (in heirarchy/in sequentially arrangement of one function inside another funct or where one function is physically present inside another function)
is local memory along with its parent lexical envt memory

//JS process of finding var/function from one lexical envt to another lexical envt is called scope chaining in js
//A function always contain its own local memory as well as its parent lexical envt.

function a(){
var x=10;
}

a();
//here a() is invoked & pushed into call stack above Global exceution context & it contain ite local scope as well as Global Object scope of GEC.This is called as scope chaining
