let inicio = ['el','los']; 
let adj = ['gran', 'gran','pequeño' ]; 
let cosa = ['gato','pelicano','turbina','Uppercat'];

function dominios(){
    
    var uno = Math.floor(Math.random()* inicio.length);
    var dos = Math.floor(Math.random()* adj.length);
    var tres = Math.floor(Math.random()* cosa.length);

   var mensaje = alert("www." + inicio[uno] + adj[dos] + cosa[tres] + ".com");
   return;

}


                

               
    
    