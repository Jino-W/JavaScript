// graph
//M1  -> #switchcase   #Nested if- else
function Rovers1(X, Y, Pos){
    this.x = X;
    this.y = Y;
    this.pos = Pos;
    this.move = function(str){
        let L = ['N', 'W', 'S', 'E'];
        let R = ['N', 'E', 'S', 'W'];
        str.split('').forEach((s)=>{
            console.log('s=', s)
            if(s == 'M'){             //x, y position fixing
                switch(this.pos){
                    case('N'):
                        this.y = this.y + 1;
                        break;
                    case('S'):
                        this.y = this.y - 1;
                        break;
                    case('E'):
                        this.x = this.x + 1;
                        break;
                    case('W'):
                        this.x = this.x - 1;
                        break;
                }
            }else if(s == 'L'){      // facing direction change -> left 90-deg
                if(L.indexOf(this.pos)+1 < L.length){          //(or) if(this.pos !== 'E')
                    this.pos = L[L.indexOf(this.pos)+1];
                    console.log(this.pos);
                }else{
                    this.pos = L[L.indexOf(this.pos)+1-L.length];
                    console.log(this.pos);
                }
                
            }else if(s == 'R'){       // facing direction change -> right 90-deg
                if(R.indexOf(this.pos)+1 < R.length){          //(or) if(this.pos !== 'W')
                    this.pos = R[R.indexOf(this.pos)+1];
                    console.log(this.pos);
                }else{
                    this.pos = R[R.indexOf(this.pos)+1-R.length];
                    console.log(this.pos);
                }
            }
        })
    }
    this.getposition = function(){
        return `'${this.x} ${this.y} ${this.pos}'`
    }
}


const input1 = new Rovers1(1, 2, 'N');
input1.move('LMLMLMLMM');
console.log(input1.getposition());

const input2 = new Rovers1(3, 3, 'E');
input2.move('MMRMMRMRRM');
console.log(input2.getposition());

/* o/p:-
s= L                 //s -> movement instruction
W                    // facing direction
s= M
s= L
S
s= M
s= L
E
s= M
s= L
N
s= M
s= M
'1 3 N'              //1.  o/p
s= M
s= M
s= R
S
s= M
s= M
s= R
W
s= M
s= R
N
s= R
E
s= M
'5 1 E''           //2.o/p
*/


//------------------------------------------------------------------


//M2 -> #ternary operator
function Rovers(X, Y, Pos){
    this.x = X;
    this.y = Y;
    this.pos = Pos;
    this.move = function(str){
        let dir = ['N', 'W', 'S', 'E'];
        for(s of str){
            if(s == 'M'){       // incrementation (or) decrementation of position
                if(this.pos == 'N' || this.pos == 'S'){
                    this.y = this.pos=='N' ? this.y+1 : this.y-1
                }else{
                    this.x = this.pos=='E' ? this.x+1 : this.x-1
                }
            
            }else if(s == 'L'){       //direction fixing left 90deg  
                this.pos = dir[dir.indexOf(this.pos)+1] ? dir[dir.indexOf(this.pos)+1] : dir[0] 
            }else if(s == 'R'){       //direction fixing right 90deg (if if there is any element at the given position mentioned, do decrement operation or set the position to the last position)
                this.pos = dir[dir.indexOf(this.pos)-1] ? dir[dir.indexOf(this.pos)-1] : dir[dir.length-1]
            }
        }
    }
    this.getposition = function(){
        return `'${this.x} ${this.y} ${this.pos}'`;
    }
}


const input11 = new Rovers(1, 2, 'N');
input11.move('LMLMLMLMM');
console.log(input11.getposition());

const input22 = new Rovers(3, 3, 'E');
input22.move('MMRMMRMRRM');
console.log(input22.getposition());

/* o/p:-
'1 3 N'
'5 1 E'
*/


//-----------------------------------------------------------------------



