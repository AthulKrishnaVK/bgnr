const notesContainer =document.querySelector(".notes-container");
const createBtn =document.querySelector(".btn");
let notes =document.querySelectorAll(".input");
 
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}

createBtn.addEventListener("click",()=>{
    let inputBox =document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener("click", function(e){
    const clickedElement = e.target;
    if(e.target.tagName ==="IMG"){
        // e.target.parentElement.remove();
        clickedElement.parentElement.remove();
        updateStorage();
    }
else if(e.target.tagName ==="p" && clickedElement.classList.contains("input")){
    // notes =document.querySelectorAll(".input");
    //          notes.forEach(nt =>{
    //     nt.onkeyup=function(){
    //         updateStorage();
    //     }
    // });
    clickedElement.onkeyup = function () {
        updateStorage();
    };
}
});

document.addEventListener("keydown", event =>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})