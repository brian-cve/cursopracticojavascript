//codigo del cuadrado

console.group("Cuadrado");

//const ladoCuadrado = 5;

//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

function perimetroCuadrado(lado){
    return lado * 4
}  

function areaCuadrado(lado){
    return lado * lado
}  

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}  

function areaTriangulo(base,altura){
    return (base * altura)/2
}  

function diametroCirculo(radio){
    return radio*2;
} 

const PI=Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*PI  
}  

function areaCirculo(radio){
    return (radio*radio)*PI
}  



/*
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cms");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cms 2");    

console.groupEnd();

//codigo del triangulo

console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "los lados del triangulo miden " 
    + ladoTriangulo1 
    + "cms, " 
    + ladoTriangulo2 
    + "cms, " 
    + baseTriangulo 
    + "cms"

    );

    const alturaTriangulo = 5.5;
    console.log("La altura del triangulo es: " + alturaTriangulo + " cms"); 

    const perimetroTriangulo = ladoTriangulo2 + ladoTriangulo1 + baseTriangulo;
    console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cms");
    
    const areaTriangulo = (baseTriangulo*alturaTriangulo)/2
    console.log("El area del triangulo es: " + areaTriangulo + " cms al 2");

console.groupEnd(); 

//Circulos

console.group("Circulos");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cms");
//Diametro
const diametroCirculo= radioCirculo*2
console.log("El diametro del circulo es: " + diametroCirculo + " cms");
//PI

const PI=Math.PI;
console.log("Pi es igual a: " + PI + " cms");

//Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cms");

//Área

const areaCirculo= (radioCirculo*radioCirculo) * PI;
console.log("El Area del circulo es: " + areaCirculo + " cms");

console.groupEnd(); */