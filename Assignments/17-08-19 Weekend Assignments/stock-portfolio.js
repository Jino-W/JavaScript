//M1
function totalPortfolioValue(ticker, portfolio){
    //ticker object
    const objTick ={};
    for(let i=0;i<ticker.length;){
    objTick[ticker[i]] = ticker[i+1];
    i+=2;
    }
    console.log(objTick);

    //portfolio object
    const objPort ={};
    for(let j=0;j<portfolio.length;j++){
    objPort[portfolio[j][0]] = portfolio[j][1];
    }
    console.log(objPort);

    //result
    const result ={};
    let total = 0;
    for(const key in objPort){
        if (objTick[key]) {
            result[key] = objPort[key] * objTick[key];
            total += result[key];
        } else {
            result[key] = 'company doesnot exist'
        }
    }
    result['total'] = total;
    return result;
}

const ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
const portfolio = [['XYZ', 20], ['BBB', 10],['xxx', 20]];

console.log(totalPortfolioValue(ticker, portfolio));


/*
{ ABC: 10, XYZ: 200, BBB: 5 }
{ XYZ: 20, BBB: 10 }
{ XYZ: 4000, BBB: 50, total: 4050 }
*/

//---------------------------------------------------


var ticker1 = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
var portfolio_list1 = [['XYZ', 20], ['BBB', 10]];

function portfolio1(ticker,portfolio){
    let result={}
    let total=0
    portfolio.forEach(item => {
        let price=ticker[ticker.indexOf(item[0])+1]
        total+=item[1]*price
        result[item[0]]=item[1]*price
    });
    result['total']=total
    return result    
}

console.log(portfolio1(ticker1, portfolio_list1))                //{ XYZ: 4000, BBB: 50, total: 4050 }





