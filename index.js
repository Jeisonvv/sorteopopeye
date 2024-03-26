let carrosImg = document.querySelector('.carros-img');
let img = document.getElementsByClassName('carrusel-img')
let index = 1
setInterval(function(){
    let percentage = index * -100;
    carrosImg.style.transform = "translateX(" + percentage + "%)";
    if(index > img.length -2){
        index = 0;
    }
    index++
}, 3000)

// soteo para el numero
const boletas = []
const cantidad = 5
for(let i = 0 ; i < cantidad ; i++){
    boletas.push(i)
}
class Sorteo{
    constructor(num){
        this.boletas = num;
       this.array = []
    }
    getBoletas(){
        return this.boletas;
    }
    createNum(){
        let numAleatorio = this.boletas[Math.floor(Math.random() * this.boletas.length)];
        return numAleatorio
    }
    deleteNum(nunber){
        this.boletas = this.boletas.filter((num) => num != nunber);
        this.array.push
    }
    
}
const sorteo1 = new Sorteo(boletas)

function activi(){

    const numero = sorteo1.createNum();
    const numeroHTml = document.getElementById
    ('numero_aleatorio')
    const array = []
    if(sorteo1.boletas.length == 0){
        numeroHTml.innerHTML = 'No tenemos mas boletas'
        
    }
    else{
        numeroHTml.innerHTML = numero
        sorteo1.deleteNum(numero)
        const comprar = document.getElementById('compra')
        comprar.href = 'https://api.whatsapp.com/send?phone=+573017532906&text=hola%20quiero%20comprar%20esta%20boleta%20*'+ numero+'*%20de%20la%20rifa%20del%20carro'
    }
    return numero
   
}
const buttonAleatorio = document.getElementById('buttonnumAleatorio')
buttonAleatorio.addEventListener('click',activi)

// comprar boleta 

