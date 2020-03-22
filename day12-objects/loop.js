const article = {
    Title : 'Global Warming',
    Body : 'With the approach of Industrial revolutions, the use of chemicals in the factories has increased to a dangerous amount. Along with it, deforestation due to industrial or economic purposes and the excess burning of fossil fuels like natural gas, oil, and coal, has increased the concentration of atmospheric carbon dioxide from 315 ppmv (part per million by volume) to about 363 ppmv since 1958. These are some of the primary reasons for which the heat gets trapped in the atmosphere thus causing global warming.',
    PublishDate: new Date(),
    categories: ['WarmerClimate', 'TheRiseOfSeaLevel']
};
console.log(article.PublishDate);  //2019-08-09T08:22:55.616Z


//whenever we assigned a variable in the property name, we can access the keys/object only with square brackets, but not with dot operator.
//square brackets always look for a variable
const propName ='Title';
console.log(article.propName);         //undefined
console.log(article[propName]);        //Global Warming   ->here propName is a variable name


//for in
for (const key in article){
    console.log(key, article[key]);              //here, key is also a variable name so that we 
}

//we can use for loop and forEach

//forEach()
Object.keys(article).forEach(function(key){
    console.log(key, article[key]);
})

/*
Global Warming
Title Global Warming
Body With the approach of Industrial revolutions, the use of chemicals in the factories has increased to a dangerous amount. Along with it, deforestation due to industrial or economic purposes and the excess burning of fossil fuels like natural gas, oil, and coal, has increased the concentration of atmospheric carbon dioxide from 315 ppmv (part per million by volume) to about 363 ppmv since 1958. These are some of the primary reasons for which the heat gets trapped in the atmosphere thus causing global warming.
PublishDate 2019-08-09T08:22:55.616Z
categories [ 'WarmerClimate', 'TheRiseOfSeaLevel' ]
*/