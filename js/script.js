//jquary
$( function() {
  $( ".todoclass" ).sortable();
  $( ".doingclass" ).sortable();
  $(".doneclass").sortable();
  // $( ".datetime" ).datepicker();
});


// Add input
let todoinput = document.querySelector(".Tdo");
let despinput = document.querySelector(".desp");
let dteinput = document.querySelector(".dte");

//* Add button
let addbtn = document.querySelector("#button-addon2");

// Edit input 
let TodoEditnput = document.querySelector("#editinput");
let despEditinput = document.querySelector("#editdis");
let dteEditinput = document.querySelector("#editdate");

//* Edit button
let editbtn = document.querySelector("#button-addon2add");

// Three Colums
let todoclass = document.querySelector(".todoclass")
let doingclass = document.querySelector(".doingclass")
let doneclass = document.querySelector(".doneclass")




// ! Parent Array (Todo)
let todoArr = [];

// ? Object Todo -Description - Date
let listTodo 

// Todo = Arrays Print To UI
refreshArr();
function refreshArr() {
  
  for (let i = todoArr.length-1 ; i >= 0; i--) {

    //Create element
    var newli = document.createElement('li');
    var newh5 = document.createElement('h5');
    var newdesp = document.createElement('p');
    var newdate = document.createElement('p');
    var newdel = document.createElement('button');
    var newedit = document.createElement('button');

    // li tag id
    newli.id = (i);
    
    //Apend element
    todoclass.appendChild(newli);
    newli.appendChild(newh5);
    newli.appendChild(newdesp);
    newli.appendChild(newdate);
    newli.appendChild(newdel);
    newli.appendChild(newedit);

    //Delete and Edit innerHtml
    newdel.innerHTML = '<i class="fa fa-times"></i>';
    newedit.innerHTML = '<i type="button" class="fa fa-pencil-square-o" data-toggle="modal" data-target="#exampleModalCenter2"> </i>';

    //Adding Array values to html tag
    newh5.innerHTML = todoArr[i].todo;
    newdesp.innerHTML = todoArr[i].Description;
    newdate.innerHTML = todoArr[i].date;

    //Delete Click icon Event 
    newdel.addEventListener('click', delbutton);

    //Edit Click icon Event 
    newedit.addEventListener('click', editIconbutton);
  }
  
}

// Todo Add Button 

addbtn.addEventListener('click', addbutton);

function addbutton() {
  if (todoinput.value !== '') {
    listTodo = {
      todo: "",
      Description: "",
      date: ""
    };
    
    listTodo.todo = todoinput.value;
    listTodo.Description = despinput.value;
    listTodo.date = dteinput.value;
    
    todoArr.push(listTodo)
    todoclass.innerHTML = '';
    todoinput.value = '';
    despinput.value = '';
    dteinput.value = '';
    refreshArr();
  }
}

// cheaking ID
var checkid;

// Todo Edit icon Button 

function editIconbutton(e) {

  checkid = this.parentElement.id;
  TodoEditnput.value = todoArr[checkid].todo;
  despEditinput.value = todoArr[checkid].Description;
  dteEditinput.value = todoArr[checkid].date;

}

// Todo Edit model Button 

editbtn.addEventListener('click', editbutton);

  function editbutton() {

  console.log(checkid);
  todoArr[checkid].todo = TodoEditnput.value;
  todoArr[checkid].Description = despEditinput.value;
  todoArr[checkid].date = dteEditinput.value;
  
  todoclass.innerHTML = '';
  refreshArr();

}

// Todo Delete Button 
function delbutton() {
  let parent = this.parentElement;
  todoArr.splice(parent.id, 1);

  todoclass.innerHTML = '';
  refreshArr();
}




