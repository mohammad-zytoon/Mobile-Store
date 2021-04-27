'use strict';
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  let mobileUserArr= [];
  let cond;

  function Custumer(name, type){
      this.name=name;
      this.type=type;
      this.price=getRndInteger(100, 500);
      this.condition=
      mobileUserArr.push(this);
      updateData();
  }
  

  function updateData(){
      let data= JSON.stringify(mobileUserArr);
      localStorage.setItem('keyWord', data);
  }

  function bringData(){
      let custumerData= localStorage.getItem('keyWord');
      let dataCus= JSON.parse(custumerData);
      if(dataCus){
          for (let i=0; i<dataCus.length;i++){
              let newVesitor= new Custumer(dataCus[i].name, dataCus[i].type);
              newVesitor.render();
          }
      }
  }

  let parent= document.getElementById('table');
  function tableHeader(){
      let userTh= document.createElement('th');
      parent.appendChild(userTh);
      userTh.textContent='User';

      let typeTh= document.createElement('th');
      parent.appendChild(typeTh);
      typeTh.textContent='Type';

      let priceTh= document.createElement('th');
      parent.appendChild(priceTh);
      priceTh.textContent='Price';


      let conditionTh= document.createElement('th');
      parent.appendChild(conditionTh);
      conditionTh.textContent='Condition';

  }
  tableHeader();

  Custumer.prototype.render=function(){
      let newCustumer=document.createElement('tr');
      parent.appendChild(newCustumer)
      let td1= document.createElement('td');
      newCustumer.appendChild(td1);
      td1.textContent=this.name;

      let td2= document.createElement('td');
      newCustumer.appendChild(td2);
      td2.textContent=this.type;

      let td3= document.createElement('td');
      newCustumer.appendChild(td3);
      td3.textContent=this.price;

  }

  let form= document.getElementById('form');
  form.addEventListener('submit', submiterF );

  function submiterF(event){
      event.preventDefault();
      let newUser= event.target.name.value;
      let newtype= event.target.type.value;

      let newCust= new Custumer(newUser,newtype);
      newCust.render();

     


  }

  bringData();