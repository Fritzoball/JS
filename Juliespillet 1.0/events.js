var events = {
 	"event1": {
 		"id":1,
 		"mode": 2,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Fitte GAT",
 		"picId":"eventPic1.png",
 		"text":"Du pr�ver � logge deg p� GAT men du husker ikke passordet ditt. Litt synd, for du husker heller ikke om du skal jobbe",
 		"opt1Text":"M�t opp fordet",
 		"opt11":"addHoursOfIncome('money',2);",
 		"opt11num":"returnHoursOfIncome('money',2)",
 		"opt11Tooltip": "'Du tjener '",
 		"opt12":"addHoursOfIncome('softness',-1);",
 		"opt12num":"returnHoursOfIncome('softness',-1)",
 		"opt12Tooltip": "'<br/>Du mister '",

 		"opt2Text":"Tror ikke jeg skal jobbe i dag",
 		"opt21":"addHoursOfIncome('softness',1);",
 		"opt21num":"returnHoursOfIncome('softness',1)",
 		"opt21Tooltip":"'Du lager '",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":100,
 			"softness":0
 		}
 	},
 	"event2": {
 		"id":2,
 		"mode": 1,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Nicolay er teit",
 		"picId":"eventPic2.png",
 		"text":"Du skal p� bes�k til Nicolay men han har trent og klager over hvor tr�tt han er. Du vil v�re sent oppe for � drikke vin",
 		"opt1Text":"Bli hjemme og v�r naken p� trass",
 		"opt11":"addHoursOfIncome('softness',2);",
 		"opt11num":"returnHoursOfIncome('softness',2)",
 		"opt11Tooltip": "'Gir deg '",
 		"opt12":"",
 		"opt12num":"",
 		"opt12Tooltip": "''",

 		"opt2Text":"Dra til han og kj�p med deg kaffe; her skal det spuunes",
 		"opt21":"addHoursOfIncome('softness',4);",
 		"opt21num":"returnHoursOfIncome('softness',4)",
 		"opt21Tooltip":"'Du f�r '",
 		"opt22":"addHoursOfIncome('money',-1);",
 		"opt22num":"returnHoursOfIncome('money',-1)",
 		"opt22Tooltip":"'<br/>Du mister '",
 		"require":{
 			"money":100,
 			"softness":0
 		}
 	},
 	"event3": {
 		"id":3,
 		"mode": 3,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Hadde du virkelig likt meg...",
 		"picId":"eventPic5.png",
 		"text":"Nicolay er en dritt og gir deg ikke det du vil ha...",
 		"opt1Text":"Hadde han virkelig likt meg ville han gitt meg det",
 		"opt11":"addHoursOfIncome('money',0.5);",
 		"opt11num":"returnHoursOfIncome('money',0.5)",
 		"opt11Tooltip": "'Han gir deg '",
 		"opt12":"",
 		"opt12num":"",
 		"opt12Tooltip": "''",

 		"opt2Text":"Tydligvis s� hater han meg... Her m� det tvang til",
 		"opt21":"addHoursOfIncome('money',2);",
 		"opt21num":"returnHoursOfIncome('money',2)",
 		"opt21Tooltip":"'Han gir deg '",
 		"opt22":"addHoursOfIncome('softness',-1);",
 		"opt22num":"returnHoursOfIncome('softness',-1)",
 		"opt22Tooltip":"'<br/>Det koster deg'",
 		"require":{
 			"money":100,
 			"softness":0
 		}
 	},
 	"event4": {
 		"id":4,
 		"mode": 1,
 		"ticks": 23000,
 		"factor":0.8,
 		"title":"Bachelor p� TV",
 		"picId":"eventPic4.png",
 		"text":"Kl er 21.00 og Bachelor begynner p� tven. Mmmm. H�per favoritten ikke blir stemt ut!",
 		"opt1Text":"L�p og ta deg ett glass vann",
 		"opt11":"addHoursOfIncome('softness',1);",
 		"opt11num":"returnHoursOfIncome('softness',1)",
 		"opt11Tooltip": "'Gir deg '",
 		"opt12":"",
 		"opt12num":"",
 		"opt12Tooltip": "''",

 		"opt2Text":"En bitteliten vodka hadde smakt godt til dette",
 		"opt21":"addHoursOfIncome('softness',2);",
 		"opt21num":"returnHoursOfIncome('softness',2)",
 		"opt21Tooltip":"'Du f�r '",
 		"opt22":"addHoursOfIncome('money',-1);",
 		"opt22num":"returnHoursOfIncome('money',-1)",
 		"opt22Tooltip":"'<br/>Du mister '",
 		"require":{
 			"money":100,
 			"softness":0
 		}
 	},
 	"event5": {
 		"id":5,
 		"mode": 1,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Du f�r en pebble!!",
 		"picId":"eventPic3.png",
 		"text":"Helt uten forsvarsel kommer Nicolay l�pende med en pebble og slenger den p� deg",
 		"opt1Text":"Takk! Den skal jeg putte i samlingen",
 		"opt11":"addHoursOfIncome('softness',100);",
 		"opt11num":"returnHoursOfIncome('softness',100)",
 		"opt11Tooltip": "'Gir deg '",
 		"opt12":"",
 		"opt12num":"",
 		"opt12Tooltip": "''",

 		"opt2Text":"Hvor er n�rmeste pawn-shop?",
 		"opt21":"addHoursOfIncome('money',100);",
 		"opt21num":"returnHoursOfIncome('money',100)",
 		"opt21Tooltip":"'Du f�r '",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":100,
 			"softness":0
 		}
 	},
 	"event6": {
 		"id":6,
 		"mode": 1,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Nepal har bes�k",
 		"picId":"eventPic6.png",
 		"text":"Nepal har bestemt seg for at i kveld skal det festes. Han har invitert over 20 folk som synger og spiller gitar p� rommet hans",
 		"opt1Text":"Bit tenna sammen og skru opp lyden p� tven",
 		"opt11":"addHoursOfIncome('softness',-2);",
 		"opt11num":"returnHoursOfIncome('softness',-2)",
 		"opt11Tooltip": "'Du mister '",
 		"opt12":"",
 		"opt12num":"",
 		"opt12Tooltip": "''",

 		"opt2Text":"Det HER er ikke innafor",
 		"opt21":"addHoursOfIncome('softness',-2);",
 		"opt21num":"returnHoursOfIncome('softness',-2)",
 		"opt21Tooltip":"'Du mister '",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event7": {
 		"id":7,
 		"mode": 1,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Sverigetur",
 		"picId":"eventPic7.png",
 		"text":"Nicolay har f�tt l�ne bil og vil dra til sverige for � kj�pe mat, alkoholer og godiser.",
 		"opt1Text":"ROAD TRIIIIP!",
 		"opt11":"addHoursOfIncome('softness', 4);",
 		"opt11num":"returnHoursOfIncome('softness',4)",
 		"opt11Tooltip": "'Du f�r '",
 		"opt12":"addHoursOfIncome('money', -2);",
 		"opt12num":"returnHoursOfIncome('money',-2)",
 		"opt12Tooltip": "'<br/>Du mister '",

 		"opt2Text":"Jeg orker ikke bruke penger n�",
 		"opt21":"",
 		"opt21num":"",
 		"opt21Tooltip":"'",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event8": {
 		"id":8,
 		"mode": 1,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Salg p� H&M",
 		"picId":"eventPic8.png",
 		"text":"Det er salg p� HM i dag og du skal tilfeldigvis forbi Oslo City p� vei hjem. Kanskje de har noe fint der denne gangen...",
 		"opt1Text":"S�...MYE...FINT",
 		"opt11":"addHoursOfIncome('softness', 4);",
 		"opt11num":"returnHoursOfIncome('softness',4)",
 		"opt11Tooltip": "'Du f�r '",
 		"opt12":"addHoursOfIncome('money', -2);",
 		"opt12num":"returnHoursOfIncome('money',-2)",
 		"opt12Tooltip": "'<br/>Du mister '",

 		"opt2Text":"Drittbutikk",
 		"opt21":"",
 		"opt21num":"",
 		"opt21Tooltip":"'",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event9": {
 		"id":9,
 		"mode": 2,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Dikusjon p� jobben",
 		"picId":"eventPic9.png",
 		"text":"Du ser noe p� jobben som ikke er riktig og er ikke sikker p� om du skal ta tak i det eller se en annen vei",
 		"opt1Text":"Noen m� faen meg gj�re noe her",
 		"opt11":"addHoursOfIncome('money', 2);",
 		"opt11num":"returnHoursOfIncome('money',2)",
 		"opt11Tooltip": "'Sjefen sier du er flink og gir deg '",
 		"opt12":"addHoursOfIncome('softness', -1);",
 		"opt12num":"returnHoursOfIncome('softness',-1)",
 		"opt12Tooltip": "'<br/>Du mister '",

 		"opt2Text":"Jeg orker ikke diskusjoner i dag",
 		"opt21":"",
 		"opt21num":"",
 		"opt21Tooltip":"'",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event10": {
 		"id":10,
 		"mode": 1,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Du er best i Alice",
 		"picId":"eventPic10.png",
 		"text":"Du spiller Alice og er spesielt god i dag, ingenting kan stoppe denne str�ng independent alicen!",
 		"opt1Text":"Dont need no cheats",
 		"opt11":"addHoursOfIncome('softness', 2);",
 		"opt11num":"returnHoursOfIncome('softness',2)",
 		"opt11Tooltip": "'Du f�r '",
 		"opt12":"",
 		"opt12num":"",
 		"opt12Tooltip": "''",

 		"opt2Text":"Det er en grunn til at jeg heter Bestlie...",
 		"opt21":"addHoursOfIncome('softness', 2);",
 		"opt21num":"returnHoursOfIncome('softness',2)",
 		"opt21Tooltip":"'Du f�r '",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event11": {
 		"id":11,
 		"mode": 1,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Det bor en gnom under senga",
 		"picId":"eventPic11.png",
 		"text":"Det bor en gnom under senga di som spiser alt godteriet du har kj�pt, merkelig... virker nesten som den kommer ofte",
 		"opt1Text":"Kj�per mer godis, den er sikkert borte n�",
 		"opt11":"addHoursOfIncome('softness', 2);",
 		"opt11num":"returnHoursOfIncome('softness',2)",
 		"opt11Tooltip": "'Du f�r '",
 		"opt12":"addHoursOfIncome('money', -2);",
		"opt12num":"returnHoursOfIncome('money',-2)",
 		"opt12Tooltip": "'<br/>Du bruker '",

 		"opt2Text":"Hmmm... jeg begynner � skj�nne tegninga",
 		"opt21":"addHoursOfIncome('softness', -2);",
 		"opt21num":"returnHoursOfIncome('softness',-2)",
 		"opt21Tooltip":"' Du mister '",
 		"opt22":"addHoursOfIncome('money', 2);",
 		"opt22num":"returnHoursOfIncome('money',2)",
 		"opt22Tooltip":"'<br/>Du sparer '",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event12": {
 		"id":12,
 		"mode": 3,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"THE SILVER HAND MISTER?",
 		"picId":"eventPic12.png",
 		"text":" ",
 		"opt1Text":"SILVER HAND?",
 		"opt11":"addHoursOfIncome('softness', 2);",
 		"opt11num":"returnHoursOfIncome('softness',2)",
 		"opt11Tooltip": "'Du f�r '",
 		"opt12":"addHoursOfIncome('money', 2);",
		"opt12num":"returnHoursOfIncome('money',2)",
 		"opt12Tooltip": "'<br/>Du f�r '",

 		"opt2Text":"THE SILVER HAND??",
 		"opt21":"addHoursOfIncome('softness', 2);",
 		"opt21num":"returnHoursOfIncome('softness',2)",
 		"opt21Tooltip":"' Du f�r '",
 		"opt22":"addHoursOfIncome('money', 2);",
 		"opt22num":"returnHoursOfIncome('money',2)",
 		"opt22Tooltip":"'<br/>Du f�r '",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event13": {
 		"id":13,
 		"mode": 1,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Sjokoladeboller p� gulvet",
 		"picId":"eventPic13.png",
 		"text":"Det ligger p� ett eller annet vis sjokoladeboller p� gulvet. H�per du ikke snubler p� de n�r du skal ut � heste",
 		"opt1Text":"�neeei, jeg snuublaaa",
 		"opt11":"addHoursOfIncome('softness', 4);",
 		"opt11num":"returnHoursOfIncome('softness',4)",
 		"opt11Tooltip": "'Du f�r '",
 		"opt12":"addHoursOfIncome('money', -4);",
		"opt12num":"returnHoursOfIncome('money',-4)",
 		"opt12Tooltip": "'<br/>Du mister '",

 		"opt2Text":"Den skal jeg gallopere over",
 		"opt21":"addHoursOfIncome('softness', -4);",
 		"opt21num":"returnHoursOfIncome('softness',-4)",
 		"opt21Tooltip":"' Du mister '",
 		"opt22":"addHoursOfIncome('money', 2);",
 		"opt22num":"returnHoursOfIncome('money',2)",
 		"opt22Tooltip":"'<br/>Du sparer '",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event14": {
 		"id":14,
 		"mode": 1,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"GAMEOLAY",
 		"picId":"eventPic.png",
 		"text":"Nicolay �let seg ut av sofaen for � suge i spill p� internett. Men n� har han faen meg holdt p� litt for lenge... Kanskje du kan lure han til � gi deg en tikkel",
 		"opt1Text":"Ja det er bare p� sin plass",
 		"opt11":"addHoursOfIncome('softness', 3);",
 		"opt11num":"returnHoursOfIncome('softness',3)",
 		"opt11Tooltip": "' Han gir deg </br>'",
 		"opt12":"",
 		"opt12num":"",
 		"opt12Tooltip": "''",

 		"opt2Text":"Men det er jo s� mykt her fra f���r...",
 		"opt21":"",
 		"opt21num":"",
 		"opt21Tooltip":"'",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event15": {
 		"id":15,
 		"mode": 3,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"F�BBENS",
 		"picId":"eventPic15.png",
 		"text":"Du dagdr�mmer om F�bbens i fjeshullet",
 		"opt1Text":"Trenger ost. N�!",
 		"opt11":"addHoursOfIncome('softness', 2);",
 		"opt11num":"returnHoursOfIncome('softness',2)",
 		"opt11Tooltip": "' Han gir deg </br>'",
 		"opt12":"addHoursOfIncome('money', -1);",
 		"opt12num":"returnHoursOfIncome('money',-1)",
 		"opt12Tooltip": "' </br> Du mister '",

 		"opt2Text":"M�bbeh F�bbens L�tter",
 		"opt21":"",
 		"opt21num":"",
 		"opt21Tooltip":"'",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},
 	"event16": {
 		"id":16,
 		"mode": 3,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"NICOLAY SENDER DEG EN GLORP",
 		"picId":"eventPic16.png",
 		"text":"Nicolay f�ler seg ekstra kul i dag og bestemmer seg for � sende deg en glorp",
 		"opt1Text":"Mmmm dat larve",
 		"opt11":"addHoursOfIncome('softness', 2);",
 		"opt11num":"returnHoursOfIncome('softness',2)",
 		"opt11Tooltip": "' Synet gir deg </br>'",
 		"opt12":"",
 		"opt12num":"",
 		"opt12Tooltip": "''",

 		"opt2Text":":Q",
 		"opt21":"addHoursOfIncome('softness', 2);",
 		"opt21num":"returnHoursOfIncome('softness',2)",
 		"opt21Tooltip":"' Synet gir deg </br>'",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	},"event17": {
 		"id":17,
 		"mode": 3,
 		"ticks":23000,
 		"factor":0.8,
 		"title":":Q",
 		"picId":"eventPic17.png",
 		"text":"Du blir matet",
 		"opt1Text":":Q",
 		"opt11":"addHoursOfIncome('softness',50);",
 		"opt11num":"returnHoursOfIncome('softness',50)",
 		"opt11Tooltip": "'Du f�r '",
 		"opt12":"",
 		"opt12num":"",
 		"opt12Tooltip": "''",

 		"opt2Text":":Q",
 		"opt21":"addHoursOfIncome('softness',50);",
 		"opt21num":"returnHoursOfIncome('softness',50)",
 		"opt21Tooltip":"'Du f�r '",
 		"opt22":"",
 		"opt22num":"",
 		"opt22Tooltip":"''",
 		"require":{
 			"money":100,
 			"softness":0
 		}
 	},
 	"event18": {
 		"id":18,
 		"mode": 3,
 		"ticks":23000,
 		"factor":0.8,
 		"title":"Margrete 2 gjems�ker deg",
 		"picId":"eventPic18.png",
 		"text":"Margrete 2 syntes ikke hun plaget deg nok mens hun var naboen din, s� n� har hun kommet tilbake for � skitne til alle h�ndklene dine med saft.",
 		"opt1Text":"Hva har jeg gjort for � fortjene dette?",
 		"opt11":"addHoursOfIncome('softness',-2);",
 		"opt11num":"returnHoursOfIncome('softness',-2)",
 		"opt11Tooltip": "'Du mister '",
 		"opt12":"addHoursOfIncome('money',-1);",
 		"opt12num":"returnHoursOfIncome('money',-1)",
 		"opt12Tooltip": "'<br/>Nytt h�ndkle for '",

 		"opt2Text":"Juliemishandling!!",
 		"opt21":"addHoursOfIncome('softness',-2);",
 		"opt21num":"returnHoursOfIncome('softness',-2)",
 		"opt21Tooltip":"'Du mister '",
 		"opt22":"addHoursOfIncome('money',-1);",
 		"opt22num":"returnHoursOfIncome('money',-1)",
 		"opt22Tooltip": "'<br/>Nytt h�ndkle for '",
 		"require":{
 			"money":0,
 			"softness":0
 		}
 	}
 }