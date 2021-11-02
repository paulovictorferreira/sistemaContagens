let numeroAlunos = 5;

let listaAlunos = ["Paulo","Naty","Marcos","Thiago","Livia","Vana"]

for(let contador = 0; contador < listaAlunos.length; contador++ ) 

    if(contador == 0) {
        console.log(`${contador}:ZERO`);
    }else if (contador % 2 != 0) { 
        console.log(`${contador}:ÌMPAR`); // interpolação - Template Strings
    } else {
        console.log(`${ contador}:PAR`); 
    }