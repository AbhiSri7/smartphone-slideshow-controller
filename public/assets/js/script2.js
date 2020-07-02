
function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}

document.getElementById('choice').onsubmit = function() {
    // this (keyword) refers to form to which onsubmit attached
    // 'ship' is name of radio button group
    var val = getRadioVal(this, 'ch');
    // display value obtained
    if(val=="slidecontrol")
    {
        //setTimeout(function(){window.location= "https://www.google.com;"},500);
        window.open("http://localhost:8080/#/");
        // window.location.assign("https://www.google.com");
    }
    else if(val=="game")
    {
        window.open("../../game.html");
    }
    else
    {
        alert("Please Select an Option");
    }
}



