//Object.create() ->  used to create a new object and link it to the prototype of an existing object.

const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};
console.log(job) //{ position: 'cashier',type: 'hourly',isAvailable: true,showDetails: [Function: showDetails] }

const barista = Object.create(job);   //to pass properties of job object to barista object
barista.position = "barista";         //position = "barista"
barista.location = 'chennai';
barista.showDetails();                //The barista position is hourly and is accepting applications.
console.log(job)       //{ position: 'cashier',type: 'hourly',isAvailable: true,showDetails: [Function: showDetails] }
console.log(barista) 
//---------------------------------------------------

//Objects.keys()

Object.keys(job).forEach(key => {
    let value = job[key];

    console.log(`${key}: ${value}`);
});

/*
position: cashier
type: hourly
isAvailable: true
showDetails: showDetails() {
    const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";
    console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
}
*/

for(const key of Object.keys(job)) {
    let value = job[key];

    console.log(`${key}: ${value}`);
};

/*
position: cashier
type: hourly
isAvailable: true
showDetails: showDetails() {
    const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";
    console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
}
*/