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

