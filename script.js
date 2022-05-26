
//dragão
let input = gets();

let qtdEntradas = parseInt(input);
let nivelEnergia;

for(let i = 0; i < qtdEntradas; i++){
    input = gets();
    nivelEnergia = parseInt(input);
    
    if(nivelEnergia <= 8000){
        print   ('Inseto!')
    }else{ 
        print ('Mais de 8000!')
    }
}

//números naturais
const A = parseInt(gets());
const B = parseInt(gets());
const total = ((A + B) * (B - A + 1) / 2);)
print(total);

//PAPALEGUAS
let input = gets()

let qtdEntradas = parseInt(input)
let melhor = 999

for(let i = 0; i < qtdEntradas; i++){
    
    input = gets()
    let tempo = parseFloat(input)
    if ( tempo < melhor  ) melhor = tempo
        	
}
print(melhor)


//arrays
var array = [ 2, 3, 5, 7, 11, 13, 18, 34 ];
 
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 == 0){
            print(array[i]);
        }
               
    }

    //partidas
    
let lines = gets().split("\n");
 
var numberOfMatches = parseInt(lines.shift);
 
let n = parseInt(lines.shift());
let totalMatches = 0;
    while(n>1){
        if(n%2 === 0){
             totalMatches += n/2
             n -= n/2
        }else{
            totalMatches += (n-1)/2
            n -= (n-1)/2
            
        }
    }

    print(totalMatches);
 

