
// constructor function
function Drink(name, sugar, ice) {
    this.name = name
    this.sugar = sugar
    this.ice = ice
}
// 建立price方法 用名稱判斷價格
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
// constructor function??
function AlphaPos() { }

// 新增一個 回傳被選取選項的方法
// 輸入值為input name 中的歸類(ex. drink 為所有的飲料選項
// 當此方法輸入值為drink時 使用DOM選到所有飲料節點,辨識何者checked
// 為true)
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
// 取得所有資訊後 顯示在點餐區
AlphaPos.prototype.addDrink = function (drink) {   
  let orderListsCard = 
`
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
//   節點       加入方法             位子           內容
  orderLists.insertAdjacentHTML('afterbegin', orderListsCard)
}

AlphaPos.prototype.deleteDrink = function (target) {
    target.remove()
}

// 回傳已點餐的總共金額
AlphaPos.prototype.checkout = function () {
    let totalAmount = 0
    document.querySelectorAll('[data-drink-price]').forEach(function (drink) {
        totalAmount += Number(drink.textContent)
    })
    return totalAmount
}

AlphaPos.prototype.clearOrder = function (target) {
    target.querySelectorAll('.card').forEach(function (card) {
        card.remove()
    })
}

const alphaPos = new AlphaPos()


const orderLists = document.querySelector('[data-order-lists]')
const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]')
const checkoutButton = document.querySelector('[data-alpha-pos="checkout"]')

// 監聽區
// 新增鈕
addDrinkButton.addEventListener('click', function () {
    // 透過input name 分類[name="${inputName}"]
    // 分別取出checked 的值
    const drinkName = alphaPos.getCheckedValue('drink')
    const ice = alphaPos.getCheckedValue('ice')
    const sugar = alphaPos.getCheckedValue('sugar')
    // 如果飲料名稱為空就return
    if (!drinkName) {
        alert('Please choose at least one item.')
        return
    }
    // 將取得的值 使用結構函式帶入
    const drink = new Drink(drinkName, sugar, ice)
    //並渲染在左側顯示已點餐區
    alphaPos.addDrink(drink)
})

// 刪除鈕
orderLists.addEventListener('click', function (event) {
    let target = event.target
    // matches 回傳布林值 點到X就回傳ture 
    let isDeleteButton = target.matches('[data-alpha-pos="delete-drink"]')
    if (!isDeleteButton) {
        return
    }
    alphaPos.deleteDrink(target.parentElement.parentElement.parentElement)
})

// 送出鈕
// 總金額alter 清除
checkoutButton.addEventListener('click', function () {
    alert(`Total amount of drinks:$ ${alphaPos.checkout()}`)
    alphaPos.clearOrder(orderLists)
})