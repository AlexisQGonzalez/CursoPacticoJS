// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const PrecioDescuento = (precio * porcentajePrecioDescuento) / 100;
    return PrecioDescuento
}

// console.log({precioOriginal, 
//     descuento, 
//     porcentajePrecioDescuento, 
//     PrecioDescuento}); 

function PriceDiscount(){
 const InputPrice = document.getElementById("inputPrice");
 const pricevalue = parseFloat(InputPrice.value);

 const InputDiscount = document.getElementById("envio");
 const Discountvalue = parseFloat(InputDiscount.value);
 
 const precioFinal = calcularPrecioConDescuento(pricevalue, Discountvalue);
//  para que al momento de regresar un resultado te lo escriba sobre la pagina web utilizaremos .innerText para devolver el resultado de de la operacion anterior sin que sea molesto para el usuario.

const resultP = document.getElementById("ResultP");
const resultP2 = document.getElementById("ResultP2")
resultP.innerText ="El precio con descuento son $" + precioFinal
resultP2.innerText = " se desconto un "+ Discountvalue + "%" 
}