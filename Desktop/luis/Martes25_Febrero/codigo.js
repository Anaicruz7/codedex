function sumar() {

   
    let x=0;
    let y=0;
    let c=0;


    x=parseFloat(document.getElementById("numero1").value);
    y=parseFloat(document.getElementById("numero2").value);

    c=x+y;
    document.getElementById("suma").value =c;
 }