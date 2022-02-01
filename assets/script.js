// First, tell us your name
let yourName = "Enrique Dali Velasco" // HINT: Replace this with your own name!

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Total cookies

// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
// selecting the minus-gb element
const gbMinusBtn = document.querySelector('#minus-gb')

//function to update grand total
function updateTotal(displayTotal) {
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayTotal
}
//Function to update gingerbread quantity
function updateGb(displayGb) {
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayGb
}
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++ , total++
    updateGb(gb)
    updateTotal(total)
})
// Event listener for clicks on "-" gb cookies button
gbMinusBtn.addEventListener('click', function() {
    if (gb > 0) {
    gb--, total--
    }
    updateGb(gb)
    updateTotal(total)
})

// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc')
// selecting the minus-cc element
const ccMinusBtn = document.querySelector('#minus-cc')

//Function to update cc quantity
function updateCc(displayCc) {
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayCc
}

// Event listener for clicks on the "+" button for cc cookies
ccPlusBtn.addEventListener('click', function() {
    cc++, total++
    updateCc(cc)
    updateTotal(total)
})
// Event listener for clicks on "-" cc cookies button
ccMinusBtn.addEventListener('click', function() {
    if (cc > 0) {
    cc--, total--
    }
    updateCc(cc)
    updateTotal(total)
})

// selecting the element with an id of add-sugar
const sugarPlusBtn = document.querySelector('#add-sugar')
// selecting the minus-sugar element
const sugarMinusBtn = document.querySelector('#minus-sugar')

//Function to update sugar quantity
function updateSugar(displaySugar) {
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displaySugar
}

// Event listener for clicks on the "+" button for sugar cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar++, total++
    updateSugar(sugar)
    updateTotal(total)
})
// Event listener for clicks on "-" sugar cookies button
sugarMinusBtn.addEventListener('click', function() {
    if (sugar > 0) {
    sugar--, total--
    }
    updateSugar(sugar)
    updateTotal(total)
})