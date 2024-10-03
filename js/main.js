

document.addEventListener("DOMContentLoaded", (event) => {
  
  
/* VARIABLES */ 


const urlBase='assets';
let arrayImagenes = [];


const arrayBotones=[
  {
      id:"mar",
      text:"Mar"
  },
  {
      id:"edificios",
      text:"Edificios"
  },
  {
      id:"senales",
      text:"Señales"
  },
  {
      id:"arena",
      text:"Arena"
  }
  
]


const arrayFotosViajes=[
  {
      id:1,
      src:`${urlBase}/FOTOS_VIAJES/viajes-1.jpg`,
      alt:'viajes 1',
      descripcion:'Esta es la descripción de la foto 1',
      tag: ["mar","arena"],
      title: "Título imagen 1"
    },
  {
      id:2,
      src:`${urlBase}/FOTOS_VIAJES/viajes-2.jpg`,
      alt:'viajes 2',
      descripcion:'Esta es la descripción de la foto 2',
      tag: ["mar"],
      title: "Título imagen 2"
  },
  {
      id:3,
      src:`${urlBase}/FOTOS_VIAJES/viajes-3.jpg`,
      alt:'viajes 3',
      descripcion:'Esta es la descripción de la foto 3',
      tag: ["senales"],
      title: "Título imagen 3"
    },
  {
      id:4,
      src:`${urlBase}/FOTOS_VIAJES/viajes-4.jpg`,
      alt:'viajes 4',
      descripcion:'Esta es la descripción de la foto 4',
      tag: ["edificios"],
      title: "Título imagen 4"
  },
  {
      id:5,
      src:`${urlBase}/FOTOS_VIAJES/viajes-5.jpg`,
      alt:'viajes 5',
      descripcion:'Esta es la descripción de la foto 5',
      tag: ["edificios"],
      title: "Título imagen 5"
  },

  {
      id:6,
      src:`${urlBase}/FOTOS_VIAJES/viajes-6.jpg`,
      alt:'viajes 6',
      descripcion:'Esta es la descripción de la foto 6',
      tag: ["mar","arena"],
      title: "Título imagen 6"
  },

  {
      id:7,
      src:`${urlBase}/FOTOS_VIAJES/viajes-7.jpg`,
      alt:'viajes 7',
      descripcion:'Esta es la descripción de la foto 7',
      tag: ["edificios"],
      title: "Título imagen 7"
  }
]


/* EVENTOS */

//CLICAR EN BOTONES
document.addEventListener("click", (ev)=>{
//console.log(ev.target)
  if (ev.target.matches("#buttons button") ) {
    let tag= ev.target.id;
    pintarImagenes(tag)
  }

  if (ev.target.matches("footer p")) {
    console.log("este es el footer")
  }
})

//CLICAR EN IMAGENES
document.addEventListener("click", (ev)=>{
  //console.log(ev.target)
  if (ev.target.matches("#thumbnail img") ) {
    let tag= ev.target.id;
    //console.log(tag)
    ampliarImagenes(ev.target.id)
  }

  })


//_________________________________________________________
/* FUNCIONES */


//-----PINTAR BOTONES-----
const pintarBotones=()=>{
  console.log('pintando Botones.....');
  
  arrayBotones.forEach((item)=>{
    buttons.innerHTML+=  `
         <button id="${item.id}">${item.text}</button>
    `
  })


}







//-----MOSTRAR INFO BOTONES / IMPRIMIR FOTOS-----

const generarArrayImagenes = (tagBoton) => {
  console.log(tagBoton);


  //Creación nuevo array
  let arrayFotosFiltradas = [];

  arrayFotosViajes.forEach((item)=>{
    //console.log(item.tag)

    arrayFotosFiltradas = arrayFotosViajes.filter((foto)=>foto.tag.includes(tagBoton))

  });
  return arrayFotosFiltradas
}



const pintarImagenes = (tagBoton) =>{
  arrayImagenes = generarArrayImagenes(tagBoton);
  console.log(arrayImagenes)

  //Limpieza de galería y mensaje
  gallery.innerHTML = ""
  textInfo.innerHTML = ""
  thumbnail.innerHTML = ""

  //Pintar mensaje
    
  textInfo.innerHTML+=  `
  <p>Se han encontrado ${arrayImagenes.length} imágenes con el tag ${tagBoton}</p>
`

  //Pintar imágenes
//console.log(arrayFotosFiltradas)
  arrayImagenes.forEach((item, i)=>{
    if (i < 1) {
      gallery.innerHTML+=  `
    <div>
          <h3>${item.title}</h3>
          <img id="${item.id}" src="${item.src}" alt="">
    </div>
  `
    } else {
      thumbnail.innerHTML+=  `
      
            <img id="${item.id}" src="${item.src}" alt="">
    
    `


    }

  })

}



/*
1.generarImagenes
2. Recorrer lista imagenes
2.5 Recorrer sublista tags
3.    Si valor entrada es igual a tag
        imprimir imagen

*/


//-----CLICAR EN MINIATURA-----
const ampliarImagenes = (imgID) => {
  //console.log(imgID)
  arrayReordenadas = [];
  arrayImagenes.forEach((item, i)=>{
    if (item.id == imgID) {
      arrayReordenadas.unshift(item)
    }
    else {
      arrayReordenadas.push(item)
    }
  })
  console.log("_____")
  console.log(arrayReordenadas)



  gallery.innerHTML = ""
  thumbnail.innerHTML = ""

  arrayReordenadas.forEach((item, i)=>{
    if (i < 1) {
      gallery.innerHTML+=  `
    <div>
          <h3>${item.title}</h3>
          <img id="${item.id}" src="${item.src}" alt="">
    </div>
  `
    } else {
      thumbnail.innerHTML+=  `
      
            <img id="${item.id}" src="${item.src}" alt="">
    
    `
    }
  })
  
}



/*
1.generarImagenes
2. Recorrer lista imagenes
3. Si i es menor que 1 imprimir en A
4. Si i es igual o mayor que 1 imprimir en B.
____________
Nuevas imágenes serán botones
Si clicamos en imagen X colocarla al inicio de la lista y volver a 2


*/










/* INVOCACIONES */


pintarBotones()


  });//DOM CARGADO
