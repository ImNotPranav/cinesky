var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
var addbtn=document.getElementById("add-popup-box")
let editbtns=document.querySelectorAll(".edit-btn")
addbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
editbtns.forEach(function(editbtn){
    editbtn.addEventListener("click",function(){
        popupoverlay.style.display="block"
        popupbox.style.display="block"
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
// var container=document.querySelector(".container")
// var addbook=document.getElementById("add-book")
// var book_title_input=document.getElementById("book-title-ip")
// var book_author_input=document.getElementById("book-author-ip")
// var book_description=document.getElementById("book-description")
// container.addEventListener("click", function (e) {
//   if (e.target.classList.contains("delete-btn")) {
//     e.target.parentElement.remove();
//   }
// });
// addbook.addEventListener("click",function(event){
//     event.preventDefault()
//     if(!book_title_input && !book_author_input && !book_description)
//       alert("Please fill all the details!")
//     var newbk=document.createElement("div")
//     newbk.classList.add("book-container")
//     newbk.innerHTML=`<h2>${book_title_input.value}</h2>
//             <h5>${book_author_input.value}</h5>
//             <p>${book_description.value}</p>
//             <button class="delete-btn">Delete</button>`;
//     container.appendChild(newbk)
//     popupoverlay.style.display="none"
//     popupbox.style.display="none"
// })
