//zomato api
//google api for maps
const data = {
    "destination_addresses": ["Mangaluru, Karnataka, India"],
    "origin_addresses": ["Bengaluru, Karnataka, India"],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "352 km",
                        "value": 351648
                    },
                    "duration": {
                        "text": "6 hours 50 mins",
                        "value": 24608
                    },
                    "duration_in_traffic": {
                        "text": "7 hours 3 mins",
                        "value": 25370
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}



// The distance between bangalore and mangalore is 353 kms and the time taken to travel is 6 hours 50 mins

const source = data.origin_addresses[0].split(', ')[0]
const destination = data.destination_addresses[0].split(', ')[0]
const distance = data.rows[0].elements[0].distance.text
const duration = data.rows[0].elements[0].duration.text


console.log(`The distance between ${source} and ${destination} is ${distance} and the time taken ${duration}`)

/* o/p
The distance between Bengaluru and Mangaluru is 352 km and the time taken 6 hours 50 mins
*/