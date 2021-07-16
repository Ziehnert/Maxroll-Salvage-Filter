var buttonMonk = document.createElement("button");
var buttonNec = document.createElement("button");
var buttonDH = document.createElement("button");
var buttonBarb = document.createElement("button");
var buttonCrus = document.createElement("button");
var buttonWD = document.createElement("button");
var buttonWiz = document.createElement("button");

buttonMonk.innerHTML = "Monk";
buttonNec.innerHTML = "Necro";
buttonDH.innerHTML = "Demonhunter";
buttonBarb.innerHTML = "Barbarian";
buttonCrus.innerHTML = "Crusader";
buttonWD.innerHTML = "Witchdoctor";
buttonWiz.innerHTML = "Wizard";

var ButtonPlace = document.getElementById("Core-Items-to-Keep");
ButtonPlace.appendChild(document.createElement("br"));
ButtonPlace.appendChild(buttonMonk);
ButtonPlace.appendChild(buttonNec);
ButtonPlace.appendChild(buttonDH);
ButtonPlace.appendChild(buttonBarb);
ButtonPlace.appendChild(buttonCrus);
ButtonPlace.appendChild(buttonWD);
ButtonPlace.appendChild(buttonWiz);

function Monk(action) {

    var MonkColumns = document.getElementsByClassName('has-inline-color has-rare-item-color');
    for (let i = 0; i < MonkColumns.length; i++) {
        var j = MonkColumns[i].closest("tr"); 
        j.style.display = action
    }
}

function Necromancer(action) {

    var NecromancerColumns = document.getElementsByClassName('has-inline-color has-death-breath-color');
    for (let i = 0; i < NecromancerColumns.length; i++) {
        var j = NecromancerColumns[i].closest("tr"); 
        j.style.display = action
    }
}

function DH(action) {

    var DHColumns = document.getElementsByClassName('has-inline-color has-light-red-color');
    for (let i = 0; i < DHColumns.length; i++) {
        var j = DHColumns[i].closest("tr"); 
        j.style.display = action
    }
}

function Barbarian(action) {

    var BarbarianColumns = document.getElementsByClassName('has-inline-color has-mid-orange-color');
    for (let i = 0; i < BarbarianColumns.length; i++) {
        var j = BarbarianColumns[i].closest("tr"); 
        j.style.display = action
    }
}

function Crusader(action) {

    var CrusaderColumns = document.getElementsByClassName('has-inline-color has-common-item-color');
    for (let i = 0; i < CrusaderColumns.length; i++) {
        var j = CrusaderColumns[i].closest("tr"); 
        j.style.display = action
    }
}

function Witchdoctor(action) {

    var WitchdoctorColumns = document.getElementsByClassName('has-inline-color has-deep-green-color');
    for (let i = 0; i < WitchdoctorColumns.length; i++) {
        var j = WitchdoctorColumns[i].closest("tr"); 
        j.style.display = action
    }
}

function Wizard(action) {

    var WizardColumns = document.getElementsByClassName('has-inline-color has-mid-purple-color');
    for (let i = 0; i < WizardColumns.length; i++) {
        var j = WizardColumns[i].closest("tr"); 
        j.style.display = action
    }
}

buttonMonk.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        Monk("");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        Monk("none");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonNec.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        Necromancer("");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        Necromancer("none");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonDH.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        DH("");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        DH("none");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonBarb.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        Barbarian("");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        Barbarian("none");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonCrus.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        Crusader("");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        Crusader("none");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonWD.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        Witchdoctor("");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        Witchdoctor("none");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });

buttonWiz.addEventListener ("click", function() {
    
    if (this.style.backgroundColor == "rgb(71, 71, 71)"){
        Wizard("");
        this.style.backgroundColor = "rgb(5, 122, 240)"
    } else {
        Wizard("none");
        this.style.backgroundColor = "rgb(71, 71, 71)"
    }
  });
