function repararvehiculo (repararCaba,repararPba){
    alert ("dirijase a :"+repararCaba+ " o/a "+ repararPba);
}
let repararCaba= "Reparaciones obelisco a 35km de su ubicación";
let repararPba= " pocas cuadras de donde se encuentra";
let escenario2 


function escapar(){
    alert("has sobrevivido con exito")
}
function perder(){
    alert("has perdido esta ronda")
}
function finalizar(){
    alert("has sobrevivido con exito")
}
/****INICIO DE LA SIMULACION */

alert ("elige tu camino");
let pantalla;
do{
    let pantalla=parseInt(prompt("indique el escenario de juego \n1-ciudad buenos aires \n2-Zona Sur \n3-microcentro \n4-Zona Norte \n5-La Matanza"));
    if (pantalla==0){
    break;
    }
    console.log (pantalla);

    switch (pantalla){
        case 1:
            alert ("has elegido:'ciudad de buenos aires'");
            if (pantalla==1);
            alert("Encontraste un grupo de personas que hicieron un refugio en un gran supermercado")
            finalizar();
            break;
        case 2:
            alert ("has elegido:'Zona Sur'");
            if (pantalla==2);
            alert("Te diriges hacia el sur, a las afueras de la ciudad");
            let escenario = parseInt(prompt("que quiere hacer;\n1-buscar agua, \n2-buscar refugio, \n3-buscar comida,\n4-Intentar utilizar el tren Roca"));
            if(escenario===1){
                alert("FELICITACIONES has encontrado una cisterna de agua potable, podras vivir unos dias antes buscar comida");
                finalizar();
                break;
            }else if (escenario===2){
                alert(" FELICITACIONES has encontrado una vieja casa con luz, agua y comida. Escuchas ruidos no muy lejos de tu ubicación...");
                finalizar();
                break;
            }else if (escenario===3){
                alert("Encuentras un almacen abandonado, repleto de mercadería");
                finalizar();
                break;
            }else if (escenario===4){
                alert("Haces mucho ruido intentando arrancar el tren, atraes atacantes a tu ubicación");
                escapar();
                break
            }else{
                alert("no se ha identificado su respuesta ingrese al menu principal");
                break;  
            }
        case 3:
            alert ("elegiste:'Microcentro'");
            if( escenario2 === 3);
            alert ("Te quedaste en plena área de bombardeos. No sobrevives...");
            perder();
            break
        case 4:
            alert ("elegiste:'Zona Norte'");
            if (pantalla==4);
            alert("elija su vehiculo");
            let vehiculo=parseInt(prompt("elija el vehiculo:\n1-auto \n2-monopatin \n3-bicicleta"));
            if(vehiculo==1){
                alert("ha encontrado un auto veloz, pero las calles estan cortadas, siendo una ciudad postapocaliptica, hay muchos infectados queriendolo atrapar")
                escapar();
                break;
            }else if (vehiculo==2){
                alert("has encontrado un monopatin con mucha bateria que te llevará por pequeñas calles y podras escapar hasta un lugar seguro");
                finalizar();
                break;
            }else if (vehiculo==3){
                alert("la bicleta esta un poco destartalada, pero te llavara, puede que requieras reparala para continuar tu camino");
                repararvehiculo(repararCaba,repararPba); 
                finalizar();
                break;
            }else{
                alert("corra por su vida");
                escapar();
            }
            break;
        case 5:
            
            alert ("elegiste:'La Matanza'");
            if(escenario2==5);
            alert("Fuiste a La Matanza y te quedaste sin pertenencias...");
            perder();      
            break;
        default:
            alert ('ha ingresado un numero incorrecto, ingrese nuevamente la opcion deseada del 1 al 5, o 0 para salir ');
        
    }
    pantalla=prompt ("si desea salir de menu precione el numero 0 si desea volver al menu principal precione cualquier letra")
}while(pantalla!=0)