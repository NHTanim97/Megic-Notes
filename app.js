console.log("Welcome to Notes Taking Website");
showNotes();

// If user adds a note, add it to the local Storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);
    showNotes();
})


// Function show element localStorage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index){
        html += `
            <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index +1 }</h5>
                  <p class="card-text">${element}</p>
                  <button id = "${index}" onclick= "deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
           </div>
        `;
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length !== 0){
        notesElm.innerHTML = html;
    }else{
        notesElm.innerHTML = `Nothing to show !! Use "Add a Note" section above to add Notes.`;
    }
}


// Function to delete a notes
function deleteNotes(index){
  console.log('I am deleting', index);
  let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}



// search option
let searchTxt = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    
})