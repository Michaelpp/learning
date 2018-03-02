
/*JavaScript for Calculator*/
window.onload = function() {

var screen,
	num,
	operator,
	output;
	screen = document.getElementById("result");

var elem = document.querySelectorAll(".num");
	len = elem.length;
	for (var i=0; i < len;i++){
		elem[i].addEventListener("click",function(){
		num = this.value;
		output = screen.innerHTML += num;
		screenlen = output.length;
		if (screenlen > 15){
			alert("最大显示15位数")
		}
	});
  }

	document.querySelector(".del").addEventListener("click",function(){
		screen.innerHTML = "";
	});
		

var operator = document.querySelectorAll(".operator");
	var lenoper = operator.length;
	for (var i = 0; i < lenoper; i++) {
	    operator[i].addEventListener("click",function(){
	  	oper = this.value;
	 	if (screen.innerHTML === "") {
	 		screen.innerHTML = screen.innerHTML.concat("");
	 	}
	 	else if (output){
	 		screen.innerHTML = output.concat(oper);
	 	}
	 });
  }


	document.querySelector(".equ").addEventListener("click",function(){
		if (screen.innerHTML === output){
			screen.innerHTML = eval(output);
		 } 

		 else {
			screen.innerHTML = "";
		 }
	  });
}



