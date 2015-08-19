var mykhet = 0;
var slaves = 0;

function tickleClick(number) {
	mykhet = mykhet + number;
	draw();
};

function buySlave() {
	var slaveCost = Math.floor(10*Math.pow(1.1,slaves));
	if(mykhet >= slaveCost){
		slaves += 1;
		mykhet = mykhet - slaveCost;
		draw();
	};
	var nextCost = Math.floor(10*Math.pow(1.1,slaves));
	document.getElementById("slaveCost").innerHTML = nextCost;
};

function draw() {
	document.getElementById("mykhet").innerHTML = mykhet;
	document.getElementById("slaves").innerHTML = slaves;
};

window.setInterval(function() {
	tickleClick(slaves);
	draw();
}, 1000);