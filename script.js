
var table = {
	"10": "div0",
	"11": "div1",
	"12": "div2",
	"20": "div3",
	"21": "div4",
	"22": "div5",
	"30": "div6",
	"31": "div7",
	"32": "div8"
};
var count = 0;

function init()
{
	var rand = Math.floor(Math.random() * 10);
	rand = Math.abs(--rand);
	var j = 0;
	var poss;
	for (let i = 0; i < 9; i++) 
	{
		if(i + rand > 8)
		{
			poss = j;
			j++;
		}
		else
		{
			poss = i + rand;
		}
		document.getElementById("div" + i).innerHTML = poss;
		if( poss == 0)
		{
			document.getElementById("div" + i).style.color= 'purple';
		}
	}
	document.getElementById("attemmps").innerHTML = 0;
}

function move(number)
{
	var row;
	var columm;
	var zero;
	for (let i = 0; i < 9; i++) 
	{
		if (document.getElementById("div" + i).innerHTML == 0)
		{
			zero = i;
			row = Math.ceil((i+1)/3);
			columm = i % 3;
			break;
		}
	}
	if(Math.floor(number/10) == row && Math.abs(columm - (number%10))< 2 //same raw
	|| number%10 == columm && Math.abs(row - Math.floor(number/10))< 2 //same columm
	) 
	{
		document.getElementById("div" +zero).innerHTML = document.getElementById(table[number]).innerHTML;
		document.getElementById("div" +zero).style.color= 'orange';
		document.getElementById(table[number]).innerHTML = 0;
		document.getElementById(table[number]).style.color= 'purple';
		count ++;
		document.getElementById("attemmps").innerHTML = count;
		win();
	}
	else
	{
		alert("מהלך לא חוקי");
	}
}

function win()
{
	var flag = true;
	for (let i = 0; i < 9; i++) 
	{
		if (document.getElementById("div" + i).innerHTML != i)
		{
			flag = false;
			break;
		}
	}
	if(flag)
	{
		victory();
	}
}


function victory()
{
	document.getElementById("attemmps").innerHTML = "<p>מזל טוב</p> <p>הצלחת לבצע את המשימה ב " + count + " ניסיונות </p>";
	var collection = document.getElementsByClassName("divButton");
	for (let i = 0; i < 9; i++) 
	{
		collection[i].style.pointerEvents = 'none';
		collection[i].style.color= 'gray';
	}
}
 


