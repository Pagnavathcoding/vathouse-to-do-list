let input = document.getElementById("input");
let button = document.getElementById("btn");
let items = document.getElementById("items");
let error = document.getElementById("error");
let empty = document.getElementById("empty");
// keypress listener
input.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if (input.value == '') {
            error.innerHTML = "Please Input Item!"
        }
        else {
            error.innerHTML = '';
            let li = document.createElement("li");
            let node = document.createTextNode(input.value);
            let remove = document.createElement("button");
            remove.classList.add("btn-remove");
            remove.innerHTML = `<img src="./images/bin.svg"/>`;
            li.appendChild(node);
            li.appendChild(remove);
            items.appendChild(li);
            input.value = '';
            // remove button click
            remove.addEventListener("click", () => {
                setTimeout(() => {
                    li.style.display = "none";
                }, 300);
                li.style.backgroundColor = "#f94348";
                li.classList.add("remove-list");
            })
            // click on each list
            li.addEventListener("click", () => {
                li.style.backgroundColor = '#4acb8ba1';
            })
        }
    }
})
// button listener
button.addEventListener("click", () => {
    if (input.value == '') {
        error.innerHTML = "Please Input Item!"
    }
    else {
        error.innerHTML = '';
        let li = document.createElement("li");
        let node = document.createTextNode(input.value);
        let remove = document.createElement("button");
        remove.classList.add("btn-remove");
        remove.innerHTML = `<img src="./images/bin.svg"/>`;
        li.appendChild(node);
        li.appendChild(remove);
        items.appendChild(li);
        input.value = '';
        // click on remove button
        remove.addEventListener("click", () => {
            setTimeout(() => {
                li.style.display = "none";
            }, 300);
            li.style.backgroundColor = "#f94348";
            li.classList.add("remove-list");
        })
        // click on each list
        li.addEventListener("click", () => {
            li.style.backgroundColor = '#4acb8ba1';
        })
    }
})