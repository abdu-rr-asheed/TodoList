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
    newli.className = "draggable";
    
    
    //Apend element
    newli.appendChild(newh5);
    newli.appendChild(newdesp);
    newli.appendChild(newdate);
    newli.appendChild(newdel);
    newdel.className = "del";
    newli.appendChild(newedit);
    newedit.className = "edit";

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

    //! Drag and Drop =================================================================

    const draggables = document.querySelectorAll('.draggable')
    const containers = document.querySelectorAll('.containerul')

    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
      // console.log(draggable.parentElement.id);
      if (draggable.parentElement.id == 'doingid') {
        todoArr[draggable.id].status = 'doingSt';
      }else if (draggable.parentElement.id == 'doneEid') {
        todoArr[draggable.id].status = 'doneSt';
      }else if (draggable.parentElement.id == 'todoid') {
        todoArr[draggable.id].status = 'todoSt';
      }
      draggable.classList.remove('dragging')
      })
    })

    containers.forEach(container => {
      container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
          container.appendChild(draggable)
        } else {
          container.insertBefore(draggable, afterElement)
        }
      })
    })

    function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element
    }

    //!=================================================================
    
  }

}

// Todo Add Button 
addbtn.addEventListener('click', addbutton);

function addbutton() {

  if (titleinput.value.trim() == '' || dateinput.value.trim() == '' ) {
    alert("Must Insert Title and Date");
  }
  
  var letters = /^[0-9a-zA-Z]+$/;
  if(titleinput.value.match(letters)){
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
      alert("Todo " + listTodo.todo + " is created for " + listTodo.date);
      refreshArr();
    }
  }
  else
  {
    alert('Please input alphanumeric characters only');
    titleinput.value = '';
    titleinput.focus();
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
    document.getElementById("stIDdt").style.display = "none";
  } else if (checkColumeid == "doingid") {
    document.getElementById("stIDto").style.display = "block";
    document.getElementById("stIDdp").style.display = "block";
    document.getElementById("stIDdt").style.display = "block";
  }
}

// Todo Edit model Button 

editbtn.addEventListener('click', editbutton);

function editbutton() {

      var checktitle = todoArr[checkid].todo;
      var checkDes = todoArr[checkid].Description;
      var checkdate = todoArr[checkid].date;
      var checkst = todoArr[checkid].status;
  
    if (titleEditnput.value.trim() == '' || dateEditnput.value.trim() == '' ) {
      alert("Must Insert Title and Date");
    }

    var letters = /^[0-9a-zA-Z]+$/;
  if(titleEditnput.value.match(letters)){
    if (titleEditnput.value.trim() !== '' && dateEditnput.value.trim() !== '') {
      
      
      todoArr[checkid].todo = titleEditnput.value;
      todoArr[checkid].Description = descriptionEditnput.value;
      todoArr[checkid].date = dateEditnput.value;
      todoArr[checkid].status = status.value;
      
      todoclass.innerHTML = '';
      doingclass.innerHTML = '';
      doneclass.innerHTML = '';
      refreshArr();

      if (todoArr[checkid].todo !== checktitle || todoArr[checkid].Description !== checkDes || todoArr[checkid].date !== checkdate || todoArr[checkid].status !== checkst) {
        alert("Successfully updated");
        
      }


    } 

  }
  else
  {
    alert('Please input alphanumeric characters only');
    titleEditnput.value = '';
    titleEditnput.focus();
  }
  

    
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
 
  
  // Todo Delete Button 
  function delbutton() {
    if (confirm("Are you sure you want to delete this todo?")) {
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