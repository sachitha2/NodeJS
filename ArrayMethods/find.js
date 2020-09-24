const items = [
    {name:'Bike',   price:100},
    {name:'TV',   price:10},
    {name:'Car',   price:80},
    {name:'Van',   price:700},
    {name:'Motor',   price:50},
    {name:'Jeep',   price:70},
    {name:'Pot',   price:90},
]


const foundItem = items.find((item) => {
    return item.name === 'Jeep';
})



console.log(foundItem);