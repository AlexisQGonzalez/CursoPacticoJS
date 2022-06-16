//js del cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log(" Los lados del cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado(lado){
return lado * 4;
} 
// console.log(" El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado){
 return lado * lado;
} 
// console.log(" El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
// js del triangulo
console.group("triangulo")
    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden:  "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     +"cm, " 
//     + baseTriangulo 
//     + "cm,"
// );
// const alturaTriangulo = 5.5;
// console.log(" La altura del traingulo es de: " + alturaTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base) 
{
return lado1 + lado2 + base;
}
// console.log(" El perimetro del traingulo es de: " + perimetroTriangulo + "cm");
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo (base, altura){
    return (base * altura)/2;
}
// console.log(" El area del Triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();
// js del
console.group("Circulos");
// radio
// const radioCirculo = 4 ;
// console.log(" El radio  del Circulo es de: " + radioCirculo + "cm");

//diametro
function diametroCirculo(radio){
 return radio * 2;
} 
// console.log(" el diametro del circulo es de: " + diametroCirculo + "cm");

// pi
const PI = Math.PI;
console.log("el valor de pi " + PI );

// circunferencia
function perimetroCirculo(radio){
 const diametro = diametroCirculo(radio);
 return diametro * PI
}
// console.log(" el perimetro del circulo es de: " + perimetroCirculo + "cm");

// area
function areaCirculo(radio){
    return (radio * radio) * PI
} 
// console.log(" el area del circulo es de: " + areaCirculo + "cm^2");
console.groupEnd();



function calcularPerimetroCuadrado() {
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


function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1Triangulo");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("inputLado2Triangulo");
    const lado2 = parseInt(input2.value);
    const input3 = document.getElementById("inputBaseTriangulo");
    const base = parseInt(input3.value);
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert(perimetro)
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputBaseTriangulo");
    const base = parseFloat(input1.value);
    const input2 = document.getElementById("inputAlturaTriangulo"); 
    const altura = parseFloat(input2.value);
    const area = areaTriangulo( base , altura);
    alert(area)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
   }
   
   function calcularAreaCirculo(){
       const input = document.getElementById("inputCirculo");
       const value = parseFloat(input.value);
       const area = areaCirculo(value);
       alert(area);
   }

   function calcularAltura(){
    const input1 = document.getElementById("inputLado1Triangulo");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("inputLado2Triangulo");
    const lado2 = parseInt(input2.value);
    const input3 = document.getElementById("inputBaseTriangulo");
    const base = parseInt(input3.value);
    if( lado1 === lado2 && base !== lado1){
        const altura = 
            Math.sqrt(lado1 **2 - ( base ** 2  / 4));
        alert(altura);
    }
   }