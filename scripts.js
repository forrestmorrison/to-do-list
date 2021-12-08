let list;
let listItem;
let listId = 0;

function setValueOf_listItem(input) {
    listItem = input;
    console.log(input);
  }

function addItem() {
    let newObject = document.createElement("h3");
    let text = document.createTextNode(listItem);
    newObject.appendChild(text);
    listId = listId + 1;
    newObject.id = listId;
    document.getElementById("list").appendChild(newObject);
    newObject.onclick = removeItem(newObject);
   }
   
function removeItem(toDoItem) {
    var newObject = document.getElementById(toDoItem.id);
    console.log(removeItem);
//    removeItem.onclick.remove();
   }



/* 
for each new element created you can in a dynamic way add a onclick listener 
Forrest had it in his code newObject.onclick = myFunction

function createNewObject() {
    let newObject = document.createElement("H3")
    newObject.id = 5;
    newObject.onclick = doThing(newObject);
   }

function doThing(ele){
  console.log(ele.id);
}

then remove by id

*/