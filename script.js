var Barmia=document.getElementById("armia").addEventListener("click",armia);
var Bzasoby=document.getElementById("zasoby").addEventListener("click",zasoby);
var Brozwoj=document.getElementById("rozwoj").addEventListener("click",rozwoj);
var kraje=document.querySelectorAll(".kraj");
kraje.forEach(kraj=>document.getElementById(kraj.id).addEventListener("click",function(){dyplomacja(kraj.id)}));
String.prototype.FirstLetterUpper=function(){var f=this.charAt(0).toUpperCase();return f+this.slice(1);}
class jednostka
{
	constructor(l,c,s)
	{
		this.liczba=l,
		this.cena=c,
		this.sila=s
	}
}
class panstwo
{
	constructor(n,r,s)
	{
		this.nazwa=n,
		this.relacje=r,
		this.sila=s
	}
}
var czas=new Date('1926-05-10');
var piechota=new jednostka(80,10,1);
var kawaleria=new jednostka(54,17,3);
var artyleria=new jednostka(30,28,5);
var pancerniacy=new jednostka(7,56,8);
var wojsko=pancerniacy.liczba+piechota.liczba+kawaleria.liczba+artyleria.liczba;
var sila_wojsko=pancerniacy.liczba*pancerniacy.sila+piechota.liczba*piechota.sila+kawaleria.liczba*kawaleria.sila+artyleria.liczba*artyleria.sila;
var zsrs=new panstwo("Zsrs",-10,2000);
var finlandia=new panstwo("Finlandia",1,300);
var niemcy=new panstwo("Niemcy",-6,1500);
var anglia=new panstwo("Anglia",5,980);
var wlochy=new panstwo("Wlochy",3,760);
var francja=new panstwo("Francja",6,890);
var hiszpania=new panstwo("Hiszpania",2,600);
var turcja=new panstwo("Turcja",4,760);
var rumunia=new panstwo("Rumunia",7,400);
var jugoslawia=new panstwo("Jugoslawia",6,430);
var czechoslowacja=new panstwo("Czechoslowacja",-2,480);
var wegry=new panstwo("Wegry",8,390);
var holandia=new panstwo("Holandia",1,100);
var belgia=new panstwo("Belgia",1,80);
var portugalia=new panstwo("Portugalia",0,230);
var grecja=new panstwo("Grecja",3,380);
var austria= new panstwo("Austria",3,410);
var estonia=new panstwo("Estonia",2,70);
var szwecja=new panstwo("Szwecja",3,540);
var szwajcaria=new panstwo("Szwajcaria",3,540);
var litwa=new panstwo("Litwa",-4,80);
var lotwa=new panstwo("Lotwa",6,80);
var dania=new panstwo("Dania",1,90);
var listapanstw=[zsrs,finlandia,niemcy,anglia,wlochy,francja,hiszpania,turcja,rumunia,jugoslawia,czechoslowacja,wegry,belgia,holandia,portugalia,grecja,austria,estonia,szwecja,szwajcaria,litwa,lotwa,dania];

var finanse=
{
	budzet:300,
	przychody:8,
	wegiel:50,
	stal:40,
	dyplomacja:0
};
var wegiel=
{
	kopalnie:3,
	wydobycie:120,
	zysk:30
};
var stal=
{
	huty:1,
	produkcja:18,		
	zysk:20
};
budzet();
function wstaw()
{
	document.getElementById("budzet").innerHTML="<p>"+czas.getDate()+"."+(czas.getMonth()+1)+"."+czas.getFullYear()+" </p><p>Budżet </p>"+finanse.budzet+"<p> Stal </p>"+finanse.stal+"<p> Węgiel </p>"+finanse.wegiel+"<p>Pkt dyplomacji </p>"+finanse.dyplomacja;
}
var pole=document.querySelector("#pole")
function armia()
{
	var x="<table border='1'><tr>";
	x+="<td>Rodzaj</td><td>Siła</td><td>Liczba</td><td>Cena</td><td>Rekrutuj</td></tr>";
	x+="<tr><td>Piechota</td><td>"+piechota.sila+"</td><td>"+piechota.liczba+"<td>"+piechota.cena+"</td><td><input type='number' id='lp' value='0'></td></tr>";
	x+="<tr><td>Kawaleria</td><td>"+kawaleria.sila+"</td><td>"+kawaleria.liczba+"<td>"+kawaleria.cena+"</td><td><input type='number' id='lk' value='0'></td></tr>";
	x+="<tr><td>Artyleria</td><td>"+artyleria.sila+"</td><td>"+artyleria.liczba+"<td>"+artyleria.cena+" 2x Stal</td><td><input type='number' id='la' value='0'></td></tr>";
	x+="<tr><td>Wojska Pancerne</td><td>"+pancerniacy.sila+"</td><td>"+pancerniacy.liczba+"<td>"+pancerniacy.cena+" 4x Stal</td><td><input type='number' id='lcz' value='0'></td></tr>";
	x+="<tr><td colspan='2'></td><td>"+wojsko+"</td><td>Siła wojska "+sila_wojsko+"</td><td><center><input type='submit' value='Rekrutuj' onclick='rekrutuj()'></center></td></tr>";
	pole.innerHTML=x;
}
function rekrutuj()
{
	var rek_piechota=Number(document.getElementById("lp").value);
	var rek_kawaleria=Number(document.getElementById("lk").value);
	var rek_artyleria=Number(document.getElementById("la").value);
	var rek_pancerniacy=Number(document.getElementById("lcz").value);	
	var suma=rek_piechota*piechota.cena+rek_kawaleria*kawaleria.cena+rek_pancerniacy*pancerniacy.cena+rek_artyleria*artyleria.cena;
	if (suma<finanse.budzet && artyleria.liczba+rek_artyleria>0 && piechota.liczba+rek_piechota>0 && pancerniacy.liczba+rek_pancerniacy>0 && kawaleria.liczba+rek_kawaleria>0)
	{
		//usun number();
		finanse.budzet-=suma;
		piechota.liczba+=Number(rek_piechota);
		kawaleria.liczba+=Number(rek_kawaleria);
		if (rek_artyleria*2<finanse.stal)
		{	
			artyleria.liczba+=Number(rek_artyleria);
			if (rek_artyleria>0) finanse.stal-=rek_artyleria*2;
		}
		if (rek_pancerniacy*4<finanse.stal)
		{
			pancerniacy.liczba+=Number(rek_pancerniacy);
			if (rek_pancerniacy>0)finanse.stal-=rek_pancerniacy*4;
		}
		wojsko=piechota.liczba+kawaleria.liczba+pancerniacy.liczba+artyleria.liczba;
		wstaw();
	}
	armia();
}
function dyplomacja(p)
{
	var y=p.FirstLetterUpper();
	var x="<table border='1'><tr><td>";
	for (var i=0;i<listapanstw.length;i++)
	{
		if (listapanstw[i].nazwa==y)
		{
			x+="Nazwa</td><td>Siła</td><td>Relacje</td></tr>";
			x+="<tr><td>"+listapanstw[i].nazwa.toUpperCase()+"</td><td>"+listapanstw[i].sila+"</td><td>"+listapanstw[i].relacje+"</td><td><input type='submit' value='Relacje' onclick='popraw_relacje("+p+")'></td></tr>";
			break;
		}
	}
	x+="</table>";
	document.getElementById("pole").innerHTML=x;
}
function popraw_relacje(p)
{
	wstaw();
	if (finanse.dyplomacja>=5 && Math.floor(Math.random()*2)==1 && p.relacje<10)
	{
		p.relacje+=1;
		finanse.dyplomacja-=5;
	}
	if (niemcy.relacje==10)
	{
		alert("WYGRANA");
		location.reload();
	}
	if (p.relacje==10 && p.nazwa!="Zsrs")
	{
		alert("Sojusz z "+p.nazwa);
		sila_wojsko+=p.sila;
	}
	var y=p.nazwa.toLowerCase();
	dyplomacja(y);
}
function zasoby()
{
	var x="<table border='1'><tr><td>Zasób</td><td>Liczba</td><td>Produkcja</td><td>Cena</td><td>Buduj</td><td>Uwagi</td></tr>";
	x+="<tr><td> Kopalnia</td><td>"+wegiel.kopalnie+"</td><td>"+wegiel.wydobycie+"</td><td> 2540</td><td><input type='submit' onclick='buduj(1)' value='BUDUJ'></td><td>Każda kopalnia +20 do wydobycia węgla. Możesz mieć maksymalnie 5 kopalń</td></tr>";
	x+="<tr><td> Huta</td><td>"+stal.huty+"</td><td>"+stal.produkcja+"</td><td> 3400</td><td><input type='submit' onclick='buduj(2)' value='BUDUJ'></td><td>Każda huta +10 do produkcji stali</td></tr>";
	x+="</table><table border='1'><tr><td>Zasób</td><td>Cena</td><td>Sprzedaj</td></tr>";
	x+="<tr><td>Węgiel</td><td>"+wegiel.zysk+"</td><td><input type='number' id='sprzedajwegiel' min='0'></td></tr>";
	x+="<tr><td>Stal</td><td>"+stal.zysk+"</td><td><input type='number' id='sprzedajstal' min='0'></td></tr>";
	x+="<tr><td colspan='2'>Sprzedaj</td><td><center><input type='submit' value='Sprzedaj' onclick='handel()'></center></td></tr>";
	document.getElementById("pole").innerHTML=x;
}
function handel()
{
	var swegla=document.getElementById("sprzedajwegiel").value;
	var sstali=document.getElementById("sprzedajstal").value;
	if (finanse.wegiel>=swegla && finanse.stal>=sstali)
	{
		finanse.wegiel-=swegla;
		finanse.stal-=sstali;
		finanse.budzet+=swegla*wegiel.zysk+sstali*stal.zysk;
		wstaw();
	}
	zasoby()
}
function buduj(arg)
{
	if (arg==1 && wegiel.kopalnie<5 && finanse.budzet>=2540)
	{
		wegiel.kopalnie+=1;
		wegiel.wydobycie+=40;
		finanse.przychody+=2;
		finanse.budzet-=2540;
		wstaw();
		zasoby();
	}
	if (arg==2 && finanse.budzet>=3400)
	{
		stal.huty+=1;
		stal.produkcja+=18;
		finanse.przychody+=2;
		finanse.budzet-=3400;
		wstaw();
		zasoby();
	}
}
function rozwoj()
{	
	var x="<table border='1'><tr><td>Broń</td><td>"+piechota.cena*piechota.sila*24+"</td><td><input type='submit' value='Ulepsz' onclick='ulepszBron(1)'></td></tr><tr><td>Czołgi</td><td>"+pancerniacy.cena*pancerniacy.sila*24+"</td><td><input type='submit' onclick='ulepszBron(2)' value='Ulepsz'></td></tr><tr><td>Artyleria</td><td>"+artyleria.cena*artyleria.sila*24+"</td><td><input type='submit' value='Ulepsz'onclick='ulepszBron(3)'/td></tr></table>" 
	document.getElementById("pole").innerHTML=x;
}
function ulepszBron(arg)
{
	if (arg==1 && finanse.budzet-(piechota.cena*piechota.sila*24)>0 && piechota.sila<5)
	{
		finanse.budzet-=piechota.cena*piechota.sila*24;
		piechota.sila+=1;
	}
	if (arg==1 && finanse.budzet-(pancerniacy.cena*pancerniacy.sila*24)>0 && pancerniacy.sila<15)
	{
		finanse.budzet-=pancerniacy.cena*pancerniacy.sila*24;
		pancerniacy.sila+=1;
	}
	if (arg==1 && finanse.budzet-(artyleria.cena*artyleria.sila*24)>0 && artyleria.sila<10)
	{
		finanse.budzet-=artyleria.cena*artyleria.sila*24;
		artyleria.sila+=1;
	}
	wstaw();
	rozwoj();
}	
var c=60000;
function budzet()
{
	finanse.budzet+=finanse.przychody;
	finanse.wegiel+=wegiel.wydobycie;
	finanse.stal+=stal.produkcja;
	finanse.dyplomacja+=1;
	czas.setDate(czas.getDate()+1);
	console.log(czas);
	zegar();
	wstaw();
	setTimeout(budzet,c);
}
function zegar()
{
	if (czas.getFullYear()==1930 || czas.getFullYear()==1934)
	{
		kawaleria.sila-=1;
	}
	if (czas.getFullYear()==1935 && czas.getDate()==12 && czas.getMonth()==4)
	{
		document.getElementById("menu").innerHTML="<p>Piłsudski nie żyje</p>";
		c=1000;
	} 
	if (czas.getFullYear()==1939 && czas.getDate()==1 && czas.getMonth()==8)
	{
		alert("WOJNA");
		wojna();
	}
}
function wojna()
{
	var sila_wroga=niemcy.sila+zsrs.sila;
	if (sila_wroga>sila_wojsko)
	{
		alert("Porażka");
	}
	else if(sila_wroga<sila_wojsko)
	{
		alert("Wygrana");
	}
	else 
	{
		alert("Rozpoczęła się wojna pozycyjna. Polska z ograniczonym dostępem do surowców nie jest w stanie jej wygrać. Porażka");
	}
	location.reload();
}
