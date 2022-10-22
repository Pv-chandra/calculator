// var btn=document.querySelectorAll(".button");
// var num1=null;
// var num2=null;
// var op=null;
var display_it=document.getElementById("display-content");

display_it.innerText="";

function display(text){
	if(text!='AC' && text!='=' && text!='<-'){
		display_it.innerText+=text;
	}
	else if(text=='AC'){
		display_it.innerText='';
	}
	else if(text=='='){
		if(display_it.innerText[0]=='0'){
			display_it.innerText=display_it.innerText.slice(1, display_it.innerText.length);
		}

		display_it.innerText=eval(display_it.innerText);
	}	
	else{
		display_it.innerText=display_it.innerText.slice(0, -1);
	}
	
}

