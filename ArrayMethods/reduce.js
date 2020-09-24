const items = [
    {name:'Bike',   price:100},
    {name:'TV',   price:10},
    {name:'Car',   price:80},
    {name:'Van',   price:700},
    {name:'Motor',   price:50},
    {name:'Jeep',   price:70},
    {name:'Pot',   price:90},
]

const total = items.reduce((currentTotal,item) => {
    return item.price + currentTotal
},0)


console.log(total);