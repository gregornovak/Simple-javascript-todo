//pridobim potrebne elemente
var newToDo = document.getElementById("add");
var button = newToDo.nextElementSibling;
var ul = document.querySelector("ul");

/******************************************************************************
funkcija za dodajanje "dogodkov"
******************************************************************************/
//na gumb "dodaj" dodam event listener na levi miškin klik
button.addEventListener("click", function(){
    //najprej preverim če je zapis daljši od 0 znakov
    if(newToDo.value.length > 0 && newToDo.value.length <= 25) {
        //pridobim vrednost, ki jo je uporabnik vpisal v input polje
        var value = newToDo.value;
        //ustvarim dva elementa katera bom nato dodal v dom
        var li = document.createElement("li");
        var del = document.createElement("button");
        var izbrisi = document.createTextNode("Izbriši");
        //nastavim attribut type="submit"
        del.setAttribute("type", "submit");
        //dodam razred gumbu
        del.classList.add("delete");
        //tekst iz spremenljivke izbrisi, shranim v gumb za brisanje
        del.appendChild(izbrisi);
        //vrednost, ki jo je uporabnik vpisal v input dodam v li element
        li.innerHTML = value;
        //dodam li ter button pod ul-jem
        ul.appendChild(li);
        li.appendChild(del);
        //na koncu še nastavim prazno vrednost input fielda
        newToDo.value = "";
    } else{
        alert("Nov zapis mora biti dolg vsaj 1 znak in krajši od 25 znakov!");
    }
});

//dodal event listener na input field, ki reagira ko uporabnik pritisne enter tipko, omogoča pa isto funkcionalnost kot zgornja funkcija
newToDo.addEventListener("keyup", function(event){
    if(newToDo.value.length > 0 && newToDo.value.length <= 25) {
        if(event.which === 13){
            var value = newToDo.value;
            var li = document.createElement("li");
            var del = document.createElement("button");
            var izbrisi = document.createTextNode("Izbriši");
            del.setAttribute("type", "submit");
            del.classList.add("delete");
            del.appendChild(izbrisi);
            li.innerHTML = value;
            ul.appendChild(li);
            li.appendChild(del);
            newToDo.value = "";
        }

    } else{
        alert("Nov zapis mora biti dolg vsaj 1 znak in krajši od 25 znakov!");
    }
});

/******************************************************************************
funkcija za brisanje "dogodkov"
******************************************************************************/
//funkcija za brisanje "dogodkov"
//ker sem dinamično ustvarjal li elemente, sem moral v if zanki preveriti če kliknjen element obstaja, nato pa zbrisal elemente
ul.addEventListener("click", function(event){
    if(event.target.className === "delete"){
        var li = ul.querySelector("li");
        ul.removeChild(li);
    }
});
