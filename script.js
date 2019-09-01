function display_nav(){
	var MyTopNav = document.getElementById("MyTopNav");
	if(MyTopNav.className === "topnav"){
		MyTopNav.className += " responsive";
	} else {
		MyTopNav.className = "topnav";
	}
}
