element = document.getElementById("container").innerHTML;
let i = 0;

//creo i numeri da 0 a 100
for(i; i<101; i++ ){


    //controllo se è un multiplo di 3 e 5 escludendo lo 0 
    if( (i % 3 == 0) && (i % 5 == 0) && (i !=0 ) ){
        
        document.getElementById("container").innerHTML +=
        '<div class="box fizzbuzz"> fizzbuzz </div>';
        


    //controllo se è un multiplo di 3 escludendo lo 0 
    } else if( (i % 3 == 0) && (i !=0 ) ){

     document.getElementById("container").innerHTML +=
        '<div class="box fizz"> fizz </div>';

    //controllo se è un multiplo di 5 escludendo lo 0 
    } else if( (i % 5 == 0) && (i !=0 ) ){
        document.getElementById("container").innerHTML +=
        '<div class="box buzz"> buzz </div>';


    //altrimenti stampo semplicemente il numero
    } else {
        document.getElementById("container").innerHTML +=
        '<div class="box">'+i+'</div>';
    }

};