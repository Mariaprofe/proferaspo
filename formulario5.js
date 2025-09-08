// Los números de socios válidos van desde 1000 a 5000 (inclusive)

var presultado = document.getElementById("resultado");
var presultado2 = document.getElementById("resultado2");
function validar(){

    var resp = document.getElementById("resp").value;


/*&& resp <=5000*/

if(resp!=1){

        presultado.innerHTML = '<strong class="exito"><i class="fa-solid fa-check"></i> Es Correcta su respesta eso indica entendimiento del tema.</strong>';

/*fa-solid fa-circle-check */
    } else{
        presultado.innerHTML = '<strong class="error"><i class="fa-solid fa-check"></i> Incorrecto  vuelve a leer</strong>'
    }

}

function validar1(){

var resp1 = document.getElementById("resp1").value;
if(resp1==1){



         presultado2.innerHTML = '<strong class="exito1"><i class="fa-solid fa-check"></i>  Es Correcta su respesta eso indica entendimiento del tema.</strong>';





     } else{





         presultado2.innerHTML = '<strong class="error1"><i class="fa-solid fa-check"></i> Incorrecto  vuelve a leer</strong>'
     }

 }
