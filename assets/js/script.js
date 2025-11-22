var botoncambiar=document.getElementById("cambiar")
function cambiarcolor() {
  const colores = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ff5733', '#33ff57'];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];//Esto funciona, porque la funcion math.random produce un numero mayor que 0 menor que 1, y lo multiplica por la longitud del array, la función math.floor redondea hacía abajo, por lo que el resultado nunca será un indice vacío.
 botoncambiar.style.color = colorAleatorio;
 console.log()
}
function cambiarImagen() {
  document.getElementById('imagen-cambiable').src = 'assets/img/hck.gif';
}

function restaurarImagen() {
  document.getElementById('imagen-cambiable').src = 'assets/img/ñe.jpg';
}
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('Función Deshabilitada');
});
// Obtener el botón por su ID
const btnup = document.getElementById('top-btn');

btnup.addEventListener('click', function() {
  // Mover la ventana suavemente hacia la parte superior 
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Hace que el scroll sea suave
  });
});