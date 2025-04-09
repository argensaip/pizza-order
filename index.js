import { menuArray } from "/data.js"

document.addEventListener("click", function (e) {
    if (e.target.id.includes("pizza")) {
        console.log(e.target.id)
        handleClick(e.target.id)
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
    const footerEl = document.getElementById("footer")
    const ordersEl = document.getElementById("orders")
    footerEl.classList.toggle("invisible")
    console.log(orderId)

    if (menuArray.name === orderId) {
        ordersEl.innerHTML = `
    <li class="order">
                <h2 class="order-h2 h2">${orderId} <span role="button" id="remove" class="remove">remove</span></h2>
                <h3 class="info-price">$${this.price}</h3>
            </li>
    `

    }
}

render()