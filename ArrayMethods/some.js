const items = [
    {name:'Bike',   price:100},
    {name:'TV',   price:10},
    {name:'Car',   price:80},
    {name:'Van',   price:700},
    {name:'Motor',   price:50},
    {name:'Jeep',   price:70},
    {name:'Pot',   price:90},
]

const hasInExpensiveItems = items.some((item) => {
    return item.price <= 100;
})


console.log(hasInExpensiveItems);