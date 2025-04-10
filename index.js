import { menuArray } from "./data.js"

const ordersEl = document.getElementById("orders")
const footerEl = document.getElementById("footer")
const modalEl = document.getElementById("modal")
const inputName = document.getElementById("input-name")
const modalForm = document.getElementById("modal-form")
let totalPrice = 0



document.addEventListener("click", function (e) {
    menuArray.map((item) => {
        if (e.target.id === item.name) {
            handleClick(e.target.id)
        }
    })
    if (e.target.id === "remove") {
        e.target.parentElement.parentElement.remove()
        if (ordersEl.childElementCount === 0) {
            footerEl.classList.add("invisible")
        }
    }

    if (e.target.id === "complete-btn") {
        modalEl.classList.remove("invisible")
    }
})

function render() {
    const itemsEl = document.getElementById("items")
    let itemsHtml = menuArray.map((item) => {
        return `
		<div class="item">
            <img class="item-img" src="images/${item.image}" alt="${item.name} logo">
            <div class="info">
                <h2 class="h2">${item.name}</h2>
                <p class="info-p">${item.ingredients}</p>
                <h3 class="info-price">$${item.price}</h3>
            </div>
            <button class="item-btn"><img src="images/add-btn.svg" id="${item.name}" alt="Add Button"></button>
        </div>
		`
    }).join("")
    itemsEl.innerHTML = itemsHtml
}

function handleClick(orderId) {
    const totalPriceEl = document.getElementById("total-price")
    footerEl.classList.remove("invisible")

    ordersEl.innerHTML += menuArray.map((item) => {
        if (item.name === orderId) {
            totalPrice += item.price
            return `
    <li class="order">
                <h2 class="order-h2 h2">${item.name} <span role="button" id="remove" class="remove">remove</span></h2>
                <h3 class="info-price">$${item.price}</h3>
            </li>
    `
        }
    }).join("")
    totalPriceEl.innerHTML = "$" + totalPrice
    render()
}

modalForm.addEventListener("submit", function (e) {
    e.preventDefault()
    modalEl.remove()
    footerEl.remove()
    const congEl = document.querySelector(".cong")
    congEl.classList.remove("invisible")
    const modalFormData = new FormData(modalForm)
    const name = modalFormData.get('name')
    congEl.innerHTML = `
    <p class="cong-p">Thanks, ${name}! Your order is on its way!</p>
    `
})

render()