//js del cuadrado
console.group("cuadrado");
// const ladoCuadrado = 5;
// console.log(" Los lados del cuadrado miden: " + ladoCuadrado + "cm");
function perimetroCuadrado(lado){
return lado * 4;
} 
// console.log(" El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
function areaCuadrado(lado){
 return ladoCuadrado * ladoCuadrado;
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
    return (base* altura)/2;
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

