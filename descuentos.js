// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento, envio){
    const porcentajePrecioDescuento = 100 - descuento;
    const PrecioDescuento = (precio * porcentajePrecioDescuento) / 100;
    const PrecioTotal = PrecioDescuento + envio
    return PrecioTotal
}

// console.log({precioOriginal, 
//     descuento, 
//     porcentajePrecioDescuento, 
//     PrecioDescuento}); 
 const cupones = [ "ver2022", "flex420", "LaMDAEstaViva"];
function PriceDiscount(){
 const InputPrice = document.getElementById("inputPrice");
 const pricevalue = parseFloat(InputPrice.value);

 const InputDiscount = document.getElementById("inputCupon");
 const cuponvalue = InputDiscount.value

 const InputEnvio = document.getElementById("InputEnvio");
 const EnvioValue = parseFloat(InputEnvio.value);
 let Discountvalue
 switch(cuponvalue){
    case cupones[0]:
        Discountvalue = 15
    break;
    case cupones[1]:
        Discountvalue = 20
    break;
    case cupones[2]:
        Discountvalue = 25
    break;
    default:
        Discountvalue = 0
 }       
 const precioFinal = calcularPrecioConDescuento(pricevalue, Discountvalue, EnvioValue);
//  para que al momento de regresar un resultado te lo escriba sobre la pagina web utilizaremos .innerText para devolver el resultado de de la operacion anterior sin que sea molesto para el usuario.

    const resultP = document.getElementById("ResultP");
    const resultP2 = document.getElementById("ResultP2");
    const resultP3 = document.getElementById("ResultP3");
    resultP.innerText ="El precio con descuento son $" + precioFinal;
    resultP2.innerText = " se desconto un "+ Discountvalue + "%" ;
    resultP3.innerText = "El costo por el envio es de " + EnvioValue;
}