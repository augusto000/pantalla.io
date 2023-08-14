"use strict"
//Propiedades y métodos del BOM
var ancho = null;
let alto = null;
let por=null;
ancho = window.innerWidth;
alto = window.innerHeight;
var anchoHtml = document.getElementsByClassName('ancho')[0].textContent=ancho+" "+"pixeles ancho";
por = document.getElementsByClassName('por')[0].textContent="X";
var altoHtml = document.getElementsByClassName('alto')[0].textContent=alto+" "+"pixeles alto";

console.log("Dimension :",anchoHtml+" X "+alto);
//console.log("Pantalla "+ancho+" x "+ alto);

/*
//Propiedades y métodos del DOM
let boton=null;
let todosLosParrafos=null;
let classPrincipal=null;
let foto=null;

//boton
boton = document.querySelector('#boton');
//todos los parrafos
todosLosParrafos=document.getElementsByTagName('p');
console.log("Todos los 'p' :" ,todosLosParrafos);

//elemento con class="principal";
classPrincipal = document.getElementsByClassName('principal');
console.log("Parrafo con la clase 'principal' :" ,classPrincipal);

classPrincipal = document.getElementsByClassName('principal')[0].textContent;
console.log('[0]:', classPrincipal);

foto=document.createElement('img');
foto.id="foto1";
foto.src="/img/pasta.jpg";
foto.width="200";
document.body.appendChild(foto);

foto.addEventListener('click', function(){
    if(this.id==="foto1"){
        this.src="img/ceviche.jpg";
        this.id="foto2";
    }
    else{
        this.src="img/pasta.jpg";
        this.id="foto1";
    }
})

boton.addEventListener('click', function(){
             boton.style.color="black";
             this.style.background="yellow";
             this.style.width="200px";
});
*/
//





/*
//Entender el DOM y el BOM
var boton = document.getElementById('boton');
var txt=null;
boton.addEventListener('click', function(){
        console.log("window.location.origin :",window.location.origin);
        console.log("window.location.ancestorOrigins :",window.location.ancestorOrigins);
        console.log("window.location.hostname :",window.location.hostname);
        console.log("window.location.protocol :",window.location.protocol);
        console.log("*window.location.href :",window.location.href);
        console.log("window.location.txt :",window.location.txt);
        console.log("window.location.href :",window.location.href="https://www.github.com/augusto000");

});
*/
/*
//Metodo forEach que imprime el indice (i) y el elemento del arreglo.
var platillos=["Ceviche","Tacos","Pasta"]; 
platillos.forEach((element, i) => console.log(i, element));
*/
/*
//Metodo for...in no usa una arrow function
var platillos=["Ceviche","Tacos","Pasta"]; 
for(let i in platillos){ 
    console.log(platillos[i])
};
*/
/*
//Metodo forEach() usa una arrow function, imprime los indices.
var platillos=["Ceviche","Tacos","Pasta"]; 
platillos.forEach((platillo,i) => console.log(i,platillo));
*/
/*
//Metodo some() y every()
var resultado,resultado2 = null;
let menu =[
    {
        nombre:"Ceviche",
        precio:20,
        pais:"Perù"
    },
    {
        nombre:"Tacos",
        precio:10,
        pais:"Mexico"
    },
    {
        nombre:"Pasta",
        precio:50,
        pais:"Italia"
    },
    {
        nombre:"Enchilada",
        precio:5,
        pais:"Mexico"
    }          
  ];
  //metodo some() realiza la iteracion, si necesidad de agregar un for..
  //Busca que con que alguno cumpla la condiciòn da valor True, o si no False
  resultado = menu.some(platillo => platillo.precio <= 10);
  console.log("Hay/algun platillo que tenga precio menorIgual que 10? :", resultado );

  //metodo every() realiza la iteracion, sin necesidad de agregar un for..
  //Busca que todos cumplan la condicion de ser menorIgual de 50
  resultado2 = menu.every(platillo => platillo.precio <= 50);
  console.log("Todos/cada platillo cuesta menos o igual a 50? :",resultado2); 
*/

/*
//Mètodo filter() en un Objeto
let menu =[
    {
        nombre:"Ceviche",
        precio:20,
        pais:"Perù"
    },
    {
        nombre:"Tacos",
        precio:10,
        pais:"Mexico"
    },
    {
        nombre:"Pasta",
        precio:50,
        pais:"Italia"
    },
    {
        nombre:"Enchilada",
        precio:5,
        pais:"Mexico"
    }          
  ];
  let q = menu.filter(pais => pais.pais=="Mexico");
  console.log(q);
  */
/*
//Mètodo el indice con findIndex() dentro de un Objeto.
let menu =[
            {
                nombre:"Ceviche",
                precio:20,
                pais:"Perù"
            },
            {
                nombre:"Tacos",
                precio:10,
                pais:"Mexico"
            },
            {
                nombre:"Pasta",
                precio:50,
                pais:"Italia"
            },
            {
                nombre:"Enchilada",
                precio:5,
                pais:"Mexico"
            }          
          ];
      let pNumEncontrado = menu.findIndex( platillo => platillo.nombre=="Asado");
        console.log(pNumEncontrado);
*/        
/*
//Metodo findIndex() con un array
var platillos = ["Ceviche","Tacos","Pasta"];
//bucar el ìndice de Tacos.
var indexPlatillo = platillos.findIndex( platillo => platillo == "Tacos");
console.log("se encontrò :",indexPlatillo);
*/

/*
//Metodo find()
var menu=[
           {nombre:"Ceviche",precio:20, pais:"Perù"},
           {nombre:"Tacos",precio:10, pais:"Mexico"},
           {nombre:"Pasta",precio:50,pais:"Italia"}
         ];
     
     let pElegido = menu.find(platillo =>platillo.nombre=="Tacos");
     console.log(pElegido);
*/     
/*
//Busqueda en un Array
var platillos = ["Ceviche","Tacos","Pasta"];
var pElegido = platillos.find(platillo => platillo == "Pasta");
pElegido ? console.log("se encontro :", pElegido):console.log("no se encontro :",pElegido);
*/
/*
//forEach()
var platillos =Array.of("Tacos", "Pasta", "Ceviche");
//var plat = platillos.split(', ');
console.log(typeof platillos);
// si son 2 o mas parametros en la arrow function se los pone entre () si o si
platillos.forEach( (item,index) => {
    let indice = index;
    let pl = item;
    return console.log(indice, pl);
});
*/
/*
//Desectructuraciòn o asignaciòn a la inversa
var platillos = ["Pasta", "Ceviche", "Tacos"]; // es un array
let item1 =platillos[0];
let item2 =platillos[1];
let item3 =platillos[2];

console.log(item1);
console.log(item2);
console.log(item3);
console.log('')
//o tambien se puede hacer

var[itemm1,itemm2,itemm3]= platillos.sort();

console.log(itemm1);
console.log(itemm2);
console.log(itemm3);
*/

/*
//Metodo III
var platillo = "Pasta, Ceviche, Tacos";
var item = Array.of(platillo);
console.log(item);
*/
/*
//Metodo II split()
var platillo = "Pasta, Ceviche, Tacos";
var item = platillo.split(',');
console.log(item);
*/
/*
//Metodo I con asignaciòn inversa o desectructuracion
//como acceder a cada elemento Html,usando Array.from y map()
var platillosHtml = document.querySelectorAll('.platillos p');
var platillosHtml2 =Array.from(document.querySelectorAll('.platillos p'));
var platillos = platillosHtml2.map(platillo => platillo.textContent);
var [platillo1,platillo2,platillo3]= platillos;
console.log(platillo1);
console.log(platillo2);
console.log(platillo3);
console.log('\n');
// o tambien se puede hacer:
var platillos4 = platillos[0];
var platillos5 = platillos[1];
var platillos6 = platillos[2];
console.log(platillos4);
console.log(platillos5);
console.log(platillos6);
*/



/*
//Metodo I para generar arreglos split()
//.split()Convierte una cadena en un array
var platillos = "ceviche, tacos, pasta";
var item = platillos.split(', ');
console.log("antes :",platillos)
console.log("ahora :",item);
item.map( item =>)
*/
//Metodo II con Array.from() y map().

/*
var platillos = ["ceviche", "tacos", "pasta"];
var bebidas =["Coca","toraso","Doble Cola"];
console.log("Ahora soy Array ",platillos);
//join convierte un array en cadena y los une.
console.log("luego de usar join soy cadena ",platillos);
var cadenas = platillos.join();
console.log(cadenas);
*/
/*
//Arrays Multidimensionales
var platillos = ["ceviche", "tacos", "pasta"];
var bebidas =["Coca","toraso","Doble Cola"];

let menu =[platillos,bebidas];
console.log(menu.length);
console.log(menu[1][2]);
*/
/*
//Medir un arreglo y accederlo
var platillos = ["ceviche", "tacos", "pasta"];
console.log("Hay "+platillos[1] +" en el menù");

var cantidadplatillos = platillos.length-1;
//console.log("el platillo seleccionado es "+platillo);
console.log("Hay nuevamente "+cantidadplatillos+" platillos en el menu");
*/

/*Plantillas en Js usando backsticks y ${variable}.
var lenguaje = "Javascript";
var lenguaje2 = "Html";
var mensaje = `Me gusta ${lenguaje} y ${lenguaje2}`;
console.log(mensaje);

var mensajeMultilinea =`
Me gusta ${lenguaje}
y su integraciòn con
el ${lenguaje2};
`
console.log(mensajeMultilinea);
*/
/*
let mensaje = "Estoy aprendiendo con Javascript y estoy aprendiendo mucho javascript";
// se puede agregar un segundo parametro asì empieza a buscar
// desde el espacio 53 por ejemplo.
let x = mensaje.includes("mucho", 53);
console.log("incluye el texto 'mucho' : ",x);
*/
/*
//Trabajando con busquedas de cadenas
let mensaje = "Estoy aprendiendo con Javascript y estoy aprendiendo mucho javascript";

// let rio = mensaje.indexOf("aprendiendo");
// console.log("primer indexOf(mensaje): ",rio);

// let lio= mensaje.lastIndexOf("aprendiendo");
// console.log("lastindexOf(mensaje): ",lio);

// let s = mensaje.search("aprendiendo");
// console.log("search(mensaje): ",s);

// let q = mensaje.search(/ja/i);
// console.log("mensaje.search(/ja/i)",q);//ovbia Mayus y Minus

// let p = mensaje.charAt(3);
// console.log("La letra en la posicion 3 es "+ p);
//let mensaje = "Estoy aprendiendo con Javascript y estoy aprendiendo mucho javascript";
//let c = mensaje.substr(0,2);
//console.log(c);//Obtiene 'Es' de la cadena mensaje
var qq = mensaje.match(/ja/gi);
console.log("resultado",qq);
*/
/*
//Pedir algun dato a un usuario para poder seguir viendo videos
const video = document.querySelector('.media');
video.addEventListener('ended',function(){
    let resp = prompt('Debes ingresar tu email para seguir viendo videos','algo@algomas.com');
    if((resp==null) || (resp=="")){
          console.log("sin datos..");
    }
    else{
        console.log(resp);
    }
});
*/
/*
//Reaccionar a la finalizacion de un video
let video = document.querySelector('.media');
video.addEventListener('ended',function(){
    let respuesta = confirm("Deseas ver el video nuevamente ?");
    if(respuesta){
        video.play();
    }
    else{
        //window.location="https://augusto000.github.io/funkshop";
        window.open("https://augusto000.github.io/funkshop", "_blank");
    }
});
*/
/*
//Usando un alert para informar que termino la reproduccion
//del video.
let video = document.querySelector('.media');
video.addEventListener('ended',function(){
    alert('Mensaje: \n\n - El video a terminado...');
})
*/
/*
//cambia de color del background-color usando setInterval
// temporizador ,para la ejecucion del cambio de color

// let temporizador = setInterval(function(){
//     setColor();  
// },2000);
setTimeout( function(){
                       setColor();  
                      },3000
          );

function setColor(){
    let pagina = document.body;
    pagina.style.background = pagina.style.background == "blue" ? "green":"blue";
}    
function stopChangeColor(){
    clearInterval(temporizador);
} 
*/
//Eventos multimedia
// const video = document.querySelector('.media');
// video.addEventListener('play',function(){
//     console.log('el video comenzò');
// });
// video.addEventListener("seeking",function(){
//     let j = this.currentTime;
//     console.log("Buscando en el segundo "+j);
// })
// video.addEventListener('ended',function(){
//     console.log('El vidio a terminado..');
// })
/*
//escuchar cuando se carga un documento
window.addEventListener('load',function(){
    console.log('el contenido de la ventana se cargò');
});
*/
/*
//keyup,keypress,keyout
window.addEventListener('keyup',(event)=>{
    var letra = String.fromCharCode(event.keyCode);
    console.log('se solto la tecla '+letra);
})
*/
/*
window.addEventListener('keydown',(event)=>{
          console.log('Tecla presionada')
          // que tecla se presiono?
          console.log(String.fromCharCode(event.keyCode));
});
*/

/*
const boton= document.querySelector('.boton');
boton.addEventListener('click', function(){
    console.log('El boton se ha pulsado');
});
boton.addEventListener('mouseover',function(){
    console.log("El mouse esta sobre el boton");
});
boton.addEventListener('mouseout',()=>{
    console.log('El mouse no esta sobre el boton');
    console.log(this);
});
*/
/*
const boton = document.querySelector('.boton');
boton.addEventListener('click',()=>{
    console.log(this.location="http://www.google.com");
})
*/
/*
var boton = document.querySelector('.boton');
boton.addEventListener('click',function(){
    console.log(this);
});
*/

/*
let fulln="Cesar Augusto Achà";
var nombreCompleto = (name1, name2, lastName)=>{
    var fn = name1+" "+name2+" "+ lastName;    
    return fn;
}
var checkOk = nombreCompleto("Cesar", "Augusto", "Achà");
var r = (fulln == checkOk)? "SON IGUALES":"NO SON IGUALES";
console.log(checkOk+" y "+fulln+" "+ r);
*/


/*
function inputData(name1, name2,lastName, fullNameCB){
    var fullName = name1 +" "+ name2 ;
    var addLastName = lastName;
    let r = fullNameCB(fullName +" "+addLastName);
    return r;
}
inputData("Cèsar", "Augusto","Achà",function(resultado){
    //cuerpo de la funciòn anòmima que se envìa como parametro.    
    console.log(resultado);

}); // el ùltimo ")" es del cierre de parametro que se envìa
*/
/*
var anonima = function(nombre){
    var mensaje="Hola "+nombre;
    debugger
    return mensaje;
}
console.log(anonima("Josè"));
*/
/*
function elementos(...nElementos){
    console.log("nElementos es de tipo "+typeof(nElementos));
       return nElementos;
}
/*
let ingredientes=["pollo","pescado"];

var rIngredientes = elementos(...ingredientes,"maiz","albaca");

for (var i in rIngredientes){
    console.log(rIngredientes[i]);
    //debugger;
}


/*
function ingre(...masIngredientes){
    return(masIngredientes);

}
let ingredientes = ingre("pollo",2,"pescado","melon",400,2.566);
console.log(ingredientes);
*/
/*
var num = 5;
var i = 0;
var texto = "";

while (i <= num) {
    texto = texto + "*";
    console.log(texto);
    i += 1;
}
*/
/*
var mult = 0;
var numero = 5;

for (let i = 0; i < 11; i++) {
    mult = numero * i;
    console.log(numero + " * " + i + " = " + mult);
    
}
*/
/*
var productos=5;

for(let contador=0;contador < productos;contador++){
    console.log(contador);
    debugger;    
}
*/
/*
var datoA=110;
var datoB=20;
var resultado= "sin dato"

if (datoB < datoA){
         resultado="La condicion se cumplio..";
}
console.log(resultado);
*/
/*
var num1 =222;
var num2 = 22;

var tipo = num1 < num2 ? " el tipo de num1 es "+ typeof(num1) : " el tipo de num2 es "+ typeof(num2);
console.log(tipo);
*/
/*
function mostrar(){
        var nuevasPersonas;
        var persona ={nombre:'Sergio', twitter:"yacafx"};

        var personas = [
            {nombre:'Hugo', twitter:'dcHugo'},
            {nombre:'Paco', twitter:'dcPaco'},
            {nombre:'Luis', twitter:'dcLuis'},
            persona,
            {nombre:'Cesar', twitter:'dcCesar'},
        ];
        var personaJSON = JSON.stringify(personas);
        return personaJSON;
        }

      var personitas = mostrar()
      personitas=JSON.parse(personitas);
      console.log("personitas :", personitas);
      */