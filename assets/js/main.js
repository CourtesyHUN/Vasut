//#region Lista és opinion generálás
const allomasok = ["Budapest-Nyugati", "Zugló", "Kőbánya alsó", "Kőbánya-Kispest", "Pestszentlőrinc", "Szemeretelep","Ferihegy","Vecsés","Vecsés-Kertekalja", "Üllő", "Hosszúberek-Péteri", "Monor", "Monorierdő", "Pilis", "Albertirsa", "Ceglédbercel", "Ceglédbercel-Cserő", "Budai út", "Cegléd", "Abony", "Szolnok", "Szajol", "Törökszentmiklós", "Fegyvernek-Örményes", "Kisújszállás"]
for (let i = 0; i < allomasok.length; i++) 
{
  document.getElementById("datalista").innerHTML += '<option value='+allomasok[i]+'>'
}
//#endregion

//#region ElötteUtána
function ElotteUtana(megallo) 
{
    var p = allomasok.findIndex( item => megallo.toLowerCase()=== item.toLowerCase());
    var r = "";
    if (p == -1) 
    {
        r = "Nincs ilyen megálló ezen a vonalon"   
    }
    else
    {
        if (p != 0) 
        {
            r += "Elötte: "+allomasok[p-1]    
        } 
        else 
        {
            r += "Elötte: ---"  
        }
        r += "<br>"
    
    if (p == allomasok.length-1) 
    {
        r += "Utána: ---"  
    }
    else
    {
        r += "Utána: "+allomasok[p+1]  
    }
    }
    var x = (p/(allomasok.length-1))*100
    if (allomasok[p] == undefined) 
    {
        var y = ""
    }
    else
    {
        y =allomasok[p]
    }
    
    move(x,y)
    console.log(y)
    return r;
}
//#endregion

//#region Keres
function Keres() 
{
    var anev = document.getElementById("allomasnev").value.toLowerCase(); /* Állomás név */
    document.getElementById("eredmeny").innerHTML = ElotteUtana(anev)
    document.getElementById("myProgress").style.display= "block";
}
//#endregion

//#region Porgress bar 
var i = 0;
function move(x,y) 
{
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    elem.style.width = width + "%";
    elem.innerHTML = y;
    function frame() 
    {
      if (width >= x) 
      {
        clearInterval(id);
        i = 0;
      } 
      else 
      {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = '<img id="vonatkep" src="assets/images/Vonat.png" alt="">';
      }
    }
  }
}
//#endregion