// input felds & buttons
  let todoHead = document.querySelector('.Tdo');
  let tododis = document.querySelector('.desp');
  let tododte = document.querySelector('.dte');
  let addbtn = document.querySelector('#button-addon2');
  let Editbtn = document.querySelector('#button-addon2add');
    


addbtn.addEventListener("click", addList);
let todoArr = [];
function addList() {
  
  // Three colums
  var todoclass = document.querySelector('.todoclass');
  var doingclass = document.querySelector('.doingclass');
  var Done = document.querySelector('.doneclass');

  if(todoHead.value !== ''){

    // create an Object
    var listTodo = 
      { 
        todo:"",
        description:"",
        date:""
      };
        
    // textBox Values Assign to Array
    listTodo.todo = todoHead.value;
    listTodo.description = tododis.value;
    listTodo.date = tododte.value;
      
    // create Html tag
    var newli = document.createElement('li');
    var newh5 = document.createElement('h5');
    var newdesp = document.createElement('p')
    var newdate = document.createElement('p');
    var newdel = document.createElement('button');
    var newedit = document.createElement('button');
    // var newdone = document.createElement('button');

    //button innerhtml
    newdel.innerHTML = '<i class="fa fa-times"></i>';
    // newedit.innerHTML = '<i class="fa fa-spinner"></i>';
    // newdone.innerHTML = '<i class="fa fa-check"></i>';
    newedit.innerHTML = '<i type="button" class="fa fa-pencil-square-o" data-toggle="modal" data-target="#exampleModalCenter2"> </i>';

    // Appendchild to colum Todo
    todoclass.appendChild(newli);

    // newli Appendchild to Todo , description , Date
    newli.appendChild(newh5);
    newli.appendChild(newdesp);
    newli.appendChild(newdate);
    // newli.appendChild(newdone);
    newli.appendChild(newdel);
    newli.appendChild(newedit);
    

    //value Assingn
    
    

    //Add todoArr
    todoArr.push(listTodo);
    

    // clear TextBox
    todoHead.value = '';
    tododis.value = '';
    tododte.value = '';

    newli.id = (todoArr.length-1);

    //delete Button
    newdel.addEventListener('click',function(){

      var parent = this.parentElement;
      parent.remove();
    })
    

    newh5.innerHTML = listTodo.todo;
    newdesp.innerHTML = listTodo.description;
    newdate.innerHTML = listTodo.date;

    // console.log(todoArr[]
  }
  newedit.addEventListener('click',function(){

    let editHead = document.querySelector('#editinput');
    let editdis = document.querySelector('#editdis');
    let editdte = document.querySelector('#editdate');

    var parent2 = this.parentElement;
    // console.log(todoArr[parent2.id].todo)
    
    editHead.value = todoArr[parent2.id].todo
    editdis.value = todoArr[parent2.id].description
    editdte.value = todoArr[parent2.id].date

    Editbtn.addEventListener('click' ,function(){

      todoArr[parent2.id].todo = editHead.value
      todoArr[parent2.id].description = editdis.value
      todoArr[parent2.id].date = editdte.value

      console.log(todoArr[parent2.id].todo);
      console.log(todoArr[parent2.id].description)
      console.log(todoArr[parent2.id].date);

      newh5.innerHTML = todoArr[parent2.id].todo;
      newdesp.innerHTML = todoArr[parent2.id].description;
      newdate.innerHTML = todoArr[parent2.id].date;

      // parent2.remove();
    

     

      



      
      
    })



    


    
  })

}


  

 

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //! $('#myModal').on('shown.bs.modal', function () {
  //!   $('#myInput').trigger('focus')
  //! })


  // var tdo = document.querySelector('.Tdo');
  // var desp = document.querySelector('.desp');
  // var dte = document.querySelector('.dte');
  // var btn = document.querySelector('#button-addon2');
  // var btnEdit = document.querySelector('#button-addon2add');

  // btn.addEventListener('click', addList);
  
  
  
  // function addList(e){
    

  //   var notCompleted = document.querySelector('.notCompleted');
  //   var Completed = document.querySelector('.completed');
  //   var Done = document.querySelector('.done');
  //   var status = document.querySelector('#exampleFormControlSelect1');
    
    //! var popLi = document.createElement('li');
    // var newLi = document.createElement('li');
    // var newp = document.createElement('p');
    // var newpd = document.createElement('p');
    // var checkbtn = document.createElement('button');
    // var delbtn = document.createElement('button');
    //! var dn = document.createElement('button');
    // var pop = document.createElement('button');
    // var h1 = document.createElement('h5');


    

    //! checkbtn.innerHTML = '<i class="fa fa-spinner"></i>';
    // pop.innerHTML = '<i type="button" class="fa fa-pencil-square-o" data-toggle="modal" data-target="#exampleModalCenter2"> </i>';
    //! pop.innerHTML = '<i class="fa fa-pencil-square-o"> </i>';
    // delbtn.innerHTML = '<i class="fa fa-times"></i>';
    //! dn.innerHTML = '<i class="fa fa-check"></i>';

    // if(tdo.value !==''){
    //   h1.innerHTML = tdo.value;
    //   newp.innerHTML = desp.value;
    //   newpd.innerHTML = dte.value;
    //   tdo.value = '';
    //   desp.value = '';
    //   dte.value = '';
      // newLi.appendChild(h1);
    //   newLi.appendChild(newp);
    //   newLi.appendChild(newpd);
    //   notCompleted.appendChild(newLi);
    //!   popLi.appendChild(dn);
    //!   popLi.appendChild(checkbtn);
      // newLi.appendChild(delbtn);
      // newLi.appendChild(pop);
      // newLi.appendChild(pop);
    // }
    
    //! checkbtn.addEventListener('click',function(){
    //!   var parent = this.parentNode;
    //!   parent.remove();
    //!   notCompleted.appendChild(parent);
      //! checkbtn.style.display = 'none';
      //! dn.style.display = "block";
    //! });


      
    // pop.addEventListener('click',function(){
    //!   var parent = this.parentNode;
    //!   var ined = parent.querySelector('h5');
    //!   var inedp = parent.querySelector('p');
    //!   var inedpp = parent.querySelector('p');
      //! document.getElementById("editinput").innerHTML = edit;
      // var input = document.querySelector('#editinput');
      // var editDis = document.querySelector('#editdis');
      // var editDate = document.querySelector('#editdate');
      
    //!   document.getElementById("editinput").innerHext = ined;
    //!   status.appendChild(ined);
    //!   status.appendChild(inedp);
    //!   console.log(ined);
    //!   console.log(inedp);
        // input.value = (h1.innerHTML);
        // editDis.value = (newp.innerHTML);
        // editDate.value = (newpd.innerHTML);





         
        //! var parent = this.parentNode;
      //! parent.appendChild(status);
      //! parent.remove();
      //! status.appendChild(parent);
      //! checkbtn.style.display = 'none';
      //! dn.style.display = "block";
      // btnEdit.addEventListener('click', addEdit);
      // function addEdit(e){
        //! if(dn.value=='Done'){
        //!     var parent = newLi.parentNode;
        //!     parent.remove();
        //!     Done.appendChild(parent);
        //!     dn.value='';
        //! }else if(doing.value == 'Doing'){
        //!     var parent = newLi.parentNode;
        //!     parent.remove();
        //!     Completed.appendChild(parent);
        //! }else if(checkbtn.value == 'Todo'){
        //!     var parent = newLi.parentNode;
        //!     parent.remove();
        //!     notCompleted.appendChild(parent);
        //! }


      //   h1.innerHTML = input.value;
      // newp.innerHTML = editDis.value;
      // newpd.innerHTML = editDate.value;


      //! pop.addEventListener('click',function(){});
      


        // if(checkbtn.value == 'Todo'){

        //   var parent = delbtn.parentNode;
        //   parent.remove();
        //   notCompleted.appendChild(parent);

        // }
        // else if(doing.value == 'Doing'){

        //     var parent = delbtn.parentNode;
        //     parent.remove();
        //     Completed.appendChild(parent);
        // }else if(dn.value=='Done'){

        //   var parent = delbtn.parentNode;
        //   parent.remove();
        //   Done.appendChild(parent);

        // }


      




    // }
    // });
    // var dn = document.querySelector('.donest');
    // var checkbtn = document.querySelector('.todost');
    // var doing = document.querySelector('.doingst');

    //! dn.addEventListener('click',function(){
        
    //!   })


      
    //   delbtn.addEventListener('click',function(){
    //   var parent = this.parentNode;
    //   parent.remove();  
    // })

    
    

    //! function addEdit(e){
        
    //! }

  // }

