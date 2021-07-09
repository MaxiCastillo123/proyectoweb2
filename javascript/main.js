
//DOMd
/*
let links = document.querySelectorAll("a");

links.forEach(function(link) {
  console.log(link);
})
*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click', function(){
    console.log(this)
  })
});
*/

//Obtenes los elementos de la clase .close
//Recorrerlos
//Agregar un evento click a cada uno de ellos

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){
  //Agregar un evento click a cada uno de ellos
  link.addEventListener('click', function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');
//Quitarle las clases de animacion que ya tiene
    content.classList.remove('animate__backInDown');
    content.classList.remove("animate__animated");
//Agregar clases para animar su salida fadeOutUp
    content.classList.add('animate__fadeOutUp');
    content.classList.add('animate__animated');

    setTimeout(function(){
      location.href = "../index.html";
    },300);
  /*  ev.preventDefault();*/
    return false;
  });
});
/*let iconos = document.querySelectorAll('i')
iconos.forEach(function(icono){
  icono.classList.remove('fa-star')
  icono.classAdd.add('fa-star')
});*/
