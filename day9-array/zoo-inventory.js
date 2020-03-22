function zooInventory1(myZooList1){
	for (let a=0; a<myZooList1.length; a++){
		myZooList1[a]=myZooList1[a][0]+' the '+myZooList1[a][1][0]+' is '+myZooList1[a][1][1];
	}
	return myZooList1;
}

var myZoo1 =[
    ['King Kong', ['gorilla',42]],
    ['Nemo', ['fish',5]],
    ['phil', ['groundhog',11]]
];
console.log(zooInventory1(myZoo1));



//--------------------- (or) ------------------------------------------------


function zooInventory(myZoo){
    const result=[];
    for(i=0;i<myZoo.length;i++){
        let line='';
        for(j=0;j<myZoo[i].length;j++){
            if(typeof myZoo[i][j] === 'string'){
                line+=myZoo[i][j];
            }
            else if(typeof myZoo[i][j] === 'object'){
                for(k=0;k<myZoo[i][j].length;k++){
                    if(typeof myZoo[i][j][k] === 'string'){
                        line+=' the ' + myZoo[i][j][k] + ' is ';
                    }
                    else{
                        line+=myZoo[i][j][k];
                    }
                }
            }
        }
        result.push(line);
    }
    return result;
}

var myZoo =[
    ['King Kong', ['gorilla',42]],
    ['Nemo', ['fish',5]],
    ['phil', ['groundhog',11]],
];
console.log(zooInventory(myZoo))


/*o/p:-
[ 'King Kong the gorilla is 42',
  'Nemo the fish is 5',
  'phil the groundhog is 11' ]
*/