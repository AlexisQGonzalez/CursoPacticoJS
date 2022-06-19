

// buscar la media del array anterior




function calcularPromedio(lista){
    // let sumaLista = 0; 
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista+ lista[i]; 
    // }
    const sumaLista = lista.reduce(

        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// buscar la mediana de un array

const lista1=[
    100,
    200,
    500,
    4000000,
]

const mitadLista1 = parseInt(lista1.length / 2);



// con la siguiente funcion se busca validar si un numero par o impar
function espar( numero){
    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;
if (espar(lista1.length)){
    // -> promedio de 2 elementos --> mediana
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    const promedioElementos = calcularPromedio([elemento1,elemento2]);
    mediana = promedioElementos

} else {
    // posicion  mitadLista1 dentro de lista1 --> mediana
    mediana = lista1[mitadLista1]

}