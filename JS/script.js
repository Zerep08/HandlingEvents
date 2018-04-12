const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e,current){
	e.preventDefault();
	if(current.innerHTML == "Book Now!"){
		CTA.innnerHTML="Ooops";
	}else{
		CTA.innerHTML="Book Now!";
	}
	 
	
	ALERT.classList.toggle("hide");
}



CTA.addEventListener("click",function(e){reveal(e,this);},false);
CTA.addEventListener("click",function(){
	console.log("The button was clicked");
},false);


