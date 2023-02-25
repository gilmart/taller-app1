let inmuebles=[
    {
        id: "a", 
        direccion: "bello", 
        precio: 10
    },
    {
        id: "b", 
        direccion: "sur", 
        precio: 20
    },
    {
        id: "c", 
        direccion: "norte", 
        precio: 30
    }
]

//console.log(inmuebles)

let inmuebles2={}
let arreglo2=[]

let guardar=document.getElementById("guardar")
guardar.addEventListener("click",function(event){

    console.log("click al botn enviar")

    if (event.target.classList.contains("btn")){
    
        let id= document.getElementById("id").value;
        let direccion= document.getElementById("direccion").value;
        let precio= document.getElementById("precio").value;

        inmuebles2.id=id,
        inmuebles2.direccion=direccion,
        inmuebles2.precio=precio

        arreglo2.push(inmuebles2)
    


        console.log("datos cargados al arreglo")
    }

 

    inmuebles.push(inmuebles2)
    form.reset();

    console.log("imprimmiendo arreglo con datos nuevos")
    console.log(inmuebles)


})

/*
Botón Buscar Inmueble:
i. Que permita ingresar el idinmueble – a través del control del idinmueble y lo muestre en el formulario, generado en el numeral 2, solo si está disponible. */

let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(event){

    console.log("click en buscar")
    if (event.target.classList.contains("btn")){
      
        let idForm= document.getElementById("id").value; 
        //let filtro=inmuebles.filter(inmueble=>inmueble.id==idForm)
       
        let filtro=inmuebles.filter(function(inmueble){
            if(inmueble.id==idForm){

                let direccionT=document.getElementById("direccionTexto")
                direccionT.textContent=inmueble.direccion
            

                let precioT=document.getElementById("precioT")
                precioT.textContent=inmueble.precio

                console.log(direccionT)
                return(idForm)
            }
           
        })

       // console.log(idForm)
        console.log(filtro)
    }
})

/*Botón Listar Inmuebles:
i. Que permita invocar un callback - asíncrono - para listar el arreglo de inmuebles, solo si están disponibles y el precio esté entre 200 millones y 300 millones.*/

let listar=document.getElementById("listar")
listar.addEventListener("click",function(event){

    if (event.target.classList.contains("btn")){
       
        let filtroListar=inmuebles.filter(inmueble => inmueble.precio>=10 && inmueble.precio<=20)
        console.log(filtroListar)
      
        let form=document.getElementById("form")
        filtroListar.forEach(function(inmueble){

            let columna=document.createElement("div")
            columna.classList.add("col")

            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card")
            tarjeta.classList.add("h-100")

            let id=document.createElement("h4")
            id.classList.add("text-center")
            id.textContent=inmueble.id

            let direccion=document.createElement("h6")
            direccion.classList.add("text-center")
            direccion.textContent=inmueble.direccion

            let precio=document.createElement("h6")
            precio.classList.add("text-center")
            precio.textContent=inmueble.precio

        

            tarjeta.appendChild(id)
            tarjeta.appendChild(direccion)
            tarjeta.appendChild(precio)
            columna.appendChild(tarjeta)

            form.appendChild(columna)
        })
    }


})












/*

let form=document.getElementById("form")
inmuebles.forEach(function(inmueble){

    console.log(inmueble.id)
    console.log(inmueble.direccion)
    console.log(inmueble.precio)

    //let id=document.getElementById("id")
    //id.textContent=inmueble.id

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

   // let id=document.createElement("h4")
    //id.classList.add("text-center")
    //id.textContent=inmueble.id

    let direccion=document.createElement("h6")
    direccion.classList.add("text-center")
    direccion.textContent=inmueble.direccion

    let precio=document.createElement("h6")
    precio.classList.add("text-center")
    precio.textContent=inmueble.precio

  

    tarjeta.appendChild(id)
    tarjeta.appendChild(direccion)
    tarjeta.appendChild(precio)
    columna.appendChild(tarjeta)

    form.appendChild(columna)




})

*/