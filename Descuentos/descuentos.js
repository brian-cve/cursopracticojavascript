//const precioOriginal = 120;
//const descuento = 18;




function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100 
    return precioConDescuento;
}

//console.log("El precio original  es " + precioOriginal);

console.log ({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})


function priceDiscount(){   
    const inputPrice=   document.getElementById("inputPrice");
    const priceValue = inputPrice.value 
    const inputDiscount =   document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value 

    const precioConDescuento= calcularPrecioConDescuento(priceValue,discountValue)
    const resultP= document.getElementById("resultadoPrecioConDescuento")
    resultP.innerText= "El precio con descuento son: $" + precioConDescuento
 }