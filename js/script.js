
  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').trigger('focus')
  // })


  var tdo = document.querySelector('.Tdo');
  var desp = document.querySelector('.desp');
  var dte = document.querySelector('.dte');
  var btn = document.querySelector('#button-addon2');
  var btnEdit = document.querySelector('#button-addon2add');

  btn.addEventListener('click', addList);
  btnEdit.addEventListener('click', addEdit);
  
  
  function addList(e){
    var notCompleted = document.querySelector('.notCompleted');
    var Completed = document.querySelector('.completed');
    var Done = document.querySelector('.done');
    var status = document.querySelector('.status');
    
    var popLi = document.createElement('li');
    var newLi = document.createElement('li');
    var newp = document.createElement('p');
    var newpd = document.createElement('p');
    var checkbtn = document.createElement('button');
    var delbtn = document.createElement('button');
    var dn = document.createElement('button');
    var pop = document.createElement('button');
    var h1 = document.createElement('h5');


    

    checkbtn.innerHTML = '<i class="fa fa-spinner"></i>';
    pop.innerHTML = '<i type="button" class="fa fa-pencil-square-o" data-toggle="modal" data-target="#exampleModalCenter2"> </i>';
    // pop.innerHTML = '<i class="fa fa-pencil-square-o"> </i>';
    delbtn.innerHTML = '<i class="fa fa-times"></i>';
    dn.innerHTML = '<i class="fa fa-check"></i>';

    if(tdo.value !==''){
      h1.textContent = tdo.value;
      newp.textContent = desp.value;
      newpd.textContent = dte.value;
      tdo.value = '';
      desp.value = '';
      dte.value = '';
      newLi.appendChild(h1);
      newLi.appendChild(newp);
      newLi.appendChild(newpd);
      notCompleted.appendChild(newLi);
      status.appendChild(popLi);
      popLi.appendChild(dn);
      popLi.appendChild(checkbtn);
      newLi.appendChild(delbtn);
      newLi.appendChild(pop);
      newLi.appendChild(pop);
    }
    
    checkbtn.addEventListener('click',function(){
      var parent = this.parentNode;
      parent.remove();
      notCompleted.appendChild(parent);
      // checkbtn.style.display = 'none';
      // dn.style.display = "block";
    });


      
    pop.addEventListener('click',function(){
      var parent = this.parentNode;
      var ined = parent.querySelector('h5');
      // document.getElementById("editinput").innerHTML = edit;

    //   var input = document.querySelector('#editinput');

    //   document.getElementById("editinput").innerText = ined;

      status.appendChild(ined);
      console.log(ined);



      
      // var parent = this.parentNode;
      // parent.appendChild(status);
      // parent.remove();
      // status.appendChild(parent);
      // checkbtn.style.display = 'none';
      // dn.style.display = "block";
    });


      
      delbtn.addEventListener('click',function(){
      var parent = this.parentNode;
      parent.remove();  
    })

    dn.addEventListener('click',function(){
      var parent = this.parentNode;
      parent.remove(newLi);
      Done.appendChild(parent);
    })
  }

  function addEdit(e){
      parant
  }