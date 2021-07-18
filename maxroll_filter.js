var buttonMonk = document.createElement("button");
var buttonNec = document.createElement("button");
var buttonDH = document.createElement("button");
var buttonBarb = document.createElement("button");
var buttonCrus = document.createElement("button");
var buttonWD = document.createElement("button");
var buttonWiz = document.createElement("button");

function ButtonNames(lang) {
    if (lang === "EN") {
        buttonMonk.innerHTML = "Monk";
        buttonNec.innerHTML = "Necro";
        buttonDH.innerHTML = "Demonhunter";
        buttonBarb.innerHTML = "Barbarian";
        buttonCrus.innerHTML = "Crusader";
        buttonWD.innerHTML = "Witchdoctor";
        buttonWiz.innerHTML = "Wizard";
    } else if (lang === "DE") {
        buttonMonk.innerHTML = "Mönch";
        buttonNec.innerHTML = "Totenbeschwörer";
        buttonDH.innerHTML = "Dämonenjäger";
        buttonBarb.innerHTML = "Barbar";
        buttonCrus.innerHTML = "Kreuzritter";
        buttonWD.innerHTML = "Hexendoktor";
        buttonWiz.innerHTML = "Zauberer";
    }
}

function CreateButtons(ButtonPlace) {

    ButtonPlace.appendChild(document.createElement("br"));
    ButtonPlace.appendChild(buttonMonk);
    ButtonPlace.appendChild(buttonNec);
    ButtonPlace.appendChild(buttonDH);
    ButtonPlace.appendChild(buttonBarb);
    ButtonPlace.appendChild(buttonCrus);
    ButtonPlace.appendChild(buttonWD);
    ButtonPlace.appendChild(buttonWiz);
}

try {
    var ButtonLocation = document.getElementById("Core-Items-to-Keep")
    ButtonNames("EN")
    CreateButtons(ButtonLocation)
} catch {
    var ButtonLocation = document.getElementById("Zu-behalten")
    ButtonNames("DE")
    CreateButtons(ButtonLocation)
    
}

function ClassColumn(action, classID) {

    var TableColumns = document.getElementsByClassName('has-inline-color ' + classID);
    for (let i = 0; i < TableColumns.length; i++) {
        var j = TableColumns[i].closest("tr"); 
        j.style.display = action
    }
}

buttonMonk.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        ClassColumn("", "has-rare-item-color");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        ClassColumn("none", "has-rare-item-color");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonNec.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        ClassColumn("", "has-death-breath-color");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        ClassColumn("none", "has-death-breath-color");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonDH.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        ClassColumn("", "has-light-red-color");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        ClassColumn("none", "has-light-red-color");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonBarb.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        ClassColumn("", "has-mid-orange-color");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        ClassColumn("none", "has-mid-orange-color");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonCrus.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        ClassColumn("", "has-common-item-color");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        ClassColumn("none", "has-common-item-color");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonWD.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        ClassColumn("", "has-deep-green-color");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        ClassColumn("none", "has-deep-green-color");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonWiz.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        ClassColumn("", "has-mid-purple-color");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        ClassColumn("none", "has-mid-purple-color");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });