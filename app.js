function validarTextoEntrada() {
    let textoTextTarea = document.getElementById('texto').value;
    let validadorTexto = textoTextTarea.match('^[a-z !ñ]+$');
    if (!validadorTexto) {
      //asignarTextoElemento('h6', 'Solo son permitidas letras minúsculas y sin acentos')
      Swal.fire({
        title: "Oops!",
        text: "Solo son permitidas letras minúsculas y sin acentos!",
        icon: "warning"
      });
  
      setTimeout(() => {
        location.reload()
      }, "3000");
      return true;
  
    }
  
  }

function encriptar(){
    if (!validarTextoEntrada){
        let textoCifrado = textoTextTarea.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        let cifras = document.getElementById('texto').value.length;
         alert(textoCifrado);
    // if (document.getElementById('texto').value.length != 0) {
    //   document.getElementById('encriptado').value = textoCifrado;
    //   titulo.textContent = " ";
    //   parrafo.textContent = " ";
    //   muneco.src = "";
    //   copy1.style.display="block";
    //   caja.style.display="block"
    }
}  
  