
//Variables
//Stat Variables
var money = 0;
var moneyThisSession = 0;
var moneyTotal = 0;

var softness = 0;
var softnessThisSession = 0;
var softnessTotal = 0;

var clickPercent = 0;
var clickTotal = 0;

var hungerBar = document.getElementById("hunger");
var thirstBar = document.getElementById("thirsty");

//Bonusmodifiers
var bonusMoneyPercent = 0;
var bonusSoftnessPercent = 0;


//Modifiers
var thirstMod = 1;
var hungerMod = 1;

tickleClickMod = 1;

var softnessMod = 0;
//var struggleMod = 0;
var softnessDisplay = 0;

var moneyMod = 00; 
//var expenses = 0;
var moneyDisplay = 0;

var moneyModTotal = 0;
var softnessModTotal = 0;

//Mode Variables
var currentMode = 1;

//Event variables
var eventSpawned = false;

//Timers
var autosaveTimer = 60;

//Old
var hunger = 100;
var thirst = 100;
var slaves = 0;
var pillows = 0;

//date stuff
lastBonusDate = moment().format('dddd');
currentDate = moment().format('dddd');;

//OBJECTS
var clothes = {
		total:0,
		baseprice:15,
		img: 'items/clothes.png',
		require:{
			softness:0,
			money:15
		},
		give:{
			moneyMod: 0,
			expenses:0.1,
			softnessMod:0.1,
			struggleMod:0,
			softness:2,
			hunger:0,
			money:0
		}
},
berliner = {
		total:0,
		baseprice:100,
		img: 'items/berliner.png',
		require:{
			softness:0,
			money:100
		},
		give:{
			moneyMod: 0,
			expenses:0,
			softnessMod:0.5,
			struggleMod:0,
			softness:10,
			hunger:0,
			money:0
		}
},
alkohol = { //TAXFREE
		total:0,
		baseprice:500,
		img: 'items/alkohol.png',
		require:{
			softness:0,
			money:500
		},
		give:{
			moneyMod: 0,
			expenses:0,
			softnessMod:4,
			struggleMod:0,
			softness:10,
			hunger:0,
			money:0
		}
},
takeout = {
		total:0,
		baseprice:3000,
		img: 'items/takeout.png',
		require:{
			softness:0,
			money:3000
		},
		give:{
			moneyMod: 0,
			expenses:0,
			softnessMod:10,
			struggleMod:0,
			softness:10,
			hunger:0,
			money:0
		}
},
vacation = {
		total:0,
		baseprice:10000,
		img: 'items/vacation.png',
		require:{
			softness:0,
			money:10000
		},
		give:{
			moneyMod: 0,
			expenses:0,
			softnessMod:40,
			struggleMod:0,
			softness:10,
			hunger:0,
			money:0
		}
},
slave = {
		total:0,
		baseprice:40000,
		img: 'items/slave.png',
		require:{
			softness:0,
			money:40000
		},
		give:{
			moneyMod: 0,
			expenses:0,
			softnessMod:100,
			struggleMod:0,
			softness:10,
			hunger:0,
			money:0
		}
},
work1 = {
		total:0,
		baseprice:15,
		img: 'items/work1.png',
		require:{
			softness:15,
			money:0
		},
		give:{
			moneyMod: 0.1,
			expenses:0,
			softnessMod:0,
			struggleMod:0.1,
			softness:0,
			hunger:0,
			money:2
		}
},
extraFag = {
		total:0,
		baseprice:100,
		img: 'items/extrafag.png',
		require:{
			softness:100,
			money:0
		},
		give:{
			moneyMod: 0.5,
			expenses:0,
			softnessMod:0,
			struggleMod:0,
			softness:0,
			hunger:0,
			money:2
		}
},
weekendWork = {
		total:0,
		baseprice:500,
		img: 'items/weekendwork.png',
		require:{
			softness:500,
			money:0
		},
		give:{
			moneyMod: 4,
			expenses:0,
			softnessMod:0,
			struggleMod:0,
			softness:0,
			hunger:0,
			money:2
		}
},
workCourse = {
		total:0,
		baseprice:3000,
		img: 'items/workcourse.png',
		require:{
			softness:3000,
			money:0
		},
		give:{
			moneyMod: 10,
			expenses:0,
			softnessMod:0,
			struggleMod:0,
			softness:0,
			hunger:0,
			money:2
		}
},
moreUsers = {
		total:0,
		baseprice:10000,
		img: 'items/moreusers.png',
		require:{
			softness:10000,
			money:0
		},
		give:{
			moneyMod: 40,
			expenses:0,
			softnessMod:0,
			struggleMod:0,
			softness:0,
			hunger:0,
			money:2
		}
},
responsibility = {
		total:0,
		baseprice:40000,
		img: 'items/responsibility.png',
		require:{
			softness:40000,
			money:0
		},
		give:{
			moneyMod: 100,
			expenses:0,
			softnessMod:0,
			struggleMod:0,
			softness:0,
			hunger:0,
			money:2
		}
};



var uClothes1 = {
	enabled: false,
	bought: false,
	show: true,
	name: "uClothes1",
	id: "uClothes1",
	img: 'images/upgrades/clothes1.png',
	tooltip: '"[Myke Klær]<br/>Tøymykner: Klær gir mer myk <br/>Koster 500 MYK og $$$"',
	/*require:{ BONUS PERCENTAGE
		softness: 500,
		money: 500,
		previousUpgrade: false
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0.1,
		bonusSoftnessPercent:0
	}*/
	require:{
		softness: 500,
		money: 500,
		previousUpgrade: true
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: clothes,
		itemModifier: 0.5
	}
},
uClothes2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uClothes2",
	id: "uClothes2",
	img: 'images/upgrades/clothes2.png',
	tooltip: '"[Myke Klær]<br/>Tøymykner med lavendelduft <br/>Koster 8,000 MYK og $$$"',
	require:{
		softness: 8000,
		money: 8000,
		previousUpgrade: uClothes1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: clothes,
		itemModifier: 2
	}
},
uClothes3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uClothes3",
	id: "uClothes3",
	img: 'images/upgrades/clothes3.png',
	tooltip: '"[Myke Klær]<br/>Freshtec Tøymykner <br/>Koster 100,000 MYK og $$$"',
	require:{
		softness: 100000,
		money: 100000,
		previousUpgrade: uClothes2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: clothes,
		itemModifier: 5
	}
},
uClothes4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uClothes4",
	id: "uClothes4",
	img: 'images/upgrades/clothes4.png',
	tooltip: '"[Myke Klær]<br/>Hjemmebrygget Tøymykner <br/>Koster 1 mill MYK og $$$"',
	require:{
		softness: 1000000,
		money: 1000000,
		previousUpgrade: uClothes3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: clothes,
		itemModifier: 10
	}
},
uClothes5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uClothes5",
	id: "uClothes5",
	img: 'images/upgrades/clothes5.png',
	tooltip: '"[Myke Klær]<br/>Molekylær Mykhet <br/>Koster 25 mill MYK og $$$"',
	require:{
		softness: 25000000,
		money: 25000000,
		previousUpgrade: uClothes4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: clothes,
		itemModifier: 30
	}
},
uBerliner1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBerliner1",
	id: "uBerliner1",
	img: 'images/upgrades/berliner1.png',
	tooltip: '"[Berlinerboller]<br/>Dobbelt fyll: Bollene gir mer myk <br/>Koster 10,000 MYK og $$$"',
	require:{
		softness: 10000,
		money: 10000,
		previousUpgrade: uClothes1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: berliner,
		itemModifier: 4
	}
},
uBerliner2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBerliner2",
	id: "uBerliner2",
	img: 'images/upgrades/berliner2.png',
	tooltip: '"[Berlinerboller]<br/>Trippelt fyll <br/>Koster 100,000 MYK og $$$"',
	require:{
		softness: 100000,
		money: 100000,
		previousUpgrade: uBerliner1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: berliner,
		itemModifier: 8
	}
},
uBerliner3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBerliner3",
	id: "uBerliner3",
	img: 'images/upgrades/berliner3.png',
	tooltip: '"[Berlinerboller]<br/>Quadruppelt fyll <br/>Koster 5m MYK og $$$"',
	require:{
		softness: 5000000,
		money: 5000000,
		previousUpgrade: uBerliner2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: berliner,
		itemModifier: 20
	}
},
uBerliner4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBerliner4",
	id: "uBerliner4",
	img: 'images/upgrades/berliner4.png',
	tooltip: '"[Berlinerboller]<br/>Jesuskrem <br/>Koster 10m MYK og $$$"',
	require:{
		softness: 10000000,
		money: 10000000,
		previousUpgrade: uBerliner3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: berliner,
		itemModifier: 40
	}
},
uBerliner5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBerliner5",
	id: "uBerliner5",
	img: 'images/upgrades/berliner5.png',
	tooltip: '"[Berlinerboller]<br/>Berlinception <br/>Koster 100m MYK og $$$"',
	require:{
		softness: 100000000,
		money: 100000000,
		previousUpgrade: uBerliner4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: berliner,
		itemModifier: 100
	}
},
uAlkohol1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uAlkohol1",
	id: "uAlkohol1",
	img: 'images/upgrades/alcohol1.png',
	tooltip: '"[Tax-free]<br/>Ingen tobakk: mer kvote gir mer myk <br/>Koster 50,000 MYK og $$$"',
	require:{
		softness: 50000,
		money: 50000,
		previousUpgrade: uBerliner1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: alkohol,
		itemModifier: 10
	}
},
uAlkohol2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uAlkohol2",
	id: "uAlkohol2",
	img: 'images/upgrades/alcohol2.png',
	tooltip: '"[Tax-free]<br/>Utvidet kvote <br/>Koster 150,000 MYK og $$$"',
	require:{
		softness: 150000,
		money: 150000,
		previousUpgrade: uAlkohol1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: alkohol,
		itemModifier: 20
	}
},
uAlkohol3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uAlkohol3",
	id: "uAlkohol3",
	img: 'images/upgrades/alcohol3.png',
	tooltip: '"[Tax-free]<br/>Rag venter i Norge <br/>Koster 15m MYK og $$$"',
	require:{
		softness: 15000000,
		money: 15000000,
		previousUpgrade: uAlkohol2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: alkohol,
		itemModifier: 40
	}
},
uAlkohol4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uAlkohol4",
	id: "uAlkohol4",
	img: 'images/upgrades/alcohol4.png',
	tooltip: '"[Tax-free]<br/>Lastebil med skjult rom <br/>Koster 150m MYK og $$$"',
	require:{
		softness: 150000000,
		money: 150000000,
		previousUpgrade: uAlkohol3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: alkohol,
		itemModifier: 100
	}
},
uAlkohol5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uAlkohol5",
	id: "uAlkohol5",
	img: 'images/upgrades/alcohol5.png',
	tooltip: '"[Tax-free]<br/>Underjordisk tunnell <br/>Koster 300m MYK og $$$"',
	require:{
		softness: 300000000,
		money: 300000000,
		previousUpgrade: uAlkohol4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: alkohol,
		itemModifier: 150
	}
},
uTakeOut1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uTakeOut1",
	id: "uTakeOut1",
	img: 'images/upgrades/takeout1.png',
	tooltip: '"[Takeout]<br/>Rabattkort: mer mat gir mer myk <br/>Koster 200,000 MYK og $$$"',
	require:{
		softness: 200000,
		money: 200000,
		previousUpgrade: uAlkohol1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: takeout,
		itemModifier: 30
	}
},
uTakeOut2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uTakeOut2",
	id: "uTakeOut2",
	img: 'images/upgrades/takeout2.png',
	tooltip: '"[Takeout]<br/>Levering på døra <br/>Koster 400,000 MYK og $$$"',
	require:{
		softness: 400000,
		money: 400000,
		previousUpgrade: uTakeOut1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: takeout,
		itemModifier: 60
	}
},
uTakeOut3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uTakeOut3",
	id: "uTakeOut3",
	img: 'images/upgrades/takeout3.png',
	tooltip: '"[Takeout]<br/>Dronelevering <br/>Koster 30m MYK og $$$"',
	require:{
		softness: 30000000,
		money: 30000000,
		previousUpgrade: uTakeOut2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: takeout,
		itemModifier: 200
	}
},
uTakeOut4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uTakeOut4",
	id: "uTakeOut4",
	img: 'images/upgrades/takeout4.png',
	tooltip: '"[Takeout]<br/>Buffet rett hjem <br/>Koster 300m MYK og $$$"',
	require:{
		softness: 300000000,
		money: 300000000,
		previousUpgrade: uTakeOut3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: takeout,
		itemModifier: 400
	}
},
uTakeOut5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uTakeOut5",
	id: "uTakeOut5",
	img: 'images/upgrades/takeout5.png',
	tooltip: '"[Takeout]<br/>Personlige kokker <br/>Koster 1b MYK og $$$"',
	require:{
		softness: 1000000000,
		money: 1000000000,
		previousUpgrade: uTakeOut4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: takeout,
		itemModifier: 800
	}
},
uVacation1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uVacation1",
	id: "uVacation1",
	img: 'images/upgrades/vacation1.png',
	tooltip: '"[Miniferie]<br/>Solgaranti: Reis dit det er varmt og få mer myk <br/>Koster 4m MYK og $$$"',
	require:{
		softness: 4000000,
		money: 4000000,
		previousUpgrade: uTakeOut1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: vacation,
		itemModifier: 80
	}
},
uVacation2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uVacation2",
	id: "uVacation2",
	img: 'images/upgrades/vacation2.png',
	tooltip: '"[Miniferie]<br/>Queen Size Double Dorm <br/>Koster 75m MYK og $$$"',
	require:{
		softness: 75000000,
		money: 75000000,
		previousUpgrade: uVacation1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: vacation,
		itemModifier: 300
	}
},
uVacation3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uVacation3",
	id: "uVacation3",
	img: 'images/upgrades/vacation3.png',
	tooltip: '"[Miniferie]<br/>Endless Cava <br/>Koster 350m MYK og $$$"',
	require:{
		softness: 350000000,
		money: 350000000,
		previousUpgrade: uVacation2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: vacation,
		itemModifier: 700
	}
},
uVacation4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uVacation4",
	id: "uVacation4",
	img: 'images/upgrades/vacation4.png',
	tooltip: '"[Miniferie]<br/>Privat Sjåfør <br/>Koster 1b MYK og $$$"',
	require:{
		softness: 1000000000,
		money: 1000000000,
		previousUpgrade: uVacation3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: vacation,
		itemModifier: 1200
	}
},
uVacation5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uVacation5",
	id: "uVacation5",
	img: 'images/upgrades/vacation1.png',
	tooltip: '"[Miniferie]<br/>All Inclusive <br/>Koster 2b MYK og $$$"',
	require:{
		softness: 2000000000,
		money: 2000000000,
		previousUpgrade: uVacation4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: vacation,
		itemModifier: 3000
	}
},
uSlave1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uSlave1",
	id: "uSlave1",
	img: 'images/upgrades/slave1.png',
	tooltip: '"[Tikkleslave]<br/>Tiklekurs: Slavene gir mer myk <br/>Koster 50m MYK og $$$"',
	require:{
		softness: 50000000,
		money: 50000000,
		previousUpgrade: uVacation1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: slave,
		itemModifier: 200
	}
},
uSlave2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uSlave2",
	id: "uSlave2",
	img: 'images/upgrades/slave1.png',
	tooltip: '"[Tikkleslave]<br/>Blekkspruthender <br/>Koster 250m MYK og $$$"',
	require:{
		softness: 250000000,
		money: 250000000,
		previousUpgrade: uSlave1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: slave,
		itemModifier: 500
	}
},
uSlave3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uSlave3",
	id: "uSlave3",
	img: 'images/upgrades/slave1.png',
	tooltip: '"[Tikkleslave]<br/>Silkelabber <br/>Koster 2,5b MYK og $$$"',
	require:{
		softness: 2500000000,
		money: 2500000000,
		previousUpgrade: uSlave2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: slave,
		itemModifier: 1000
	}
},
uSlave4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uSlave4",
	id: "uSlave4",
	img: 'images/upgrades/slave1.png',
	tooltip: '"[Tikkleslave]<br/>Nakketiklekurs <br/>Koster 5b MYK og $$$"',
	require:{
		softness: 5000000000,
		money: 5000000000,
		previousUpgrade: uSlave3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: slave,
		itemModifier: 2000
	}
},
uSlave5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uSlave5",
	id: "uSlave5",
	img: 'images/upgrades/slave1.png',
	tooltip: '"[Tikkleslave]<br/>Innebygd Devine Calm Dispenser <br/>Koster 1t MYK og $$$"',
	require:{
		softness: 1000000000000,
		money: 1000000000000,
		previousUpgrade: uSlave4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: slave,
		itemModifier: 10000
	}
},
uWork1 = {
	enabled: false,
	bought: false,
	show: true,
	name: "uWork1",
	id: "uWork1",
	img: 'images/upgrades/work1.png',
	tooltip: '"[Ekstra Oppgaver]<br/>Kjøp nye joggesko: <br/>Gjør oppgavene raskere og tjen mer <br/>Koster 500 MYK og $$$"',
	/*require:{ BONUS PERCENTAGE
		softness: 500,
		money: 500,
		previousUpgrade: false
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0.1,
		bonusSoftnessPercent:0
	}*/
	require:{
		softness: 500,
		money: 500,
		previousUpgrade: true
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: work1,
		itemModifier: 0.5
	}
},
uWork2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWork2",
	id: "uWork2",
	img: 'images/upgrades/work1.png',
	tooltip: '"[Ekstra Oppgaver]<br/>Nike Air <br/>Koster 8,000 MYK og $$$"',
	require:{
		softness: 8000,
		money: 8000,
		previousUpgrade: uWork1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: work1,
		itemModifier: 2
	}
},
uWork3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWork3",
	id: "uWork3",
	img: 'images/upgrades/work1.png',
	tooltip: '"[Ekstra Oppgaver]<br/>Læffe Sandaler <br/>Koster 100,000 MYK og $$$"',
	require:{
		softness: 100000,
		money: 100000,
		previousUpgrade: uWork2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: work1,
		itemModifier: 5
	}
},
uWork4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWork4",
	id: "uWork4",
	img: 'images/upgrades/work1.png',
	tooltip: '"[Ekstra Oppgaver]<br/>Duntøffler <br/>Koster 1m MYK og $$$"',
	require:{
		softness: 1000000,
		money: 1000000,
		previousUpgrade: uWork3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: work1,
		itemModifier: 10
	}
},
uWork5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWork5",
	id: "uWork5",
	img: 'images/upgrades/work1.png',
	tooltip: '"[Ekstra Oppgaver]<br/>Skreddersydde Crocs <br/>Koster 25m MYK og $$$"',
	require:{
		softness: 25000000,
		money: 25000000,
		previousUpgrade: uWork4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: work1,
		itemModifier: 30
	}
},
uExtraFag1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uExtraFag1",
	id: "uExtraFag1",
	img: 'images/upgrades/extraFag1.png',
	tooltip: '"[Ekstra Fag]<br/>Kjøp briller: lær mer av fagene og tjen mer  <br/>Koster 10,000 MYK og $$$"',
	require:{
		softness: 10000,
		money: 10000,
		previousUpgrade: uWork1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: extraFag,
		itemModifier: 4
	}
},
uExtraFag2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uExtraFag2",
	id: "uExtraFag2",
	img: 'images/upgrades/extraFag1.png',
	tooltip: '"[Ekstra Fag]<br/>Leopardbriller  <br/>Koster 250,000 MYK og $$$"',
	require:{
		softness: 250000,
		money: 250000,
		previousUpgrade: uExtraFag1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: extraFag,
		itemModifier: 8
	}
},
uExtraFag3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uExtraFag3",
	id: "uExtraFag3",
	img: 'images/upgrades/extraFag1.png',
	tooltip: '"[Ekstra Fag]<br/>Linsedeal <br/>Koster 5m MYK og $$$"',
	require:{
		softness: 5000000,
		money: 5000000,
		previousUpgrade: uExtraFag2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: extraFag,
		itemModifier: 20
	}
},
uExtraFag4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uExtraFag4",
	id: "uExtraFag4",
	img: 'images/upgrades/extraFag1.png',
	tooltip: '"[Ekstra Fag]<br/>Gyldne briller  <br/>Koster 10m MYK og $$$"',
	require:{
		softness: 10000000,
		money: 10000000,
		previousUpgrade: uExtraFag3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: extraFag,
		itemModifier: 40
	}
},
uExtraFag5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uExtraFag5",
	id: "uExtraFag5",
	img: 'images/upgrades/extraFag1.png',
	tooltip: '"[Ekstra Fag]<br/>Laseroperasjon <br/>Koster 100m MYK og $$$"',
	require:{
		softness: 100000000,
		money: 100000000,
		previousUpgrade: uExtraFag4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: extraFag,
		itemModifier: 100
	}
},
uWeekendWork1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWeekendWork1",
	id: "uWeekendWork1",
	img: 'images/upgrades/weekendWork1.png',
	tooltip: '"[Ekstra Helgejobb]<br/>Micromat: Ork mer og tjen mer <br/>Koster 50,000 MYK og $$$"',
	require:{
		softness: 50000,
		money: 50000,
		previousUpgrade: uExtraFag1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: weekendWork,
		itemModifier: 10
	}
},
uWeekendWork2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWeekendWork2",
	id: "uWeekendWork2",
	img: 'images/upgrades/weekendWork1.png',
	tooltip: '"[Ekstra Helgejobb]<br/>Vegetarmat fra Sverige <br/>Koster 150,000 MYK og $$$"',
	require:{
		softness: 150000,
		money: 150000,
		previousUpgrade: uWeekendWork1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: weekendWork,
		itemModifier: 20
	}
},
uWeekendWork3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWeekendWork3",
	id: "uWeekendWork3",
	img: 'images/upgrades/weekendWork1.png',
	tooltip: '"[Ekstra Helgejobb]<br/>Toro Gourmet Ferdigmat <br/>Koster 15m MYK og $$$"',
	require:{
		softness: 15000000,
		money: 15000000,
		previousUpgrade: uWeekendWork2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: weekendWork,
		itemModifier: 40
	}
},
uWeekendWork4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWeekendWork4",
	id: "uWeekendWork4",
	img: 'images/upgrades/weekendWork1.png',
	tooltip: '"[Ekstra Helgejobb]<br/>Hellstrøms egene restemiddag<br/>Koster 150m MYK og $$$"',
	require:{
		softness: 150000000,
		money: 150000000,
		previousUpgrade: uWeekendWork3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: weekendWork,
		itemModifier: 100
	}
},
uWeekendWork5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWeekendWork5",
	id: "uWeekendWork5",
	img: 'images/upgrades/weekendWork1.png',
	tooltip: '"[Ekstra Helgejobb]<br/>Fryst Fæbbens  <br/>Koster 500m MYK og $$$"',
	require:{
		softness: 500000000,
		money: 500000000,
		previousUpgrade: uWeekendWork4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: weekendWork,
		itemModifier: 150
	}
},
uWorkCourse1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWorkCourse1",
	id: "uWorkCourse1",
	img: 'images/upgrades/workCourse1.png',
	tooltip: '"[Jobbkurs]<br/>Myk pute: få med deg mer på kurs og fortjen mer lønn <br/>Koster 200,000 MYK og $$$"',
	require:{
		softness: 200000,
		money: 200000,
		previousUpgrade: uWeekendWork1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: workCourse,
		itemModifier: 30
	}
},
uWorkCourse2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWorkCourse2",
	id: "uWorkCourse2",
	img: 'images/upgrades/workCourse1.png',
	tooltip: '"[Jobbkurs]<br/>Dunpute <br/>Koster 400,000 MYK og $$$"',
	require:{
		softness: 400000,
		money: 400000,
		previousUpgrade: uWorkCourse1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: workCourse,
		itemModifier: 60
	}
},
uWorkCourse3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWorkCourse3",
	id: "uWorkCourse3",
	img: 'images/upgrades/workCourse1.png',
	tooltip: '"[Jobbkurs]<br/>Vannpute <br/>Koster 30m MYK og $$$"',
	require:{
		softness: 30000000,
		money: 30000000,
		previousUpgrade: uWorkCourse2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: workCourse,
		itemModifier: 200
	}
},
uWorkCourse4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWorkCourse4",
	id: "uWorkCourse4",
	img: 'images/upgrades/workCourse1.png',
	tooltip: '"[Jobbkurs]<br/>Fløyelspute <br/>Koster 300m MYK og $$$"',
	require:{
		softness: 300000000,
		money: 300000000,
		previousUpgrade: uWorkCourse3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: workCourse,
		itemModifier: 400
	}
},
uWorkCourse5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uWorkCourse5",
	id: "uWorkCourse5",
	img: 'images/upgrades/workCourse1.png',
	tooltip: '"[Jobbkurs]<br/>Prinsessepute <br/>Koster 1b MYK og $$$"',
	require:{
		softness: 1000000000,
		money: 1000000000,
		previousUpgrade: uWorkCourse4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: workCourse,
		itemModifier: 800
	}
},
uMoreUsers1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uMoreUsers1",
	id: "uMoreUsers1",
	img: 'images/upgrades/moreUsers1.png',
	tooltip: '"[Flere Brukere]<br/>GPS Tracking: Du mister ikke brukerne og tjener mer <br/>Koster 4m MYK og $$$"',
	require:{
		softness: 4000000,
		money: 4000000,
		previousUpgrade: uWorkCourse1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: moreUsers,
		itemModifier: 80
	}
},
uMoreUsers2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uMoreUsers2",
	id: "uMoreUsers2",
	img: 'images/upgrades/moreUsers1.png',
	tooltip: '"[Flere Brukere]<br/>Færre Krav <br/>Koster 75m MYK og $$$"',
	require:{
		softness: 75000000,
		money: 75000000,
		previousUpgrade: uMoreUsers1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: moreUsers,
		itemModifier: 300
	}
},
uMoreUsers3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uMoreUsers3",
	id: "uMoreUsers3",
	img: 'images/upgrades/moreUsers1.png',
	tooltip: '"[Flere Brukere]<br/>Independent Brukere <br/>Koster 350m MYK og $$$"',
	require:{
		softness: 350000000,
		money: 350000000,
		previousUpgrade: uMoreUsers2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: moreUsers,
		itemModifier: 700
	}
},
uMoreUsers4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uMoreUsers4",
	id: "uMoreUsers4",
	img: 'images/upgrades/moreUsers1.png',
	tooltip: '"[Flere Brukere]<br/>Hyggelige Pårørende <br/>Koster 1b MYK og $$$"',
	require:{
		softness: 1000000000,
		money: 1000000000,
		previousUpgrade: uMoreUsers3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: moreUsers,
		itemModifier: 1200
	}
},
uMoreUsers5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uMoreUsers5",
	id: "uMoreUsers5",
	img: 'images/upgrades/moreUsers1.png',
	tooltip: '"[Flere Brukere]<br/>100% Kravløse Brukere <br/>Koster 2b MYK og $$$"',
	require:{
		softness: 2000000000,
		money: 2000000000,
		previousUpgrade: uMoreUsers4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: moreUsers,
		itemModifier: 3000
	}
},
uResponsibility1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uResponsibility1",
	id: "uResponsibility1",
	img: 'images/upgrades/responsibility1.png',
	tooltip: '"[Mer ansvar]<br/>TV på pauserommet: Bedre pauser gjør at du orker å tjene mer <br/>Koster 50m MYK og $$$"',
	require:{
		softness: 50000000,
		money: 50000000,
		previousUpgrade: uMoreUsers1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: responsibility,
		itemModifier: 200
	}
},
uResponsibility2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uResponsibility2",
	id: "uResponsibility2",
	img: 'images/upgrades/responsibility1.png',
	tooltip: '"[Mer ansvar]<br/>Sovesofa <br/>Koster 250m MYK og $$$"',
	require:{
		softness: 250000000,
		money: 250000000,
		previousUpgrade: uResponsibility1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: responsibility,
		itemModifier: 500
	}
},
uResponsibility3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uResponsibility3",
	id: "uResponsibility3",
	img: 'images/upgrades/responsibility1.png',
	tooltip: '"[Mer ansvar]<br/>Massasjestol <br/>Koster 2,5b MYK og $$$"',
	require:{
		softness: 2500000000,
		money: 2500000000,
		previousUpgrade: uResponsibility2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: responsibility,
		itemModifier: 1000
	}
},
uResponsibility4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uResponsibility4",
	id: "uResponsibility4",
	img: 'images/upgrades/responsibility1.png',
	tooltip: '"SLAVE <br/>[Mer ansvar]<br/>Softis Dispenser 5b MYK og $$$"',
	require:{
		softness: 5000000000,
		money: 5000000000,
		previousUpgrade: uResponsibility3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: responsibility,
		itemModifier: 2000
	}
},
uResponsibility5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uResponsibility5",
	id: "uResponsibility5",
	img: 'images/upgrades/responsibility1.png',
	tooltip: '"[Mer ansvar]<br/>Smågodthylle <br/>Koster 1t MYK og $$$"',
	require:{
		softness: 1000000000000,
		money: 1000000000000,
		previousUpgrade: uResponsibility4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: responsibility,
		itemModifier: 10000
	}
},
uClick1 = {
	enabled: false,
	bought: false,
	show: true,
	name: "uClick1",
	id: "uClick1",
	img: 'images/upgrades/magicFinger.png',
	tooltip: '"Magisk Finger <br/> Klikk gir 5% av MYK/$$$ <br/>Koster 100 MYK og $$$"',
	require:{
		softness: 100,
		money: 100,
		previousUpgrade: true
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: 2,
		clickPercent: 0.1
	}
},
uClick2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uClick2",
	id: "uClick2",
	img: 'images/upgrades/magicFinger.png',
	tooltip: '"Magisk Finger 2 <br/> Klikk gir 20% av MYK/$$$ <br/>Koster 50,000 MYK og $$$"',
	require:{
		softness: 50000,
		money: 50000,
		previousUpgrade: uClick1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: 3,
		clickPercent: 0.1
	}
},
uClick3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uClick3",
	id: "uClick3",
	img: 'images/upgrades/magicFinger.png',
	tooltip: '"Magisk Finger 3 <br/> Klikk gir 30% av MYK/$$$<br/>Koster 500,000 MYK og $$$"',
	require:{
		softness: 500000,
		money: 500000,
		previousUpgrade: uClick2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: 4,
		clickPercent: 0.1
	}
},
uClick4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uClick4",
	id: "uClick4",
	img: 'images/upgrades/magicFinger.png',
	tooltip: '"Magisk Finger 4 <br/> Klikk gir 40% av MYK/$$$<br/>Koster 5m MYK og $$$"',
	require:{
		softness: 5000000,
		money: 5000000,
		previousUpgrade: uClick3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: 5,
		clickPercent: 0.05
	}
},
uClick5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uClick5",
	id: "uClick5",
	img: 'images/upgrades/magicFinger.png',
	tooltip: '"Magisk Finger 5 <br/> Klikk gir 50%  av MYK/$$$<br/>Koster 500m MYK og $$$"',
	require:{
		softness: 500000000,
		money: 500000000,
		previousUpgrade: uClick4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: 10,
		clickPercent: 0.1
	}
},
uBonusMoneyPercent1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusMoneyPercent1",
	id: "uBonusMoneyPercent1",
	img: 'images/upgrades/bonusPercent1_w.png',
	tooltip: '"Tjen 10% $$$ Selv om det er kosetid <br/>Koster 5000 MYK og $$$"',
	require:{
		softness: 5000,
		money: 5000,
		previousUpgrade: uClick1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0.05,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
},uBonusMoneyPercent2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusMoneyPercent2",
	id: "uBonusMoneyPercent2",
	img: 'images/upgrades/bonusPercent2_w.png',
	tooltip: '"Tjen 20% $$$ Selv om det er kosetid <br/>Koster 100,000 MYK og $$$"',
	require:{
		softness: 100000,
		money: 100000,
		previousUpgrade: uBonusMoneyPercent1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0.02,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
},uBonusMoneyPercent3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusMoneyPercent3",
	id: "uBonusMoneyPercent3",
	img: 'images/upgrades/bonusPercent3_w.png',
	tooltip: '"Tjen 30% $$$ Selv om det er kosetid <br/>Koster 1m MYK og $$$"',
	require:{
		softness: 1000000,
		money: 1000000,
		previousUpgrade: uBonusMoneyPercent2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0.03,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
},uBonusMoneyPercent4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusMoneyPercent4",
	id: "uBonusMoneyPercent4",
	img: 'images/upgrades/bonusPercent4_w.png',
	tooltip: '"Tjen 40% $$$ Selv om det er kosetid <br/>Koster 100m MYK og $$$"',
	require:{
		softness: 100000000,
		money: 100000000,
		previousUpgrade: uBonusMoneyPercent3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0.05,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
},uBonusMoneyPercent5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusMoneyPercent5",
	id: "uBonusMoneyPercent5",
	img: 'images/upgrades/bonusPercent5_w.png',
	tooltip: '"Tjen 50% $$$ Selv om det er kosetid <br/>Koster 500m MYK og $$$"',
	require:{
		softness: 500000000,
		money: 500000000,
		previousUpgrade: uBonusMoneyPercent4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0.05,
		bonusSoftnessPercent:0,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
},
uBonusSoftnessPercent1 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusSoftnessPercent1",
	id: "uBonusSoftnessPercent1",
	img: 'images/upgrades/bonusPercent1.png',
	tooltip: '"Tjen 10% MYK Selv om det er jobbetid <br/>Koster 5000 MYK og $$$"',
	require:{
		softness: 5000,
		money: 5000,
		previousUpgrade: uClick1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0.05,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
},uBonusSoftnessPercent2 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusSoftnessPercent2",
	id: "uBonusSoftnessPercent2",
	img: 'images/upgrades/bonusPercent2.png',
	tooltip: '"Tjen 20% MYK Selv om det er jobbetid <br/>Koster 100,000 MYK og $$$"',
	require:{
		softness: 100000,
		money: 100000,
		previousUpgrade: uBonusSoftnessPercent1
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0.02,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
},uBonusSoftnessPercent3 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusSoftnessPercent3",
	id: "uBonusSoftnessPercent3",
	img: 'images/upgrades/bonusPercent3.png',
	tooltip: '"Tjen 30% MYK Selv om det er jobbetid <br/>Koster 1m MYK og $$$"',
	require:{
		softness: 1000000,
		money: 1000000,
		previousUpgrade: uBonusSoftnessPercent2
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0.03,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
},uBonusSoftnessPercent4 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusSoftnessPercent4",
	id: "uBonusSoftnessPercent4",
	img: 'images/upgrades/bonusPercent4.png',
	tooltip: '"Tjen 40% MYK Selv om det er jobbetid <br/>Koster 100m MYK og $$$"',
	require:{
		softness: 100000000,
		money: 100000000,
		previousUpgrade: uBonusSoftnessPercent3
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0.05,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
},uBonusSoftnessPercent5 = {
	enabled: false,
	bought: false,
	show: false,
	name: "uBonusSoftnessPercent5",
	id: "uBonusSoftnessPercent5",
	img: 'images/upgrades/bonusPercent5.png',
	tooltip: '"Tjen 50% MYK Selv om det er jobbetid <br/>Koster 500m MYK og $$$"',
	require:{
		softness: 500000000,
		money: 500000000,
		previousUpgrade: uBonusSoftnessPercent4
	},
	give:{
		moneyMod:0,
		softnessMod:0,
		bonusMoneyPercent:0,
		bonusSoftnessPercent:0.05,
		item: null,
		itemModifier: 0,
		clickMod: null
	}
};

var hWeekendTrip = {
	baseCost: 20
};

//STATS
var statsEnabled = false;
function toggleStats() {
	if(!statsEnabled) {
		document.getElementById("statisticWindow").style.display = "inline";
		statsEnabled = true;
	} else if(statsEnabled) {
		document.getElementById("statisticWindow").style.display = "none";
		statsEnabled = false;
	}
}

//>>>>>>>>>>NOTIFICATIONS<<<<<<<<<<

//>>>>>>>>>>HOLIDAY MODDE<<<<<<<<<<
var holidayMoney = 0;
var holidaySoftness = 0;

var onHoliday = false;
document.getElementById("holidaySelect").disabled = true;
document.getElementById("holidaySelect").style.display = "none";

function saveForHoliday(type) {
	if(type == 2 && money >= 1000000000) {
		money -= 1000000000;
		holidayMoney += 1;
	} else if(type == 1 && softness >= 1000000000) {
		softness -= 1000000000;
		holidaySoftness += 1;
	}
	document.getElementById("holidaySoftness").innerHTML = holidaySoftness + " PP";
	document.getElementById("holidayMoney").innerHTML = holidayMoney  + " FP";
};

function selectHoliday(selection) {
	if(onHoliday == false) {
		if(selection == 0 ) {
			document.getElementById("holidaySelect").disabled = true;
			document.getElementById("holidaySelect").style.display = "none";
		}
		if(selection == 1 ) {
			document.getElementById("holidaySelect").disabled = false;
			document.getElementById("holidaySelect").style.display = "inline";
		}
		if(selection == 2 ) {
			document.getElementById("holidaySelect").disabled = true;
			document.getElementById("holidaySelect").style.display = "none";
			onHoliday = true;
		}
	}
	if(selection == 3) {
			onHoliday = false;
		}
}

function updateHoliday() {
	if(onHoliday == true) {
		document.getElementById("holidayWindow").disabled = false;
		document.getElementById("holidayWindow").style.display = "inline";
	} else {
		document.getElementById("holidayWindow").disabled = true;
		document.getElementById("holidayWindow").style.display = "none";
	}
}

//>>>>>>>>>>DAILYBONUS<<<<<<<<<<

var dailyBonusRemaining = 4;
var dailyBonusCounter = 0;
var dailyBonusVar = 1;
var dailyBonusClicked = false;
var dailyBonusShowPicCounter = 0;
var dailyBonusShowPic = false;

function clickDailyBonus (opt) {
	if(opt == 1) {
		if (dailyBonusCounter <= 0) {
			//document.getElementById("debugWindow").style.display = "inline";
			dailyBonusClicked = true;
			document.getElementById("bonusLeft").innerHTML = dailyBonusRemaining;
			if(dailyBonusRemaining >= 1) {
				document.getElementById("activateBonus").disabled = false;
			} else {
				document.getElementById("activateBonus").disabled = true;
			}
		}
	}
	if (opt == 2) {
		if (dailyBonusRemaining > 0) {
			dailyBonusShowPicCounter = 13;
			dailyBonusShowPic = true;
			dailyBonusRemaining -= 1;
		}
	}
	if (opt == 3) {
		dailyBonusClicked = false;
	}
};

function CheckDailyBonus () {
	if(currentDate != lastBonusDate) {
		dailyBonusRemaining = 4;
		lastBonusDate = currentDate;

	}
	if(dailyBonusCounter > 0) {
		dailyBonusVar = 1.5;
		dailyBonusCounter -= 1;
		document.getElementById("bonusButton").disabled = true;
		document.getElementById("bonusButton").style.opacity = 0.2;
	} else {
		dailyBonusVar = 1;
		document.getElementById("bonusButton").disabled = false;
		document.getElementById("bonusButton").style.opacity = 1;
	}

	if(dailyBonusClicked == true) {
		document.getElementById("bonusWindow").disabled = false;
		document.getElementById("bonusWindow").style.display = "inline";
		if(dailyBonusShowPicCounter > 0 )  {
			document.getElementById("bonusWindowPic").style.display ="inline";
			document.getElementById("bonusWindowConfirm").style.display ="none";
			dailyBonusShowPicCounter -= 1;
		} else if(dailyBonusShowPicCounter <= 0 && dailyBonusShowPic == true) {
			lastBonusDate = moment().format('dddd');
			dailyBonusCounter = 10800;
			dailyBonusClicked = false;
			dailyBonusShowPic = false;


		} else if(dailyBonusShowPicCounter <=0 && dailyBonusShowPic == false) {
			document.getElementById("bonusWindowConfirm").style.display ="inline";
			document.getElementById("bonusWindowPic").style.display ="none";
		}
	} else if(dailyBonusClicked == false) {
		document.getElementById("bonusWindow").disabled = true;
		document.getElementById("bonusWindow").style.display = "none";
		document.getElementById("bonusWindow").style.opacity = "1";
		document.getElementById("bonusWindowConfirm").style.display ="inline";
	}
	document.getElementById("bonusWindowPicTimer").value = dailyBonusShowPicCounter;
	document.getElementById("bonusCounterBar").value = dailyBonusCounter;
};


//>>>>>>>>>>UPGRADES<<<<<<<<<<
//>>>>>>>>>>UPGRADES<<<<<<<<<<
//>>>>>>>>>>UPGRADES<<<<<<<<<<
//>>>>>>>>>>UPGRADES<<<<<<<<<<
var upgrades = [uClothes1, uClothes2, uClothes3, uClothes4, uClothes5,
				uBerliner1, uBerliner2, uBerliner3, uBerliner4, uBerliner5,
				uAlkohol1, uAlkohol2, uAlkohol3, uAlkohol4, uAlkohol5,
				uTakeOut1, uTakeOut2, uTakeOut3, uTakeOut4, uTakeOut5,
				uVacation1, uVacation2, uVacation3, uVacation4, uVacation5,
				uSlave1, uSlave2, uSlave3, uSlave4, uSlave5,

				uWork1, uWork2, uWork3, uWork4, uWork5,
				uExtraFag1, uExtraFag2, uExtraFag3, uExtraFag4, uExtraFag5,
				uWeekendWork1, uWeekendWork2, uWeekendWork3, uWeekendWork4, uWeekendWork5,
				uWorkCourse1, uWorkCourse2, uWorkCourse3, uWorkCourse4, uWorkCourse5,
				uMoreUsers1, uMoreUsers2, uMoreUsers3, uMoreUsers4, uMoreUsers5,
				uResponsibility1, uResponsibility2, uResponsibility3, uResponsibility4, uResponsibility5,

				uClick1, uClick2, uClick3, uClick4, uClick5,
				uBonusSoftnessPercent1, uBonusSoftnessPercent2, uBonusSoftnessPercent3, uBonusSoftnessPercent4, uBonusSoftnessPercent5,
				uBonusMoneyPercent1, uBonusMoneyPercent2, uBonusMoneyPercent3, uBonusMoneyPercent4, uBonusMoneyPercent5
				];
displayUpgrades();
function calculateMods() {

	softnessMod = 
	((clothes.total * clothes.give.softnessMod) +
	(berliner.total * berliner.give.softnessMod) +
	(alkohol.total * alkohol.give.softnessMod) +
	(takeout.total * takeout.give.softnessMod) +
	(vacation.total * vacation.give.softnessMod) +
	(slave.total * slave.give.softnessMod))*dailyBonusVar
	;




	moneyMod = 
	((work1.total * work1.give.moneyMod) +
	(extraFag.total * extraFag.give.moneyMod) +
	(weekendWork.total * weekendWork.give.moneyMod) +
	(workCourse.total * workCourse.give.moneyMod) +
	(moreUsers.total * moreUsers.give.moneyMod) +
	(responsibility.total * responsibility.give.moneyMod))*dailyBonusVar
	;
};
function updateAvailableUpgrades() {	
	var arrayLength = upgrades.length;
	for(var i = 0; i < arrayLength; i++) {
		if(upgrades[i].show == true) {
		if(money < upgrades[i].require.money && softness < upgrades[i].require.softness || money > upgrades[i].require.money && softness < upgrades[i].require.softness || money < upgrades[i].require.money && softness > upgrades[i].require.softness && upgrades[i].enabled == false) {
			document.getElementById(upgrades[i].name).disabled = false;
			document.getElementById(upgrades[i].name).style.display = "inline";
			document.getElementById(upgrades[i].name).style.opacity = "0.5";
		} else if(money > upgrades[i].require.money && softness > upgrades[i].require.softness && upgrades[i].enabled == false) {
			document.getElementById(upgrades[i].name).disabled = false;
			document.getElementById(upgrades[i].name).style.display = "inline";
			document.getElementById(upgrades[i].name).style.opacity = "1";
		} else if (upgrades[i].enabled == true) {
			document.getElementById(upgrades[i].name).disabled = true;
			document.getElementById(upgrades[i].name).style.display = "none";
		}
		if(upgrades[i].bought == true && upgrades[i].enabled == false) {
			buyUpgrade(upgrades[i]);
			document.getElementById(upgrades[i].name).disabled = true;
			document.getElementById(upgrades[i].name).style.display = "none";
		} else if(upgrades[i].bought == true && upgrades[i].enabled == true) {
			document.getElementById(upgrades[i].name).disabled = true;
			document.getElementById(upgrades[i].name).style.display = "none";
		}
	} else {
		document.getElementById(upgrades[i].name).disabled = true;
			document.getElementById(upgrades[i].name).style.display = "none";
	}
	if(upgrades[i].require.previousUpgrade.enabled == true){
		upgrades[i].show = true;
	}
	}
};

function buyUpgrade(name) {
	if(name.bought == false) {

	if(softness >= name.require.softness && money >= name.require.money) {
		name.enabled = true;
		
		
			money -= name.require.money;
			softness -= name.require.softness;
		
		softnessMod += name.give.softnessMod;
		moneyMod += name.give.moneyMod;
		bonusSoftnessPercent += name.give.bonusSoftnessPercent;
		bonusMoneyPercent += name.give.bonusMoneyPercent;
		name.bought = true;
		hideTooltip();
		updateAvailableUpgrades();
		//displayUpgrades();

		if(name.give.item != null) {
			if(name.give.item.give.softnessMod > 0) {
				name.give.item.give.softnessMod += name.give.itemModifier;
			} else {
				name.give.item.give.moneyMod += name.give.itemModifier;
			}
		}

		if(name.give.clickMod != null) {
			tickleClickMod = name.give.clickMod;
		}
		if(name.give.clickPercent != null) {
			clickPercent += name.give.clickPercent;
		}
	}
	} else {
		name.enabled = true;
		
		
			
		
		softnessMod += name.give.softnessMod;
		moneyMod += name.give.moneyMod;
		bonusSoftnessPercent += name.give.bonusSoftnessPercent;
		bonusMoneyPercent += name.give.bonusMoneyPercent;
		name.bought = true;
		hideTooltip();
		updateAvailableUpgrades();
		//displayUpgrades();

		if(name.give.item != null) {
			if(name.give.item.give.softnessMod > 0) {
				name.give.item.give.softnessMod += name.give.itemModifier;
			} else {
				name.give.item.give.moneyMod += name.give.itemModifier;
			}
		}

		if(name.give.clickMod != null) {
			tickleClickMod = name.give.clickMod;
		}
	}
};
function displayUpgrades() {
	var arrayLength = upgrades.length;
	document.getElementById("upgradeBox").innerHTML = null;
	for(var i = 0; i < arrayLength; i++) {
		document.getElementById("upgradeBox").innerHTML += "<button class='upgradeButton' id='"+upgrades[i].name+"' onClick='buyUpgrade("+upgrades[i].id+")' onmouseover='showTooltip("+upgrades[i].tooltip+")' onmouseout='hideTooltip()' style='background-image:url("+ upgrades[i].img+")'> </button>";
	}
};
//>>>>>>>>>>EVENTS<<<<<<<<<<
//>>>>>>>>>>EVENTS<<<<<<<<<<
//>>>>>>>>>>EVENTS<<<<<<<<<<
//>>>>>>>>>>EVENTS<<<<<<<<<<
//>>>>>>>>>>EVENTS<<<<<<<<<<

// RESIZE EVENT TEXT
function checkForEvent(checkEvent) {
	var rnum = Math.floor((Math.random() * checkEvent.ticks) + 1);
	if (rnum == checkEvent.ticks && eventSpawned == false && (checkEvent.mode == currentMode || checkEvent.mode ==3) && hungerMod > 0 && softnessMod > 0) {
		spawnEvent(checkEvent);
	}
};


function closeEventWindow() {
	document.getElementById("eventWindow").style.display = "none";
	eventSpawned = false;
};

function spawnEvent(eventId) {
	document.getElementById("eventWindow").style.display = "inline-block";
	document.getElementById("eventTitle").innerHTML = eventId.title;
	document.getElementById("eventPic").style.backgroundImage = "url("+eventId.picId+")";
	document.getElementById("eventText").innerHTML = eventId.text;
	document.getElementById("eventButton1").innerHTML = eventId.opt1Text;
	document.getElementById("eventButton1").setAttribute("onClick",eventId.opt11+eventId.opt12+"closeEventWindow();");
	if(eventId.opt12num) {
		document.getElementById("eventButton1").setAttribute("onmouseover","showTooltip("+eventId.opt11Tooltip+"+"+eventId.opt11num+"+"+eventId.opt12Tooltip+"+"+eventId.opt12num+");");
	} else if(!eventId.opt12num) {
		document.getElementById("eventButton1").setAttribute("onmouseover","showTooltip("+eventId.opt11Tooltip+"+"+eventId.opt11num+");");
	}
	document.getElementById("eventButton2").innerHTML = eventId.opt2Text;
	document.getElementById("eventButton2").setAttribute("onClick",eventId.opt21+eventId.opt22+"closeEventWindow();");
	if(eventId.opt22num) {
		document.getElementById("eventButton2").setAttribute("onmouseover","showTooltip("+eventId.opt21Tooltip+"+"+eventId.opt21num+"+"+eventId.opt22Tooltip+"+"+eventId.opt22num+");");
	} else if(!eventId.opt22num) {
		document.getElementById("eventButton2").setAttribute("onmouseover","showTooltip("+eventId.opt21Tooltip+"+"+eventId.opt21num+");");
	}
	
	//window.fitText( document.getElementById("eventTitle"));
	eventSpawned = true;
};

//>>>>>>>>>>MODES<<<<<<<<<<
//>>>>>>>>>>MODES<<<<<<<<<<
//>>>>>>>>>>MODES<<<<<<<<<<
//>>>>>>>>>>MODES<<<<<<<<<<
//>>>>>>>>>>MODES<<<<<<<<<<

function getCurrentMode(type) {
	if(type == 1) {
		return "Chill"; //LOCALISATION
	}
	if(type == 2) {
		return "Work";	//LOCALISATION
	}
};

function setMode(newMode) {
	if(currentMode != newMode) {
		currentMode = newMode;
		updateAvailableButtons()
		draw();
	}
	return currentMode;
};

function toggleMode() {
	if(currentMode == 1) {
		setMode(2);
		document.getElementById("workButton").click();
	} else if(currentMode == 2) {
		setMode(1);
		document.getElementById("chillButton").click();
	}
};

$(window).keypress(function(e) {
  if (e.keyCode == 0 || e.keyCode == 32) {
    toggleMode();
  }
});


//ADD FUNCTIONS

function clickTickleButton() {
	$('#tickleClickButton').pburst({duration: 500});
	$('#tickleClickButton').pburst({partoffset: 60});
	if(currentMode == 1) {
		for(i=0; i < tickleClickMod; i ++) {
			$('#tickleClickButton').pburst({particle: 'schnii.png'});
			$('#tickleClickButton').pburst('create_part');
		}
		addSoftness(tickleClickMod + (softnessMod * clickPercent));
		clickTotal += 1;
		console.log(tickleClickMod + (softnessMod * clickPercent));
	} else if(currentMode == 2) {
		for(i=0; i < tickleClickMod; i ++) {
			$('#tickleClickButton').pburst({particle: 'uff.png'});
			$('#tickleClickButton').pburst('create_part');
		}
		addMoney(tickleClickMod + (moneyMod * clickPercent));
		clickTotal += 1;

	}

};

function spawnSingleParticle(pos,img) {
	$(pos).pburst({duration: 500});
	$(pos).pburst({partoffset: 50});
	$(pos).pburst({particle: img});
	$(pos).pburst('create_part');
};
function spawnParticleBurst(pos,img,num) {
	$(pos).pburst({duration: 100});
	$(pos).pburst({partoffset: 100});
	$(pos).pburst({particle: img});
	$(pos).pburst('burst_part', num);
};
//$('#emitter').pburst('burst_part', 5);

function addHoursOfIncome(type, num) {
	if(type == "softness") {
		softness = softness + ((softnessMod * 60) * num);

	}
	if(type == "money") {

		money = money + ((moneyMod * 60) * num);
	}
};

function returnHoursOfIncome(type, num) {
	if(type == "softness") {
		if(beautify(((softnessMod * 60) * num))>0) {
			//document.getElementById("tooltip").style.color = "green";
			return "<span style='color:green'>"+numeral(beautify(((softnessMod * 60) * num))).format('0.0a') + " MYK" + "</span>";
		}
		if(beautify(((softnessMod * 60) * num))<0) {
			//document.getElementById("tooltip").style.color = "red";
			return "<span style='color:red'>"+numeral(beautify(((softnessMod * 60) * num))).format('0.0a') + " MYK" + "</span>";
		}
	}
	if(type == "money") {
		if(beautify(((moneyMod * 60) * num)) > 0) {
			//document.getElementById("tooltip").style.color = "green";
			return "<span style='color:green'>"+numeral(beautify(((moneyMod * 60) * num))).format('0.0a') + " $$$" + "</span>";
		}
		if(beautify(((moneyMod * 60) * num)) < 0) {
			//document.getElementById("tooltip").style.color = "red";
			return "<span style='color:red'>"+numeral(beautify(((moneyMod * 60) * num))).format('0.0a') + " $$$" + "</span>";
		}
	}
};

function addSoftness(number) {
	softness = softness + number;
	softnessThisSession = softnessThisSession + number;
	softnessTotal = softnessTotal + number;
	draw();
};
function addMoney(number) {
	
		money = money + number;
		moneyThisSession = moneyThisSession + number;
		moneyTotal = moneyTotal + number;
		draw();
	
};

//PURCHASING AND MAKING ACTIONS
function makeAction(action) {
	if(softness >= action.require.softness && money >= action.require.money) {
		softness = softness - action.require.softness;
		money = money + action.give.money;
	}
};

function buyItem(item) {
	//Check if you have the resources
	if(item.require.softness == 0) {
		if(money >= item.require.money) {
			item.total = item.total + 1;
			money = money - item.require.money;
			updateRequirements(item);
			updateAvailableButtons();
			spawnParticleBurst('#tickleClickButton',item.img,5);
		}
	} else {
		if(softness >= item.require.softness) {
			item.total = item.total + 1;
			softness = softness - item.require.softness;
			updateRequirements(item);
			updateAvailableButtons();
			spawnParticleBurst('#tickleClickButton',item.img,5);
		}
	}
	draw();
};

//update the requirement/price of the action/item
function updateRequirements(item) {
	if(item == clothes) {
		clothes.require.money = Math.ceil(clothes.baseprice * Math.pow(1.15,clothes.total));
		document.getElementById("clothes1price").innerHTML = beautify(clothes.require.money);
	}
	if(item == berliner) {
		berliner.require.money = Math.ceil(berliner.baseprice * Math.pow(1.15,berliner.total));
		document.getElementById("berlinerPrice").innerHTML = beautify(berliner.require.money);
	}
	if(item == alkohol) {
		alkohol.require.money = Math.ceil(alkohol.baseprice * Math.pow(1.15,alkohol.total));
		document.getElementById("alkoholPrice").innerHTML = beautify(alkohol.require.money);
	}
	if(item == takeout) {
		takeout.require.money = Math.ceil(takeout.baseprice * Math.pow(1.15,takeout.total));
		document.getElementById("takeoutPrice").innerHTML = beautify(takeout.require.money);
	}
	if(item == vacation) {
		vacation.require.money = Math.ceil(vacation.baseprice * Math.pow(1.15,vacation.total));
		document.getElementById("vacationPrice").innerHTML = beautify(vacation.require.money);
	}
	if(item == slave) {
		slave.require.money = Math.ceil(slave.baseprice * Math.pow(1.15,slave.total));
		document.getElementById("slavePrice").innerHTML = beautify(slave.require.money);
	}
	if(item == work1) {
		work1.require.softness = Math.ceil(work1.baseprice * Math.pow(1.15,work1.total));
		document.getElementById("work1price").innerHTML = beautify(work1.require.softness);
	}
	if(item == extraFag) {
		extraFag.require.softness = Math.ceil(extraFag.baseprice * Math.pow(1.15,extraFag.total));
		document.getElementById("extraFagPrice").innerHTML = beautify(extraFag.require.softness);
	}
	if(item == weekendWork) {
		weekendWork.require.softness = Math.ceil(weekendWork.baseprice * Math.pow(1.15,weekendWork.total));
		document.getElementById("weekendWorkPrice").innerHTML = beautify(weekendWork.require.softness);
	}
	if(item == workCourse) {
		workCourse.require.softness = Math.ceil(workCourse.baseprice * Math.pow(1.15,workCourse.total));
		document.getElementById("workCoursePrice").innerHTML = beautify(workCourse.require.softness);
	}
	if(item == moreUsers) {
		moreUsers.require.softness = Math.ceil(moreUsers.baseprice * Math.pow(1.15,moreUsers.total));
		document.getElementById("moreUsersPrice").innerHTML = beautify(moreUsers.require.softness);
	}
	if(item == responsibility) {
		responsibility.require.softness = Math.ceil(responsibility.baseprice * Math.pow(1.15,responsibility.total));
		document.getElementById("responsibilityPrice").innerHTML = beautify(responsibility.require.softness);
	}

};

function updateAvailableButtons() {
	//HIDE CHILL BUTTONS
	if(money < clothes.require.money) {
		document.getElementById("clothesButton").disabled = true;
		document.getElementById("clothesButton").style.opacity = "0.5";
	} else {
		document.getElementById("clothesButton").disabled = false;
		document.getElementById("clothesButton").style.opacity = "1";
	}
	
	if(clothes.total > 0) {
	if(money < berliner.require.money ) {
		document.getElementById("berlinerButton").disabled = true;
		document.getElementById("berlinerButton").style.opacity = "0.5";
	} else {
		document.getElementById("berlinerButton").disabled = false;
		document.getElementById("berlinerButton").style.opacity = "1";
	}
	} else {
		document.getElementById("berlinerButton").disabled = true;
		document.getElementById("berlinerButton").style.opacity = "0";
	}
	
	if(berliner.total > 0) {
	if(money < alkohol.require.money) {
		document.getElementById("alkoholButton").disabled = true;
		document.getElementById("alkoholButton").style.opacity = "0.5";
	} else {
		document.getElementById("alkoholButton").disabled = false;
		document.getElementById("alkoholButton").style.opacity = "1";
	}
	} else {
		document.getElementById("alkoholButton").disabled = true;
		document.getElementById("alkoholButton").style.opacity = "0";
	}
	
	if(alkohol.total > 0) {
	if(money < takeout.require.money) {
		document.getElementById("takeoutButton").disabled = true;
		document.getElementById("takeoutButton").style.opacity = "0.5";
	} else {
		document.getElementById("takeoutButton").disabled = false;
		document.getElementById("takeoutButton").style.opacity = "1";
	}
	} else {
		document.getElementById("takeoutButton").disabled = true;
		document.getElementById("takeoutButton").style.opacity = "0";
	}
	
	if(takeout.total > 0) {
	if(money < vacation.require.money) {
		document.getElementById("vacationButton").disabled = true;
		document.getElementById("vacationButton").style.opacity = "0.5";
	} else {
		document.getElementById("vacationButton").disabled = false;
		document.getElementById("vacationButton").style.opacity = "1";
	}
	} else {
		document.getElementById("vacationButton").disabled = true;
		document.getElementById("vacationButton").style.opacity = "0";
	}
	if(vacation.total > 0) {
	if(money < slave.require.money) {
		document.getElementById("slaveButton").disabled = true;
		document.getElementById("slaveButton").style.opacity = "0.5";
	} else {
		document.getElementById("slaveButton").disabled = false;
		document.getElementById("slaveButton").style.opacity = "1";
	}
	} else {
		document.getElementById("slaveButton").disabled = true;
		document.getElementById("slaveButton").style.opacity = "0";
	}
	//HIDE WORK BUTTONS
	if(softness < work1.require.softness) {
		document.getElementById("moreworkButton").disabled = true;
		document.getElementById("moreworkButton").style.opacity = "0.5";
	} else {
		document.getElementById("moreworkButton").disabled = false;
		document.getElementById("moreworkButton").style.opacity = "1";
	}
	
	if(work1.total > 0) {
	if(softness < extraFag.require.softness) {
		document.getElementById("extraFagButton").disabled = true;
		document.getElementById("extraFagButton").style.opacity = "0.5";
	} else {
		document.getElementById("extraFagButton").disabled = false;
		document.getElementById("extraFagButton").style.opacity = "1";
	}
	} else {
		document.getElementById("extraFagButton").disabled = true;
		document.getElementById("extraFagButton").style.opacity = "0";
	}
	
	if(extraFag.total > 0) {
	if(softness < weekendWork.require.softness) {
		document.getElementById("weekendWorkButton").disabled = true;
		document.getElementById("weekendWorkButton").style.opacity = "0.5";
	} else {
		document.getElementById("weekendWorkButton").disabled = false;
		document.getElementById("weekendWorkButton").style.opacity = "1";
	}
	} else {
		document.getElementById("weekendWorkButton").disabled = true;
		document.getElementById("weekendWorkButton").style.opacity = "0";
	}
	
	if(weekendWork.total > 0) {
	if(softness < workCourse.require.softness) {
		document.getElementById("workCourseButton").disabled = true;
		document.getElementById("workCourseButton").style.opacity = "0.5";
	} else {
		document.getElementById("workCourseButton").disabled = false;
		document.getElementById("workCourseButton").style.opacity = "1";
	}
	} else {
		document.getElementById("workCourseButton").disabled = true;
		document.getElementById("workCourseButton").style.opacity = "0";
	}
	
	if(workCourse.total > 0) {
	if(softness < moreUsers.require.softness) {
		document.getElementById("moreUsersButton").disabled = true;
		document.getElementById("moreUsersButton").style.opacity = "0.5";
	} else {
		document.getElementById("moreUsersButton").disabled = false;
		document.getElementById("moreUsersButton").style.opacity = "1";
	}
	} else {
		document.getElementById("moreUsersButton").disabled = true;
		document.getElementById("moreUsersButton").style.opacity = "0";
	}
	
	if(moreUsers.total > 0) {
	if(softness < responsibility.require.softness) {
		document.getElementById("responsibilityButton").disabled = true;
		document.getElementById("responsibilityButton").style.opacity = "0.5";
	} else {
		document.getElementById("responsibilityButton").disabled = false;
		document.getElementById("responsibilityButton").style.opacity = "1";
	}
	} else {
		document.getElementById("responsibilityButton").disabled = true;
		document.getElementById("responsibilityButton").style.opacity = "0";
	}
	/*
	//Upgrades
	if(money < bonus1.require.money && softness < bonus1.require.softness && bonus1.enabled == false) {
		document.getElementById("bonus1Button").disabled = true;
		document.getElementById("bonus1Button").style.opacity = "0.5";
	} else if(money > bonus1.require.money && softness > bonus1.require.softness && bonus1.enabled == false) {
		document.getElementById("bonus1Button").disabled = false;
		document.getElementById("bonus1Button").style.opacity = "1";
	} else if (bonus1.enabled == true) {
		document.getElementById("bonus1Button").disabled = true;
		document.getElementById("bonus1Button").style.display = "none";
	}*/
}

// TOOLTIP
function showTooltip(text) {
	document.getElementById("tooltip").style.opacity = 1;
	document.getElementById("tooltipText").innerHTML = text;
	$(document).mousemove(function(e){
    $("#tooltip").css({left:e.pageX+5, top:e.pageY+5});
});
}

function hideTooltip() {
	document.getElementById("tooltip").style.opacity = 0;
	$(document).mousemove(function(e){
    $("#tooltip").css({left:5, top:5});
});
}

//DRAW
function draw() {
	calculateMods();
	document.getElementById("softnessTotal").innerHTML = numeral(beautify(softnessTotal)).format('0.0a');
	document.getElementById("moneyTotal").innerHTML = numeral(beautify(moneyTotal)).format('0.0a');
	document.getElementById("clickTotal").innerHTML = numeral(beautify(clickTotal)).format('0.00a');
	//var number1 = numeral(12354).format('0.0a');
	//console.log(number1);
	//IMPORTANT NUMBER EASE
	// Original ammount 0.3
	softnessDisplay += (softness-softnessDisplay)*0.10;
	moneyDisplay += (money - moneyDisplay)*0.10;
	//IMPORTANT


	//SHOW ITEM AMOUNTS
	document.getElementById("clothesAmount").innerHTML = clothes.total;
	document.getElementById("berlinerAmount").innerHTML = berliner.total;
	document.getElementById("alkoholAmount").innerHTML = alkohol.total;
	document.getElementById("takeoutAmount").innerHTML = takeout.total;
	document.getElementById("vacationAmount").innerHTML = vacation.total;
	document.getElementById("slaveAmount").innerHTML = slave.total;

	document.getElementById("workAmount").innerHTML = work1.total;
	document.getElementById("extraFagAmount").innerHTML = extraFag.total;
	document.getElementById("weekendWorkAmount").innerHTML = weekendWork.total;
	document.getElementById("workCourseAmount").innerHTML = workCourse.total;
	document.getElementById("moreUsersAmount").innerHTML = moreUsers.total;
	document.getElementById("responsibilityAmount").innerHTML = responsibility.total;

	//MONEY AND SOFTNESSMODS
	document.getElementById("softnessMod").innerHTML = numeral(beautify(softnessMod)).format('0.00a') + " /s";
	document.getElementById("moneyMod").innerHTML = numeral(beautify(moneyMod)).format('0.00a') + " /s";

	//DISPLAY NUMBER WITH K,M,B...etc
	if(moneyDisplay < 1000000) {
		document.getElementById("money").innerHTML = numeral(beautify(Math.round(moneyDisplay))).format('0,0');
		document.getElementById("tMoney").innerHTML = numeral(beautify(Math.round(moneyDisplay))).format('0,0');
	} else if(moneyDisplay > 1000) {
		document.getElementById("money").innerHTML =  numeral(beautify(Math.round(moneyDisplay))).format('0.00a');
		document.getElementById("tMoney").innerHTML =  numeral(beautify(Math.round(moneyDisplay))).format('0.00a');
	}
	if(softnessDisplay < 1000000) {
		document.getElementById("softness").innerHTML = numeral(beautify(Math.round(softnessDisplay))).format('0,0');
		document.getElementById("tSoftness").innerHTML = numeral(beautify(Math.round(softnessDisplay))).format('0,0');
	} else if(softnessDisplay > 1000) {
		document.getElementById("softness").innerHTML =  numeral(beautify(Math.round(softnessDisplay))).format('0.00a');
		document.getElementById("tSoftness").innerHTML =  numeral(beautify(Math.round(softnessDisplay))).format('0.00a');

	}
	//document.getElementById("thirsty").innerHTML = beautify(thirst);
	//document.getElementById("hunger").innerHTML = beautify(hunger);
	if(currentMode == 1) {
		document.getElementById("mykDisplay").style.opacity = "1";
		document.getElementById("cashDisplay").style.opacity = "0.5";
		//CHANGE TITLE
		if(eventSpawned) {
			document.getElementById("gameTitle").innerHTML = "[!][K]Juliespillet"
		} else {
			document.getElementById("gameTitle").innerHTML = "[K]Juliespillet"
		}
		document.body.style.backgroundImage = "url('images/bg_chill.png')";
		document.getElementById("textTicker").innerHTML = "Gi meg en tikkel, da vel!";
		//document.getElementById("tickleClickButton").setAttribute('onclick','addSoftness(1)')
	//document.getElementById("hungerMod").innerHTML = beautify(hungerMod*0.25);
	//document.getElementById("thirstMod").innerHTML = beautify(thirstMod*0.25);
	}
	if(currentMode == 2) {
		document.getElementById("cashDisplay").style.opacity = "1";
		document.getElementById("mykDisplay").style.opacity = "0.5";
		//CHANGE TITLE
		if(eventSpawned) {
			document.getElementById("gameTitle").innerHTML = "[!][J]Juliespillet"
		} else {
			document.getElementById("gameTitle").innerHTML = "[J]Juliespillet"
		}
		document.body.style.backgroundImage = "url('images/bg_jobb.png')";
		document.getElementById("textTicker").innerHTML = "Hjelp meg med jobben, da vel!";
		//document.getElementById("tickleClickButton").setAttribute('onclick','addMoney(1)')
	//document.getElementById("hungerMod").innerHTML = beautify(hungerMod);
	//document.getElementById("thirstMod").innerHTML = beautify(thirstMod);
	}
	
	//FORMAT BUYBYTTON COST

	//CLOTHES 1
	if(clothes.require.money > 1000000) {
		document.getElementById("clothes1price").innerHTML = numeral(beautify(clothes.require.money)).format('0.00a')+ " $$$";
	} else {
		document.getElementById("clothes1price").innerHTML =numeral(beautify(clothes.require.money)).format('0,0') + " $$$";
	}
	//BERLINER
	if(berliner.require.money > 1000) {
		document.getElementById("berlinerPrice").innerHTML = numeral(beautify(berliner.require.money)).format('0.00a') + " $$$";
	} else {
		document.getElementById("berlinerPrice").innerHTML =numeral(beautify(berliner.require.money)).format('0a') + " $$$";
	}
	//ALKOHOL
	if(alkohol.require.money > 1000000) {
		document.getElementById("alkoholPrice").innerHTML = numeral(beautify(alkohol.require.money)).format('0.00a') + " $$$";
	} else {
		document.getElementById("alkoholPrice").innerHTML =numeral(beautify(alkohol.require.money)).format('0,0') + " $$$";
	}
	//TAKEOUT
	if(takeout.require.money > 1000000) {
		document.getElementById("takeoutPrice").innerHTML = numeral(beautify(takeout.require.money)).format('0.00a') + " $$$";
	} else {
		document.getElementById("takeoutPrice").innerHTML =numeral(beautify(takeout.require.money)).format('0,0') + " $$$";
	}
	//VACATION
	if(vacation.require.money > 1000000) {
		document.getElementById("vacationPrice").innerHTML = numeral(beautify(vacation.require.money)).format('0.00a') + " $$$";
	} else {
		document.getElementById("vacationPrice").innerHTML =numeral(beautify(vacation.require.money)).format('0,0') + " $$$";
	}
	//SLAVE
	if(slave.require.money > 1000000) {
		document.getElementById("slavePrice").innerHTML = numeral(beautify(slave.require.money)).format('0.00a') + " $$$";
	} else {
		document.getElementById("slavePrice").innerHTML =numeral(beautify(slave.require.money)).format('0,0') + " $$$";
	}

	//WORK BUTTONS
	//WORK 1
	if(work1.require.softness > 1000000) {
		document.getElementById("work1price").innerHTML = numeral(beautify(work1.require.softness)).format('0.0a') + " MYK";
	} else {
		document.getElementById("work1price").innerHTML =numeral(beautify(work1.require.softness)).format('0,0') + " MYK";
	}
	//EXTRAFAG
	if(extraFag.require.softness > 1000000) {
		document.getElementById("extraFagPrice").innerHTML = numeral(beautify(extraFag.require.softness)).format('0.0a') + " MYK";
	} else {
		document.getElementById("extraFagPrice").innerHTML =numeral(beautify(extraFag.require.softness)).format('0,0') + " MYK";
	}
	//WEEKEND WORK
	if(weekendWork.require.softness > 1000000) {
		document.getElementById("weekendWorkPrice").innerHTML = numeral(beautify(weekendWork.require.softness)).format('0.0a') + " MYK";
	} else {
		document.getElementById("weekendWorkPrice").innerHTML =numeral(beautify(weekendWork.require.softness)).format('0,0') + " MYK";
	}
	//WORK COURSE
	if(workCourse.require.softness > 1000000) {
		document.getElementById("workCoursePrice").innerHTML = numeral(beautify(workCourse.require.softness)).format('0.0a') + " MYK";
	} else {
		document.getElementById("workCoursePrice").innerHTML =numeral(beautify(workCourse.require.softness)).format('0,0') + " MYK";
	}
	//MORE USERS
	if(moreUsers.require.softness > 1000000) {
		document.getElementById("moreUsersPrice").innerHTML = numeral(beautify(moreUsers.require.softness)).format('0.0a') + " MYK";
	} else {
		document.getElementById("moreUsersPrice").innerHTML =numeral(beautify(moreUsers.require.softness)).format('0,0') + " MYK";
	}
	//RESPONSIBILITY
	if(responsibility.require.softness > 1000000) {
		document.getElementById("responsibilityPrice").innerHTML = numeral(beautify(responsibility.require.softness)).format('0.0a') + " MYK";
	} else {
		document.getElementById("responsibilityPrice").innerHTML =numeral(beautify(responsibility.require.softness)).format('0,0') + " MYK";
	}

	//
	
	
	//hungerBar.value = hunger;
	//thirstBar.value = thirst;

	//ONLOAD
	updateAvailableButtons();
	updateAvailableUpgrades();
	updateHoliday();
};



function beautify(input) {
	var output = Math.round(input * 1000000)/1000000;
	return output;
};
//FPS TICK
window.setInterval(function() {
	draw();
}, 33.3);

//SECOND TICK
window.setInterval(function() {
	currentDate = moment().format('dddd');
	CheckDailyBonus();
	moneyModTotal = moneyMod;
	softnessModTotal = softnessMod;
	autosaveTimer -= 1;

	//AUTOSAVE!
	if(autosaveTimer < 0) {
		save();
		autosaveTimer = 60;
	}
	if(currentMode ==1 ) {
		//updateNeeds((hungerMod*0.25), thirstMod*0.25);
		
		addSoftness(softnessMod);
		addMoney(moneyMod*bonusMoneyPercent);
		
		//addMoney(expenses*-1);
	}
	if(currentMode == 2 ) {
		//updateNeeds(hungerMod, thirstMod);
		//addSoftness(struggleMod*-1);
		
		addMoney(moneyMod);
		addSoftness(softnessMod*bonusSoftnessPercent);
		
	}
	
	for(var key in events) {
		checkForEvent(events[key])
	}
	

}, 1000);

window.setInterval(function() {
	//updateNeeds(hungerMod, thirstMod);
}, 60000);



//SAVE FUNCTIONS

function save() {
	saveVar = {
		//bonus
		dailyBonusCounter : dailyBonusCounter,
		//date
		lastBonusDate : lastBonusDate,
		dailyBonusRemaining : dailyBonusRemaining,
		//SAVE GLOBAL VARS
		clickTotal : clickTotal,
		money : money,
		moneyThisSession : moneyThisSession,
		moneyTotal : moneyTotal,
		softness : softness,
		softnessThisSession : softnessThisSession,
		softnessTotal : softnessTotal,
		moneyMod: moneyMod,
		currentMode: currentMode,
		//SAVE CHILL VARS
		softnessMod: softnessMod,
		totalClothes: clothes.total,
		totalBerliner: berliner.total,
		totalAlkohol: alkohol.total,
		totalTakeout: takeout.total,
		totalVacation: vacation.total,
		totalSlave: slave.total,
		//SAVE WORK VARS
		totalWork: work1.total,
		totalFag: extraFag.total,
		totalWeekendWork: weekendWork.total,
		totalCourse: workCourse.total,
		totalUsers: moreUsers.total,
		totalResponsibility: responsibility.total,
		//SAVE UPGRADE VARS
		uClothes1: uClothes1.bought,
		uClothes2: uClothes2.bought,
		uClothes3: uClothes3.bought,
		uClothes4: uClothes4.bought,
		uClothes5: uClothes5.bought,

		uBerliner1: uBerliner1.bought,
		uBerliner2: uBerliner2.bought,
		uBerliner3: uBerliner3.bought,
		uBerliner4: uBerliner4.bought,
		uBerliner5: uBerliner5.bought,

		uAlkohol1: uAlkohol1.bought,
		uAlkohol2: uAlkohol2.bought,
		uAlkohol3: uAlkohol3.bought,
		uAlkohol4: uAlkohol4.bought,
		uAlkohol5: uAlkohol5.bought,

		uTakeOut1: uTakeOut1.bought,
		uTakeOut2: uTakeOut2.bought,
		uTakeOut3: uTakeOut3.bought,
		uTakeOut4: uTakeOut4.bought,
		uTakeOut5: uTakeOut5.bought,

		uVacation1: uVacation1.bought,
		uVacation2: uVacation2.bought,
		uVacation3: uVacation3.bought,
		uVacation4: uVacation4.bought,
		uVacation5: uVacation5.bought,

		uSlave1: uSlave1.bought,
		uSlave2: uSlave2.bought,
		uSlave3: uSlave3.bought,
		uSlave4: uSlave4.bought,
		uSlave5: uSlave5.bought,

		// WORK UPGRADES
		uWork1: uWork1.bought,
		uWork2: uWork2.bought,
		uWork3: uWork3.bought,
		uWork4: uWork4.bought,
		uWork5: uWork5.bought,

		uExtraFag1: uExtraFag1.bought,
		uExtraFag2: uExtraFag2.bought,
		uExtraFag3: uExtraFag3.bought,
		uExtraFag4: uExtraFag4.bought,
		uExtraFag5: uExtraFag5.bought,

		uWeekendWork1: uWeekendWork1.bought,
		uWeekendWork2: uWeekendWork2.bought,
		uWeekendWork3: uWeekendWork3.bought,
		uWeekendWork4: uWeekendWork4.bought,
		uWeekendWork5: uWeekendWork5.bought,

		uWorkCourse1: uWorkCourse1.bought,
		uWorkCourse2: uWorkCourse2.bought,
		uWorkCourse3: uWorkCourse3.bought,
		uWorkCourse4: uWorkCourse4.bought,
		uWorkCourse5: uWorkCourse5.bought,

		uMoreUsers1: uMoreUsers1.bought,
		uMoreUsers2: uMoreUsers2.bought,
		uMoreUsers3: uMoreUsers3.bought,
		uMoreUsers4: uMoreUsers4.bought,
		uMoreUsers5: uMoreUsers5.bought,

		uResponsibility1: uResponsibility1.bought,
		uResponsibility2: uResponsibility2.bought,
		uResponsibility3: uResponsibility3.bought,
		uResponsibility4: uResponsibility4.bought,
		uResponsibility5: uResponsibility5.bought,

		// MISC UPGRADES

		uClick1: uClick1.bought,
		uClick2: uClick2.bought,
		uClick3: uClick3.bought,
		uClick4: uClick4.bought,
		uClick5: uClick5.bought,

		uBonusMoneyPercent1: uBonusMoneyPercent1.bought,
		uBonusMoneyPercent2: uBonusMoneyPercent2.bought,
		uBonusMoneyPercent3: uBonusMoneyPercent3.bought,
		uBonusMoneyPercent4: uBonusMoneyPercent4.bought,
		uBonusMoneyPercent5: uBonusMoneyPercent5.bought,

		uBonusSoftnessPercent1: uBonusSoftnessPercent1.bought,
		uBonusSoftnessPercent2: uBonusSoftnessPercent2.bought,
		uBonusSoftnessPercent3: uBonusSoftnessPercent3.bought,
		uBonusSoftnessPercent4: uBonusSoftnessPercent4.bought,
		uBonusSoftnessPercent5: uBonusSoftnessPercent5.bought

	}
	localStorage.setItem("saveVar",JSON.stringify(saveVar));
};

function load() {
	var savegame = JSON.parse(localStorage.getItem("saveVar"));
	//IMPORT BONUS
	if(savegame.dailyBonusCounter != null) {
	dailyBonusCounter = savegame.dailyBonusCounter;
	} else {
	dailyBonusCounter = 0;
	}
	//IMPORT DATE
	lastBonusDate = savegame.lastBonusDate;
	dailyBonusRemaining = savegame.dailyBonusRemaining;
	//IMPORT GLOBALS
	if(savegame.clickTotal != null) {
	clickTotal = savegame.clickTotal;
	} else {
	clickTotal = 0;
	}
	money = savegame.money;
	moneyThisSession = savegame.moneyThisSession;
	moneyTotal = savegame.moneyTotal;
	softness = savegame.softness;
	softnessThisSession = savegame.softnessThisSession;
	softnessTotal = savegame.softnessTotal;
	softnessMod = savegame.softnessMod;
	moneyMod = savegame.moneyMod;
	currentMode = savegame.currentMode;
	//IMPORT CHILL VARS
	clothes.total = savegame.totalClothes;
	berliner.total = savegame.totalBerliner;
	alkohol.total = savegame.totalAlkohol;
	takeout.total = savegame.totalTakeout;
	vacation.total = savegame.totalVacation;
	slave.total = savegame.totalSlave;
	//IMPORT WORK VARS
	work1.total = savegame.totalWork;
	extraFag.total = savegame.totalFag;
	weekendWork.total = savegame.totalWeekendWork;
	workCourse.total = savegame.totalCourse;
	moreUsers.total = savegame.totalUsers;
	responsibility.total = savegame.totalResponsibility;
	//IMPORT UPGRADE VARS
	uClothes1.bought = savegame.uClothes1;
	uClothes2.bought = savegame.uClothes2;
	uClothes3.bought = savegame.uClothes3;
	uClothes4.bought = savegame.uClothes4;
	uClothes5.bought = savegame.uClothes5;

	uBerliner1.bought = savegame.uBerliner1;
	uBerliner2.bought = savegame.uBerliner2;
	uBerliner3.bought = savegame.uBerliner3;
	uBerliner4.bought = savegame.uBerliner4;
	uBerliner5.bought = savegame.uBerliner1;

	uAlkohol1.bought = savegame.uAlkohol1;
	uAlkohol2.bought = savegame.uAlkohol2;
	uAlkohol3.bought = savegame.uAlkohol3;
	uAlkohol4.bought = savegame.uAlkohol4;
	uAlkohol5.bought = savegame.uAlkohol5;

	uTakeOut1.bought = savegame.uTakeOut1;
	uTakeOut2.bought = savegame.uTakeOut2;
	uTakeOut3.bought = savegame.uTakeOut3;
	uTakeOut4.bought = savegame.uTakeOut4;
	uTakeOut5.bought = savegame.uTakeOut5;

	uVacation1.bought = savegame.uVacation1;
	uVacation2.bought = savegame.uVacation2;
	uVacation3.bought = savegame.uVacation3;
	uVacation4.bought = savegame.uVacation4;
	uVacation5.bought = savegame.uVacation5;

	uSlave1.bought = savegame.uSlave1;
	uSlave2.bought = savegame.uSlave2;
	uSlave3.bought = savegame.uSlave3;
	uSlave4.bought = savegame.uSlave4;
	uSlave5.bought = savegame.uSlave5;

	//WORK UPGRADES

	uWork1.bought = savegame.uWork1;
	uWork2.bought = savegame.uWork2;
	uWork3.bought = savegame.uWork3;
	uWork4.bought = savegame.uWork4;
	uWork5.bought = savegame.uWork5;

	uExtraFag1.bought = savegame.uExtraFag1;
	uExtraFag2.bought = savegame.uExtraFag2;
	uExtraFag3.bought = savegame.uExtraFag3;
	uExtraFag4.bought = savegame.uExtraFag4;
	uExtraFag5.bought = savegame.uExtraFag1;

	uWeekendWork1.bought = savegame.uWeekendWork1;
	uWeekendWork2.bought = savegame.uWeekendWork2;
	uWeekendWork3.bought = savegame.uWeekendWork3;
	uWeekendWork4.bought = savegame.uWeekendWork4;
	uWeekendWork5.bought = savegame.uWeekendWork5;

	uWorkCourse1.bought = savegame.uWorkCourse1;
	uWorkCourse2.bought = savegame.uWorkCourse2;
	uWorkCourse3.bought = savegame.uWorkCourse3;
	uWorkCourse4.bought = savegame.uWorkCourse4;
	uWorkCourse5.bought = savegame.uWorkCourse5;

	uMoreUsers1.bought = savegame.uMoreUsers1;
	uMoreUsers2.bought = savegame.uMoreUsers2;
	uMoreUsers3.bought = savegame.uMoreUsers3;
	uMoreUsers4.bought = savegame.uMoreUsers4;
	uMoreUsers5.bought = savegame.uMoreUsers5;

	uResponsibility1.bought = savegame.uResponsibility1;
	uResponsibility2.bought = savegame.uResponsibility2;
	uResponsibility3.bought = savegame.uResponsibility3;
	uResponsibility4.bought = savegame.uResponsibility4;
	uResponsibility5.bought = savegame.uResponsibility5;

	//MISC UPGRADES

	uClick1.bought = savegame.uClick1;
	uClick2.bought = savegame.uClick2;
	uClick3.bought = savegame.uClick3;
	uClick4.bought = savegame.uClick4;
	uClick5.bought = savegame.uClick5;

	uBonusMoneyPercent1.bought = savegame.uBonusMoneyPercent1;
	uBonusMoneyPercent2.bought = savegame.uBonusMoneyPercent2;
	uBonusMoneyPercent3.bought = savegame.uBonusMoneyPercent3;
	uBonusMoneyPercent4.bought = savegame.uBonusMoneyPercent4;
	uBonusMoneyPercent5.bought = savegame.uBonusMoneyPercent5;

	uBonusSoftnessPercent1.bought = savegame.uBonusSoftnessPercent1;
	uBonusSoftnessPercent2.bought = savegame.uBonusSoftnessPercent2;
	uBonusSoftnessPercent3.bought = savegame.uBonusSoftnessPercent3;
	uBonusSoftnessPercent4.bought = savegame.uBonusSoftnessPercent4;
	uBonusSoftnessPercent5.bought = savegame.uBonusSoftnessPercent5;

	//UPDATE ALL BUTTONS
	updateRequirements(clothes);
	updateRequirements(berliner);
	updateRequirements(alkohol);
	updateRequirements(takeout);
	updateRequirements(vacation);
	updateRequirements(slave);
	//WORK BUTTONS
	updateRequirements(work1);
	updateRequirements(extraFag);
	updateRequirements(weekendWork);
	updateRequirements(workCourse);
	updateRequirements(moreUsers);
	updateRequirements(responsibility);
	updateAvailableUpgrades();
	displayUpgrades();
};

function clearSave() {
	localStorage.removeItem("saveVar");
};