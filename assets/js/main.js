const allomasok = ["Budapest-Nyugati", "Zugló", "Kőbánya alsó", "Kőbánya-Kispest", "Pestszentlőrinc", "Szemeretelep","Ferihegy","Vecsés","Vecsés-Kertekalja", "Üllő", "Hosszúberek-Péteri", "Monor", "Monorierdő", "Pilis", "Albertirsa", "Ceglédbercel", "Ceglédbercel-Cserő", "Budai út", "Cegléd", "Abony", "Szolnok", "Szajol", "Törökszentmiklós", "Fegyvernek-Örményes", "Kisújszállás"]
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
    }
    if (p == allomasok.length-1) 
    {
        r += "Utána: ---"  
    }
    else
    {
        r += "Utána: "+allomasok[p+1]  
    }
    return r;
}
//#endregion

//#region Keres
function Keres() 
{
    var anev = document.getElementById("allomasnev").value.toLowerCase(); /* Állomás név */
    document.getElementById("eredmeny").innerHTML = ElotteUtana(anev)
}
//#endregion
