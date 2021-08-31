// 1) La NASA nos pidió un programa que calcule la edad de las personas en sus planetas favoritos. Para eso necesitamos una web (sencilla!!) donde solicitaremos mediante un input y un select al usuario, su edad en la tierra y su planeta favorito. Luego, mostrarle en un tercer input o en un párrafo en el html, su edad correspondiente al planeta que eligió.
// Días que tardan en dar la vuelta al sol:
// Mercurio: 87.97
// Venus: 224.7
// Tierra: 365.26 (Por esto cada 4 años hay un año bisiesto)
// Marte: 686.68
// Jupiter: 4,331.98
// Saturno: 10,760.55
// Urano: 30,685.49
// Neptuno: 60,191.19

// let cod;

// function ShowSelected()
// {
// /* Para obtener el valor */
// cod = document.getElementById("planetas").value;
// console.log(cod);
// }

// let cuenta= ()=>{
//     let i= parseFloat(document.querySelector("#edad").value) //selecciono el valor del input
//     let edad= i*365.26
//     console.log(i)
//         if(cod==="mercurio"){console.log(edad/87.97)}
//         if(cod==="venus"){console.log(edad/224.7)}
//         if(cod==="tierra"){console.log(i)}
//         if(cod==="marte"){console.log(edad/686.68)}
//         if(cod==="jupiter"){console.log(edad/4331.98)}
//         if(cod==="saturno"){console.log(edad/10760.55)}
//         if(cod==="urano"){console.log(edad/30685.49)}
//         if(cod==="neptuno"){console.log(edad/60191.19)}
// }


// 2)Un vivero nos pide armar un sistema que ayude a las personas a decidir qué tipo de planta colocar en su jardín según la flor que quieran. Para eso, les daremos diferentes opciones (mediante un select, o mediante botones), para que puedan elegir varios tipos de flor. Al elegir una flor, se debe mostrar su imagen. Cuando se le pase el mouse por encima a esa imagen, debe mostrar como se ve el árbol de dicha flor. 


// let cod;

// function valorObtenido() {
  
//  cod= document.getElementById("flores").value;
//  console.log(cod);

// }

// let foto= ()=>{
//     if(cod===`${cod}`){document.querySelector("img").src=`img/${cod}.jpg`}
// }

// let cambio=  ()=> {document.querySelector("img").src=`img/arbol ${cod}.jpg`}

// let m= document.querySelector("img")

// m.addEventListener("mouseover", cambio)
// m.addEventListener("mouseout", foto)

//3)En un juego de mesa, necesitan implementar un sistema de puntos que sea justo para decidir quién arranca.
// Para esto, cada jugador tirará 4 veces el dado (del 1 al 6). 
//Luego, se hará la suma de los 4 dados. 
//Quien haya sacado más puntuación será quien inicie el juego. 
//Nota: A los jugadores se los identificado con “jugador 1, 2, etc…” Según el órden en el cuál tiraron.









//4) Una escuela de tango necesita organizar las inscripciones de sus alumnos.
//a) Mostrar la siguiente infomación de alumnos en una web.

let lista= document.querySelector(".alumnos")
let alumnoPago;

const alumnos =[
 
    {
           "nombre": "Juana",
           "pago": true
       },
       {
           "nombre": "Santiago",
           "pago": true
       },
       {
           "nombre": "Esteban",
           "pago": false
       },
       {
           "nombre": "Lautaro",
           "pago": true
       },
       {
           "nombre": "Marian",
           "pago": false
       }
   ]
// let  pago;

//    for(i=0;i<alumnos.length;i++){
//     document.write(`<p>Alumno:  ${alumnos[i].nombre} </p>`)
//     pago= document.write(`<p>Cuota al dia:  ${alumnos[i].pago} </p>`)   /*me muestra uno por uno, el nnumero de posicionamiento del array va de acuerdo a la iteracion*/
// }

//b) Mostrar en verde quienes pagaron y en rojo quienes no pagaron.

// alumnos.forEach(alumno=>{
//     if (alumno.pago===true){
//        alumnoPago= document.createElement("li")
//        alumnoPago.innerHTML= `<li class="verde">${alumno.nombre}</li>`
//        lista.appendChild(alumnoPago)
//     }else{
//        alumnoPago= document.createElement("li")
//        alumnoPago.innerHTML= `<li class="rojo">${alumno.nombre}</li>`
//        lista.appendChild(alumnoPago)
//     }
// })

    


//5) La AFA está realizando un concurso para ganarte una pelota firmada por Messi.
// Se le solicita a las personas que completen:
// Nombre: mínimo 3 y máximo 16 dígitos.
// Equipo favorito: No debe contener números.
// Edad: Debe ser mayor de edad para participar.
// DNI: Debe tener entre 7 y 8 caracteres.
// Mail: Debe ser un mail válido. Solo se aceptan participantes con mails que terminen en “.com” o “.ar” 
// Mensaje para Messi: Debe contener al menos 30 caracteres.



//6)Papá Noel recibió una cantidad enorme de cartitas este año, por lo que no tuvo tiempo de decidir quienes habían sido buenos o malos, así que decidió armar un sistema de clasificación automático. Si el niño o niña pidió 3 o más de los siguientes objetos, será catalogado como “malo” y se le entregará carbón en navidad. Si pidió 2 o menos, entonces será catalogado como bueno. Los objetos que suman son:
// * Bicicleta, hermano/a/e, playstation, medias, mochila, piano*.
// -Para probar: Generar algún set de pruebas. Pueden usar objetos y/o arreglos. 



//7) Organizar asados es una tarea difícil cuando se trata de calcular la cantidad de comida y repartir los costos. Para eso, un grupo de amigos nos solicita que realicemos un programa que nos ayude a dividir la tarea. 
// Se calcula: 500gr de carne por persona. 1 Botella de cerveza por persona. 1 kilo de helado cada 4 personas. En caso de quedar por ejemplo: 1 kilo y medio, redondear siempre para arriba, es decir a dos kilos. 
// El programa debe recibir como dato la cantidad de comensales y debe devolver: Cantidad de carne, cervezas y helado para comprar, costo total y costo por persona. 
// Costos:
// * Carne por kilo: $700
// * Botella de cerveza: $200
// * Kilo de helado: $600
// Por ejemplo: Si son 5 personas serán:
// - 2.5kg de carne, 5 botellas de cerveza y 2 kilos de helado.
// - Precio total: $1750 de carne + $1000 de cervezas, $1200 de helado. Total: $3950. 
// - Precio por persona: $790.

// const inputComensales= document.querySelector("#comensales")
// const inputCarne= document.querySelector("#carne")
// const inputCerveza= document.querySelector("#cerveza")
// const inputHelado= document.querySelector("#helado")
// const precioFinalTodos= document.querySelector("#total")
// const costoPersona= document.querySelector("#totalPorPersona")


// const precioCarne= 700
// const precioCerveza= 200
// const precioHelado= 600

// const cantidadCarne= 0.5
// const cantidadHelado= 0.25
// const cantidadCerveza=  1

// const calculoCantidad= ()=>{
//     let cantidadPersonas= inputComensales.value
//     let carneTotal= cantidadPersonas*cantidadCarne
//     let cervezaTotal= cantidadPersonas*cantidadCerveza
//     let heladoTotal= Math.ceil(cantidadPersonas*cantidadHelado)  //redondeo para arriba

//     inputCarne.value= carneTotal
//     inputCerveza.value= cervezaTotal
//     inputHelado.value= heladoTotal

//     console.log("total de carne por persona " + carneTotal)
//     console.log("total de cerveza por persona " + cervezaTotal)
//     console.log("total de helado por persona " + heladoTotal)

//     let precioFinal= (carneTotal*precioCarne)+(cervezaTotal*precioCerveza)+(heladoTotal*precioHelado)
//     precioFinalTodos.value= precioFinal
//     costoPersona.value= precioFinal/cantidadPersonas

//     console.log("total a  pagar " + precioFinal)
//     console.log("total a pagar por persona " + (precioFinal/cantidadPersonas))
// }





//8) Una tienda de sombreros nos requiere para su web agregar un carrito de compras que se mantenga cuando la persona entra o sale del sitio. (guiñoguiñolocalstorageguiñoguiño) .
// Para eso le mostraremos al usuario 5 sombreros con su respectivo nombre, foto y precio. Dentro del carro cada uno tendrá una cantidad. Por defecto todos estarán en 0. Cada uno tendrá un botón de sumar y otro de restar. No se podrá tener una cantidad menor a 0 de sombreros. El tope máximo son 3 sombreros por tipo. Cuando llega al tope de sombreros, se debe mostrar toda la info del sombrero con un recuadro rojo.
// En la parte inferior se verá el precio total de los sombreros solicitados.



//9) De Guayerd Seguros nos piden que hagamos un cotizador de seguros de auto. Para eso debemos informar el modelo de auto y el año de fabricación. Cada modelo tendrá un costo fijo y bajará 2% por año de antigüedad. Tendrá como base un costo de $900 + el valor por cada modelo. (Poner 3 modelos como opción!).
