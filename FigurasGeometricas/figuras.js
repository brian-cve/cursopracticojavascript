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
    return Number (lado1)+ Number (lado2)+ Number(base);
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

function alturaIsosceles(lado1,lado2,base){
    if(lado1===lado2 && lado1 != base){
       return Math.sqrt(Math.pow(lado1,2)-((Math.pow(lado2,2))/4)) 
    } else if(lado1===base && lado1 != lado2){
        return Math.sqrt(Math.pow(lado1,2)-((Math.pow(base,2))/4))
    } else if(lado2===base && lado2 != lado1){
        return Math.sqrt(Math.pow(lado2,2)-((Math.pow(base,2))/4))
    } 
    else{
        document.write ("no eres un triangulo isosceles, no puedo decirte tu altura");
    }
}

//Aquí interactuamos con el html

function calcularAlturaIsosceles(){
    const inputLado1 = document.getElementById("inputIsoscelesLado1");
    const lado1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputIsoscelesLado2");
    const lado2 = inputLado2.value;
    const inputBase = document.getElementById("inputIsoscelesBase");
    const base = inputBase.value;
    const altura = alturaIsosceles(lado1,lado2,base);
    alert(altura);
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("inputTrianguloBase");
    const Base = inputBase.value;
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const Altura = inputAltura.value;
    const area = areaTriangulo(Base,Altura);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const lado1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const lado2 = inputLado2.value;
    const inputBaseb = document.getElementById("inputTrianguloBase");
    const base = inputBaseb.value;
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro);
}

function calcularDiametroCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const elRadio = inputRadio.value;
    const diametro = diametroCirculo(elRadio);
    alert(diametro);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const elRadio = inputRadio.value;
    const area = areaCirculo(elRadio);
    alert(area);
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputCirculo");
    const elRadio = inputRadio.value;
    const perimetro = perimetroCirculo(elRadio);
    alert(perimetro);
}


    const a = Math.sqrt(Math.pow(2,2)-((Math.pow(2,2))/4));
    console.log (a)
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