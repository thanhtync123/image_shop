//js use for page child
function addSticky(getID){
      document.getElementById(getID).style.position= "sticky";
      document.getElementById(getID).style.top = `${(window.innerHeight)-(document.getElementById(getID).offsetHeight)}px`;
    }

    if(window.innerWidth > 767){

      window.onload = function() {
                          if($('#cl70').height() > $('#cl30').height()){
                              addSticky("cl30");
                            }
                            else{
                              addSticky("cl70");
                            }
                        }
    }


//đoạn này cũng có bên danhmuc js
$('.open-menuoption').click(function(){
    $('.menuoption > ul').slideToggle();
});


//đoạn này cũng có bên danhmuc js
function opentab(tabId,btntabId) {
  let tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  let btntabs = document.querySelectorAll('.btn-tab');
  btntabs.forEach(btntab => btntab.classList.remove('active'));
  document.getElementById(btntabId).classList.add('active');
}

function opentab1(tabId,btntabId) {
  let tabs = document.querySelectorAll('.tab-content-1');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');

  let btntabs = document.querySelectorAll('.btn-tab-1');
  btntabs.forEach(btntab => btntab.classList.remove('active'));
  document.getElementById(btntabId).classList.add('active');
}



//set size img
/*
window.onload = function(){
laysizehinhall("#cl70 img");
laysizehinhall(".header-logo img");
laysizehinhall("#footer img");
}

 function laysizehinhall(Classhinh) {
   var getIDhinh = document.querySelectorAll(Classhinh);
   for (var i=0; i < getIDhinh.length; i++) 
     {
       getIDhinh[i].style.width=`${getIDhinh[i].offsetWidth}px`;
       getIDhinh[i].style.height= "fit-content";
     }
 }
*/