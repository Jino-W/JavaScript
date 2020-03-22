//string concatination

function prependToString(str1, str2) {
    if (str1.length == 0) {        //if(str1='')
        return `${str2}`
    } else if (str2.length == 0) {        //if(str2='')
        return `${str1}`
    } else {
        return `${str2} ${str1}`        
    }
}


//print => str2 + ' ' + str1
prependToString('awesome', 'very') // 'very awesome'
prependToString('world', 'hello ') // 'hello world'

//if(str1 = ''(i.e, empty string))  => only print str2
prependToString('', 'hai') // 'hai'

//if(str2 = '')  => only print str1
prependToString('nothing', '') // 'nothing'