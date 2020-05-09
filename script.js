let inicio = ['el','los','la']; 
let adj = ['gran', 'gran','pequeño' ]; 
let cosa = ['Hook','Jab','Uppercat'];

function dominios(){

    for(let a = 0; a<inicio.length; a++){
        for(let b = 0; b<adj.length; b++){
            for(let c = 0; c<cosa.length; c++){

                console.log("www."+inicio[a]+adj[b]+cosa[c]+".com");

            }
        }
    }
        
        
    
    
}   

dominios();
