function fontSize(){
		document.documentElement.style.fontSize=document.documentElement.clientWidth/3.75+"px";
	};
	fontSize();
	window.onload=fontSize;
	window.onresize=fontSize;