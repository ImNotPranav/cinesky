var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addbtn=document.getElementById("add-popup-box")
let editbtns=document.querySelectorAll(".edit-btn")
addbtn.addEventListener("click",function(){
    document.getElementById("pb-head").innerText="Add Movie"
    popupoverlay.style.display="block"
    popupbox.style.display="block"
    document.getElementById("book-title-ip").value = "";
    document.getElementById("book-author-ip").value = "";
    document.getElementById("book-description").value = "";
    document.getElementById("add-or-edit-btn").innerText="ADD"
})
editbtns.forEach(function(editbtn){
    editbtn.addEventListener("click",function(){
        popupoverlay.style.display="block"
        popupbox.style.display="block"
        document.getElementById("pb-head").innerText="Edit Movie"
        let card=this.closest(".book-container")
        let title=card.querySelector("h2").innerText
        let author=card.querySelector("h5").innerText
        let desc=card.querySelector("p").innerText
        document.getElementById("book-title-ip").value = title;
        document.getElementById("book-author-ip").value = author;
        document.getElementById("book-description").value = desc;
        form=document.getElementById("add-book-form")
        form.action=`edit_book/${editbtn.dataset.id}`
        document.getElementById("add-or-edit-btn").innerText="UPDATE"
    })
})
var cancelbtn=document.getElementById("cancel-book")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
