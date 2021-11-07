//Conversor de Moneda

class Conversor {
    constructor(nombre, valor, cantidad){
        this.nombre = nombre,
        this.valor = valor,
        this.cantidad = cantidad,
        this.resltado = 0
    }
    calculoMoneda(){
        if(this.cantidad == "" || isNaN(this.cantidad)){
           alert("error");
        }
        else{
            this.resltado = this.valor * this.cantidad;
            alert(`${this.cantidad} Dolar/es son: ${this.resltado} ${this.nombre}`);
        }
    }

}

    let opcion = Number(prompt(
        `Menú
        
        Convercion de Dolar a: 

        1- Peso Chileno
        2- Peso Argentino
        3- Sol Peruano
    `));

let cantidad = Number(prompt("Ingrese la Cantidad a Convertir"));
const pesoChileno = new Conversor("Peso/s Chileno/s",815.13,cantidad);
const pesoArgentino = new Conversor("Peso/s Argentino/s",99.091,cantidad);
const sol = new Conversor("Sol/les Peruano/s",4.02,cantidad);

switch (opcion) {
    case 1:
        pesoChileno.calculoMoneda();
        break;
    case 2:
        pesoArgentino.calculoMoneda();
        break;
    case 3:
        sol.calculoMoneda();
        break;
    default:
        break;
}




