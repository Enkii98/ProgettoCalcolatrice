/*Tutti i tasti funzionano al 100% pero a volte bisogna premere piu volte 
il valore della tastiera per farglielo prendere,non ho capito il motivo.
Penso sia legato al CSS alla dimensione non che area del bottone che attiva la pseudoclasse active.*/


function tastiera(valorethis){
  document.getElementById("testo").value +=valorethis;
}

function operazioni() {
  document.getElementById("risultato").value = "= "+ eval(0+document.getElementById("testo").value);
}

function eliminatutto(){
  document.getElementById("risultato").value ="";
  document.getElementById("testo").value = "";
}

function eliminaelemento(){

  document.getElementById("testo").value = document.getElementById("testo").value.slice(0, -1);
  document.getElementById("risultato").value = "";

}


