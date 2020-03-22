var name='jino';
console.log('hai,'+ name);

var a=[10,35,57,28,9,100,85,92,21,11];
    var target =Math.round(Math.random()*100);
    var i;

    for(i=0;i<a.length;i++){
        console.log('Your guess is,',a[i]);
        if(a[i]<target){
            console.log('Oops.Your guess was LOW');
        }
        else if(target===a[i]){
            console.log('Good,job'+name);
            break;
        }
        else{
            console.log('Oops.Your guess was HIGH');
        }
    }
    if(i === a.length){
        console.log('sorry you did not get my number,my number was,',target);
    }

/* 
prompt() method displays a dialog box that prompts the visitor for input.
A prompt box is often used if you want the user to input(always string) a value before entering a page.

Note: When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. 
Do not overuse this method, as it prevents the user from accessing other parts of the page until the box is closed.

The prompt() method returns the input value if the user clicks "OK". If the user clicks OK without entering any text, an empty string is returned.If the user clicks "cancel" the method returns null.
*/
    



