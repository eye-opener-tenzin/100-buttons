// WRITE YOUR CODE IN HERE:
const btn = document.querySelector('#container');
for(let i = 1; i <= 100; i++) {
 let button = document.createElement("button");
    btn.appendChild(button);
    button.innerText = "Hey"
}

