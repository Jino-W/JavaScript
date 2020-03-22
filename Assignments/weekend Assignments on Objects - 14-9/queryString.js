function toQueryString(obj) {
    const result = [];
    for (const key in obj) {
        if (typeof obj[key] == 'object') {
            obj[key].forEach((n) => {
                result.push(`${key}=${n}`)
                console.log(result)
            })
        } else {
            result.push(`${key}=${obj[key]}`)
            console.log(result)
        }
    }
    console.log(result.join('&'))
}


toQueryString({}) // ""

toQueryString({"bar": [ 2, 3], "foo": 1 }) // "bar=2&bar=3&foo=1"

toQueryString({name: "Elie", "nums": [1,2,3,4]}) // "name=Elie&nums=1&nums=2&nums=3&nums=4"