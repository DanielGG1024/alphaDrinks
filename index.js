
function Drink(name, sugar, ice) {
    this.name = name
    this.sugar = sugar
    this.ice = ice
}
Drink.prototype.price =function(){
    switch(this.name){
        case 'Black Tea':
        case 'Oolone Tea':
        case 'Baozong Tea':
        case 'Green Tea':
            return 30
        case 'Bubble Milk Tea':
        case 'Black Tea Latte':
            return 50
        case 'Lemon Green Tea':
        case 'Matcha Latte':
            return 55
        default:
            alert('No this Drink')   
    }
}

let bubbleMilKTea = new Drink('Bubble Milk Tea','No Sugar','Less Ice')
console.log(bubbleMilKTea)
console.log(bubbleMilKTea.price())

let blackTea = new Drink('Black Tea','No sugar','Less Ice')
console.log(blackTea)
console.log(blackTea.price())

let lemonGreen = new Drink('Lemon Green Tea','No sugar','Less Ice')
console.log(lemonGreen)
console.log(lemonGreen.price())

let oloneTea = new Drink('Oolone Tea','No sugar','Less Ice')
console.log(oloneTea)
console.log(oloneTea.price())

