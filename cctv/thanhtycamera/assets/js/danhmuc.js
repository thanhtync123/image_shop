/*Button xem thêm danh mục*/
if ($('#spgioithieu1').height() < 400){
  document.getElementById('spgioithieu1').style.height = "fit-content";
  $('#spgioithieu1').removeClass('lammo');
}
else {
  document.getElementById('spgioithieu1').style.height = "300px";
}

if($('#content-top').height() <= 300) {
  document.getElementById('btn-xemthemid').style.display=('none');
}
else {
  document.getElementById('btn-xemthemid').style.display=('block');
}

function openinfo(idcontent1, boxgioithieu) {

if ($(`${boxgioithieu}`).height() < 200)
{  // chiá»u cao content nhá» hÆ¡n 200
      if(document.getElementById(idcontent1).style.height == "fit-content")
        { 
          document.getElementById(idcontent1).style.height = "200px";
          $(`#${idcontent1}`).addClass('lammo');
        }
        else
        {
          document.getElementById(idcontent1).style.height = "fit-content"; 
          $(`#${idcontent1}`).removeClass('lammo');
        }
}
else
    { // chiá»u cao content lá»›n hÆ¡n 200
        if(document.getElementById(idcontent1).style.height == "fit-content")
          { 
            if(window.innerWidth > 767){
              document.getElementById(idcontent1).style.height = "300px";
            } else{
              document.getElementById(idcontent1).style.height = "90px";
            } 
          $(`#${idcontent1}`).addClass('lammo');
          }
          else
          {
          document.getElementById(idcontent1).style.height = "fit-content"; 
          $(`#${idcontent1}`).removeClass('lammo');
          } 
    }
}



//đoạn này cũng có bên sctip24
$('.open-menuoption').click(function(){
    $('.menuoption > ul').slideToggle();
});

function opentab(cityName, tabClass) {
    var i;
    var x = document.getElementsByClassName(tabClass);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}
//đoạn này cũng có bên sctip24


