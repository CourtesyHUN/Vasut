const allomasok = ["Budapest-Nyugati", "Zugló", "Kőbánya alsó", "Kőbánya-Kispest", "Pestszentlőrinc", "Szemeretelep","Ferihegy","Vecsés","Vecsés-Kertekalja", "Üllő", "Hosszúberek-Péteri", "Monor", "Monorierdő", "Pilis", "Albertirsa", "Ceglédbercel", "Ceglédbercel-Cserő", "Budai út", "Cegléd", "Abony", "Szolnok", "Szajol", "Törökszentmiklós", "Fegyvernek-Örményes", "Kisújszállás"]

function ElotteUtana(megallo) 
{
    var p = allomasok.indexOf(megallo);
    var r = "";
    if (p == -1) 
    {
        r= "Nincs ilyen megálló ezen a vonalon"   
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
        r += "Elötte: ---"  
    }
    else
    {
        r += "Elötte: "+allomasok[p+1]  
    }
    return r;
}