(function ($) {
    "use strict"; // Start of use strict

   
    $(document).ready(function () {
        /* scroll top */
        $(document).on('click', '.scroll_top', function () {
            $('body,html').animate({ scrollTop: 0 }, 400);
            return false;
        })
        /** ALL CAT **/
        $(document).on('click', '.open-cate', function () {
            $(this).closest('#box-vertical-menu').find('li.cat-link-orther').each(function () {
                $(this).slideDown();
            });
            $(this).addClass('colse-cate').removeClass('open-cate').html('Close');
        })
        /* Close category */
        $(document).on('click', '.colse-cate', function () {
            $(this).closest('#box-vertical-menu').find('li.cat-link-orther').each(function () {
                $(this).slideUp();
            });
            $(this).addClass('open-cate').removeClass('colse-cate').html('Tất cả danh mục');
            return false;
        })

        /* Open menu on mobile */
        $(document).on('click', '.btn-open-mobile, #box-vertical-megamenus .title-menu', function () {
            var width = $(window).width();
            if (width > 1024) {
                if ($('body').hasClass('home')) {
                    if ($('#nav-top-menu').hasClass('nav-ontop')) {
                    } else {
                        return false;
                    }
                }
            }
            $("#navbar").collapse("hide");
            return false;
        });

        $("#navbar").on("show.bs.collapse", function () {
            $('#box-vertical-menu').collapse("hide");
        });

        /* Close vertical */
        $(document).on('click', '*', function (e) {
            var container = $("#box-vertical-megamenus");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('home')) {
                    if ($('#nav-top-menu').hasClass('nav-ontop')) {
                    } else {
                        return;
                    }
                }
            }
        })
    });
    /* ---------------------------------------------
     Scripts resize
     --------------------------------------------- */
    $(window).resize(function () {
        // Remove menu ontop
        remove_menu_ontop();
       
    });

    $('#btn-toggle-dm').click(function(){
        $('#boxdm').toggle(200);
      });   
      var w_screen = window.innerWidth;
      $('#navbar .sub_parent > i').removeClass("fa-angle-down");
      $('#navbar .sub_parent > i').addClass("fa-angle-right");
if(w_screen > 767) {
    $('#navbar .sub_parent > i').removeClass("fa-angle-down");
    $('#navbar .sub_parent > i').addClass("fa-angle-right");
}
else {
    $('#navbar .sub_parent > i').removeClass("fa-angle-right");
    $('#navbar .sub_parent > i').addClass("fa-angle-down");
}

$(window).scroll(function () {
    /* Show hide scrolltop button */
    if ($(window).scrollTop() == 0) {
        $('.scroll_top').stop(false, true).fadeOut(600);
    } else {
        $('.scroll_top').stop(false, true).fadeIn(600);
    }
    /* Main menu on top */
    var h = $(window).scrollTop();
    var max_h = window.innerHeight;

    var hotline_id = document.getElementById('cart-block');
    if (h > (max_h + 50)) {
       hotline_id.classList.add("hotline-fixed");
    }
    else{
        hotline_id.classList.remove("hotline-fixed");
    }
   //desktop
    if (width > 767) {
        if (h > (max_h + 50)) {
            $('#nav-top-menu').addClass('nav-ontop');
        }
        else {
            $('#nav-top-menu').removeClass('nav-ontop');
        }
    }
   else{
        if (h > (max_h + 50)) {
            // fix top menu
            hotline_id.style.display = "block";
            $('#nav-top-menu').addClass('nav-ontop');
            $('#header .header-search-box form').appendTo('#form-search-opntop');
    
        } else {
            hotline_id.style.display = "none";
            $('#box-vertical-menu').hide();
            $('#nav-top-menu').removeClass('nav-ontop');

        }
      
           
        if ($(window).scrollTop() > (970)){
                $('#btn-toggle-dm').show();
                $('#btn-toggle-dm').addClass('pos-fixed');
                $('#boxdm').addClass('box-danhmuc-fixed');
            } else {
                $('#btn-toggle-dm').hide();
                $('#boxdm').hide()
      }
      
    }


//tab product

/*button open menu cl30*/


});//end function scroll
    
     //on menusp off menuchinh
     $('#menu-toggle').click(function(){
        $('#box-vertical-menu').slideToggle(150);
        $("#navbar").hide();
    });
    

     //on menuchinh off menusp
    $('.navbar-toggle').click(function() {
        $('#box-vertical-menu').hide();
        $("#navbar").slideToggle(150);
    });
    var width = $(window).width();
    if(width < 767){
        $('#box-vertical-menu').hide();
        $('.menu-down .icon-menu').click(function () {
            $(this).parent('li').children('.sub-menu-down','.column-sp-down').slideToggle(150);
            $(this).toggleClass('fa-angle-down fa-angle-up');
          });

          $('.menu-down .icon-menu-1').click(function () {
            $(this).parent('li').children('.dropdown-menu').toggleClass("menu-block");
          });
    }

    /**==============================
    ***  Remove menu on top
    ===============================**/
    function remove_menu_ontop() {
        var width = parseInt($(window).width());
        if (width < 300) {
            $('#nav-top-menu').removeClass('nav-ontop');
        }
    }
})(jQuery); 

function textsearch(str) {  
	
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");

    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    str = str.replace(/ + /g," ");
      str = str.replace(/\s+/g, '-');
    str = str.trim();
    // Remove punctuations
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|{|}|\||\\/g," ");
    return str;
} 