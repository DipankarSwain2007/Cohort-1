
//TYPE1
// let ele = document.getElementById("phela")
// console.log(ele)
// ele.innerText = "hii"


//shows html collection or the array
//TYPE2  HTMLCOLLECTION
// let element = document.getElementsByClassName("phela")
// console.log(element)
// console.log(element[0])
// console.log(typeof element)


// let element = document.getElementsByClassName("phela")
// for(let i = 0;i<element.length;i++){
//     console.log(element[i].innerText);
// }

// for(ele of element){
//     console.log(ele.innerText)
// }

//TYPE3 HTMLCOLLECTION
// let tag = document.getElementsByTagName('h1')
// for(let i = 0;i<tag.length;i++){
//     console.log(tag[i].innerText)

// }

//TYPE4
//let  q = document.querySelector("h1")
// let  q = document.querySelectorAll("h1")
// console.log(q)
// for(ele of q){
//     console.log(ele.innerText)
// }

// console.log(Element.textContent)


//28.03.26
const items = document.querySelectorAll(".item")
const containers = document.querySelectorAll(".container")

items.forEach((item) => {
    item.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id)

         setTimeout(() => {item.classList.add("dragging")},0)
    })
});

//allowing drop
containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault()
    });

    container.addEventListener("dragenter", (e) => {
        e.preventDefault()
        container.classList.add("hover")
    });
});

//dropping items
containers.forEach((container) => {
    container.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const item = document.getElementById(id);
        container.appendChild(item);
        item.classList.remove("dragging")
        containers.classList.remove("hover");
    });
});