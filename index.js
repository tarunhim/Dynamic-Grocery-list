let btn = document.getElementById("add");
let table = document.getElementById("table");
let total = document.getElementById("grand-total");
console.log(table.innerHTML);
// const itarr = [];
// const parr = [];
btn.addEventListener("click", function() {
 let item = document.querySelector("#item-name-input").value;
 document.querySelector("#item-name-input").value = "";
 let price = document.querySelector("#item-price-input").value;
 document.querySelector("#item-price-input").value = "";
if(item != "" && price != "")
insertItem(item,price);
// render();
});
let count = 1;
let total1 = 0;
function insertItem(item, price) {
    total1 = total1 + Number(price);
    total.textContent = "Total = "+total1;
// itarr.push(item);
// parr.push(price);
table.innerHTML += `<tr>
             <td>${count}</td>
            <td data-ns-test="item-name">${item}</td>
            <td data-ns-test="item-price">${price}</td>
        </tr>`
        count++;
}
// function render() {
//     for(let i = 0; i < itarr.length; ++i) {
//         console.log(table);
    
//         console.log(table.innerHTML);
//     }
// }