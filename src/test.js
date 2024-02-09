const array1 = {
    nome: 10,
    idade: 20,
    eu: "s"
};

for(let i in array1) {
    if(!array1[i]){
        console.log('invalido'+ array1[i]);
    };
        }
