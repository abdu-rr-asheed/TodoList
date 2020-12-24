function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

// Add input
let titleinput = document.querySelector(".Tdo");
let descriptioninput = document.querySelector(".desp");
let dateinput = document.querySelector(".dte");

//* Add button
let addbtn = document.querySelector("#button-addon2");

// Edit input 
let titleEditnput = document.querySelector("#editinput");
let descriptionEditnput = document.querySelector("#editdis");
let dateEditnput = document.querySelector("#editdate");

//* Edit button
let editbtn = document.querySelector("#button-addon2add");

//* Title Close button
let titleclose = document.querySelector(".titleclose");

//* Status Drop down button
let status = document.querySelector(".status");

// Three Colums
let todoclass = document.querySelector(".todoclass")
let doingclass = document.querySelector(".doingclass")
let doneclass = document.querySelector(".doneclass")

// ! Parent Array (Todo)
const todoArr = [];

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
    newli.draggable = true;
    newli.className = "dragls";
    // newli.addEventListener("dragstart", drag);
    
    //Apend element
    newli.appendChild(newh5);
    newli.appendChild(newdesp);
    newli.appendChild(newdate);
    newli.appendChild(newdel);
    newli.appendChild(newedit);

    //Delete and Edit innerHtml
    newdel.innerHTML = '<i class="fa fa-times"></i>';
    newedit.innerHTML = '<i type="button" class="fa fa-pencil-square-o" data-toggle="modal" data-target="#exampleModalCenter2"> </i>';

    // status Checking
    if (todoArr[i].status == "doneSt") {
      doneclass.appendChild(newli);

    }else if (todoArr[i].status == "doingSt") {
      doingclass.appendChild(newli);
    } else {
      todoclass.appendChild(newli);
    }

    //Adding Array values to html tag
    newh5.innerHTML = todoArr[i].todo;
    newdesp.innerHTML = todoArr[i].Description;
    newdate.innerHTML = "Date : " + todoArr[i].date;

    //Delete Click icon Event 
    newdel.addEventListener('click', delbutton);

    //Edit Click icon Event 
    newedit.addEventListener('click', editIconbutton);
  }
  
}

// Todo Add Button 
addbtn.addEventListener('click', addbutton);

function addbutton() {

  if (titleinput.value.trim() == '' || dateinput.value.trim() == '' ) {
    alert("Must Insert Title and Date");
  }
  if (titleinput.value.trim() !== '' && dateinput.value.trim() !== '' ) {
    listTodo = {
      todo: "",
      Description: "",
      date: "",
      status: "todoSt"
    };
    
    listTodo.todo = titleinput.value;
    listTodo.Description = descriptioninput.value;
    listTodo.date = dateinput.value;
    
    todoArr.push(listTodo)
    todoclass.innerHTML = '';
    doingclass.innerHTML = '';
    doneclass.innerHTML = '';
    titleinput.value = '';
    descriptioninput.value = '';
    dateinput.value = '';
    titleinput.focus();
    refreshArr();
  }
}

// cheaking ID
var checkid;


// Todo Edit icon Button 

function editIconbutton() {

  checkid = this.parentElement.id;

  titleEditnput.value = todoArr[checkid].todo;
  descriptionEditnput.value = todoArr[checkid].Description;
  dateEditnput.value = todoArr[checkid].date;
  status.value = todoArr[checkid].status;
  

  var checkColumeid = this.parentElement.parentElement.id;

  if (checkColumeid == "todoid") {
    document.getElementById("stIDto").style.display = "none";
    document.getElementById("stIDdt").style.display = "none";
  } else if (checkColumeid == "doingid") {
    document.getElementById("stIDto").style.display = "block";
    document.getElementById("stIDdt").style.display = "block";
  }
}

// Todo Edit model Button 

editbtn.addEventListener('click', editbutton);

function editbutton() {
  
  if (titleEditnput.value.trim() == '' || dateEditnput.value.trim() == '' ) {
    alert("Must Insert Title and Date");
  }
  if (titleEditnput.value.trim() !== '' && dateEditnput.value.trim() !== '') {
    todoArr[checkid].todo = titleEditnput.value;
    todoArr[checkid].Description = descriptionEditnput.value;
    todoArr[checkid].date = dateEditnput.value;
    todoArr[checkid].status = status.value;
    
    todoclass.innerHTML = '';
    doingclass.innerHTML = '';
    doneclass.innerHTML = '';
    refreshArr();

    alert("updated");

    if (todoArr[checkid].status == "todoSt") {
      document.getElementById("stIDto").style.display = "block";
      document.getElementById("stIDdp").style.display = "block";
      document.getElementById("stIDdt").style.display = "none";
    } else if (todoArr[checkid].status == "doingSt") {
      document.getElementById("stIDto").style.display = "block";
      document.getElementById("stIDdp").style.display = "block";
      document.getElementById("stIDdt").style.display = "block";
    } else if (todoArr[checkid].status == "doneSt") {
      document.getElementById("stIDto").style.display = "block";
      document.getElementById("stIDdp").style.display = "block";
      document.getElementById("stIDdt").style.display = "none";
    }

  }
    
    
  }
  
  // Todo Delete Button 
  function delbutton() {
    if (confirm("Are You Delete your Task")) {
      let parent = this.parentElement;
      todoArr.splice(parent.id, 1);
      
      todoclass.innerHTML = '';
      doingclass.innerHTML = '';
      doneclass.innerHTML = '';
      refreshArr();
    }
  }
  
titleclose.addEventListener('click', titClose);
  
function titClose() {
  titleinput.value = '';
  descriptioninput.value = '';
  dateinput.value = '';
}