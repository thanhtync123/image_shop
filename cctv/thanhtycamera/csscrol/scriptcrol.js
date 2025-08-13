function addSticky(getID){
	document.getElementById(getID).style.position= "sticky";
	document.getElementById(getID).style.top = `${(window.innerHeight)-(document.getElementById(getID).offsetHeight)}px`;
}

$(window).scroll(function (){
		if(window.innerWidth > 767){
		if($('#cl70').height() > $('#cl30').height()){

			addSticky("cl30");
		}
		else{
			addSticky("cl70");
		}
	}

});

