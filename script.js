var a = document.getElementById("bachelor");
var b = document.getElementById("caliente");
var c = document.getElementById("pleasant");
var d = document.getElementById("dreamer");
var e = document.getElementById("don");
var f = document.getElementById("old");
var g = document. getElementById("bella");
var h = document.getElementById("goths");
var i = document.getElementById("mor");
var j = document.getElementById("goths1");
var k = document.getElementById("goths2");
var l = document.getElementById("boxs");
var m = document.getElementById("boxs2");
var n = document.getElementById("boxs3");
var o = document.getElementById("myAudio"); 
var z = document.getElementById("sims1");
var y = document.getElementById("sims2");
var x = document.getElementById("sims3");
var w = document.getElementById("sims4");

// the code for the images on the fun tab to repeat

var image1array = [
	"images/IMG_2315.PNG",
	"images/IMG_2317.PNG",
	"images/IMG_2233.PNG",
	"images/64a8784e2a8078813a269281dc45ee3d.png"
	
];

var imgnumber = 0;
var imgmax = 4;
function changeThis(){
	
	if (imgnumber == imgmax) {
		imgnumber = 0;
	}
	a.src = image1array[imgnumber];
	imgnumber++;
}

var image2array = [
	"images/5ed530a10e947fd1b92ca7e0830f9ad9.png",
	"images/IMG_2311.PNG",
	"images/IMG_2312.PNG",
	"images/IMG_2309.PNG",
	"images/IMG_2313.PNG",
	"images/IMG_2310.PNG",
	"images/50aa24204866ee29003b87685b6c3020.png" 	
];


var imgnumber1 = 0;
var imgmax1 = 7;

function changeImg(){
	
	if (imgnumber1 == imgmax1) {
		imgnumber1 = 0;
	}
	b.src = image2array[imgnumber1];
	imgnumber1++;
}


var image3array = [
	"images/36910_original.png",
	"images/IMG_2318.PNG",
	"images/c89889e0843aecf7816683f3d5d2f53d.png" 	
];

var imgnumber2 = 0;
var imgmax2 = 3;

function changePhoto(){
	
	if (imgnumber2 == imgmax2) {
		imgnumber2 = 0;
	}
	c.src = image3array[imgnumber2];
	imgnumber2++;
}

var image4array = [
	"images/IMG_2306.PNG",
	"images/IMG_2307.PNG",
	"images/IMG_2308.PNG",
	"images/IMG_2291.PNG" 	
];

var imgnumber3 = 0;
var imgmax3 = 4;

function changeIt(){
	
	if (imgnumber3 == imgmax3) {
		imgnumber3 = 0;
	}
	d.src = image4array[imgnumber3];
	imgnumber3++;
}

var image5array = [
	"images/IMG_2294.PNG",
	"images/don1.jpg",
	"images/IMG_2295.PNG",
];

var imgnumber4 = 0;
var imgmax4 = 3;

function newImg(){
	
	if (imgnumber4 == imgmax4) {
		imgnumber4 = 0;
	}
	e.src = image5array[imgnumber4];
	imgnumber4++;
}

var image6array = [
	"images/IMG_2304.PNG",
	"images/IMG_2303.PNG",
	"images/IMG_2305.PNG",
	"images/IMG_2293.PNG",
];

var imgnumber5 = 0;
var imgmax5 = 4;

function newPhoto(){
	
	if (imgnumber5 == imgmax5) {
		imgnumber5 = 0;
	}
	f.src = image6array[imgnumber5];
	imgnumber5++;
}
function addImg(){
	h.classList.remove("leave");
	l.classList.remove("pulse");
	h.classList.add("pulse");
}

function addImg2(){
	i.classList.remove("leave");
	h.classList.remove("pulse");
	i.classList.add("pulse");
}
function addImg3(){
	j.classList.remove("leave");
	k.classList.remove("leave");
	i.classList.remove("pulse");
	o.play();
}
//This code is for the expansisons page (The buttons)
function myFunction() {
	var element = document.getElementById("sims1");
	z.classList.toggle("go");
}

function myFunction1() {
	var element = document.getElementById("sims2");
	y.classList.toggle("go");
}

function myFunction2() {
	var element = document.getElementById("sims3");
	x.classList.toggle("go");
}

function myFunction3() {
	var element = document.getElementById("sims4");
	w.classList.toggle("go");
}

if(q="4")
		{
			alert("== Sul Sul! Welcome to the Sims 4");
		}
if(q="3")
		{
			alert("== Sul Sul! Welcome to the Sims 3");
		}
if(q="2")
		{
			alert("== Sul Sul! Welcome to the Sims 2");
		}
if(q="1")
		{
			alert("== Sul Sul! Welcome to the Sims 1");
		}

