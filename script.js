var popupoverlay = document.querySelector(".popup-overlay")
var popup = document.querySelector(".popup")
var addpopup = document.getElementById("add-popup-button")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popup.style.display = "block"
})

var cancel = document.getElementById("cancel-popup")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popup.style.display = "none"
})

//select container
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")
 
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdescription.value}</p>
        <button onclick = "deleteitem(event)">Delete</button>
        `
    container.append(div)
    popupoverlay.style.display = "none"
    popup.style.display = "none"
})

