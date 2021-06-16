const orderLists = document.querySelector('[data-order-lists]')

function Drink(name, sugar, ice) {
    this.name = name
    this.sugar = sugar
    this.ice = ice
}
Drink.prototype.price = function () {
    switch (this.name) {
        case 'Black Tea':
        case 'Oolone Tea':
        case 'Baozong Tea':
        case 'Green Tea':
            return 30
        case 'Bubble Milk Tea':
        case 'Black Tea Latte':
            return 50
        case 'Lemon Green':
        case 'Matcha Latte':
            return 55
        default:
            alert('No this Drink')
    }
}
function AlphaPos() { }
AlphaPos.prototype.getCheckedValue = function (inputName) {
    let selectOption = ''
    document.querySelectorAll(`[name=${inputName}]`).forEach(
        function (item) {
            if (item.checked) {
                selectOption = item.value
            }
        })
    return selectOption
}
AlphaPos.prototype.addDrink = function (drink) {
    let orderListsCard = `
<div class="card mb-3 bg-warning">
<div class="card-body pt-3 pr-3">
  <div class="text-right">
    <span data-alpha-pos="delete-drink">×</span>
  </div>
  <h6 class="card-title mb-1">${drink.name}</h6>
  <div class="card-text">${drink.ice}</div>
  <div class="card-text">${drink.sugar}</div>
</div>
<div class="card-footer text-right py-2">
  <div class="card-text text-muted">$ <span data-drink-price>${drink.price()}</span></div>
</div>
</div>
`
    orderLists.insertAdjacentHTML('afterbegin', orderListsCard)
}

// 所有選項節點
// 飲料
let allDrinkOptions = document.querySelectorAll('input[name="drink"]')
// console.log(allDrinkOptions)
allDrinkOptions.forEach(function (option) {
    if (option.checked) {
        console.log(`${option.value}`)
    }
})
// 甜度
let allSugar = document.querySelectorAll('input[name="sugar"]')
// console.log(allSugar)
allSugar.forEach(function (option) {
    if (option.checked) {
        console.log(`${option.value}`)
    }
})
// 冰塊
let allIce = document.querySelectorAll('input[name="ice"]')
// console.log(allIce)
allIce.forEach(function (option) {
    if (option.checked) {
        console.log(`${option.value}`)
    }
})

// let bubbleMilKTea = new Drink('Bubble Milk Tea', 'No Sugar', 'Less Ice')
// console.log(bubbleMilKTea)
// console.log(bubbleMilKTea.price())

// let blackTea = new Drink('Black Tea', 'No sugar', 'Less Ice')
// console.log(blackTea)
// console.log(blackTea.price())

// let lemonGreen = new Drink('Lemon Green Tea', 'No sugar', 'Less Ice')
// console.log(lemonGreen)
// console.log(lemonGreen.price())

// let oloneTea = new Drink('Oolone Tea', 'No sugar', 'Less Ice')
// console.log(oloneTea)
// console.log(oloneTea.price())


// const orderLists = document.querySelector('[data-order-lists]')
// AlphaPos.prototype.addDrink = function (drink) {
//     let orderListsHtml = `
//     <div class="card text-dark bg-warning mb-3">
//     <div class="card-body pt-3 pr-3">
//         <div class="text-right ">
//             <span data-alpha-pos="delete-drink">x</span>
//         </div>
//         <h5 class="card-title mb-1">${drinkName}</h5>
//         <p class="card-text">${ice}}</p>
//         <p class="card-text">${sugar}</p>
//     </div>
//     <div class="card-footer text-right py-2">
//         <div class="card-text text-muted">
//             $ <span data-drink-price>${drink.price()}</span>
//         </div>
//     </div>

// </div>
// <div class="text-right">
//     <button class="btn btn-warning" data-alpha-pos="checkout">checkout</button>
// </div>


//     `
//     orderLists.insertAdjacentHTML('afertbegin', orderListsHtml)



// }

const alphaPos = new AlphaPos()

const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]')
addDrinkButton.addEventListener('click', function () {
    const drinkName = alphaPos.getCheckedValue('drink')
    const ice = alphaPos.getCheckedValue('ice')
    const sugar = alphaPos.getCheckedValue('sugar')
    if (!drinkName) {
        alert('Please choose at least one item.')
        return
    }

    console.log(`${drinkName},${ice},${sugar}`)
    const drink = new Drink(drinkName, sugar, ice)
    console.log(drink)
    console.log(drink.price())


    alphaPos.addDrink(drink)

})