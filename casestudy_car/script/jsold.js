var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value * 1000;

slider.oninput = function() {
    var a = Number(this.value) * 1000;
    output.innerHTML = a;
}

function every() {
    // Get the checkbox
    var checkBox = document.getElementById("e12");
    checkBox.innerText = "ko";
    if (checkBox.checked == true) {
        console.log("ck")
        var elems = document.getElementsByClassName("hbk");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
        var elems = document.getElementsByClassName("sv");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
        var elems = document.getElementsByClassName("sd");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
    }

}

function hatchback() {
    // Get the checkbox
    var checkBox = document.getElementById("hb");
    if (checkBox.checked == true) {
        console.log("ck")
        var elems = document.getElementsByClassName("hbk");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
        var elems = document.getElementsByClassName("sv");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
        }
        var elems = document.getElementsByClassName("sd");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
        }
    }
}

function sedan() {
    // Get the checkbox
    var checkBox = document.getElementById("sedan");
    if (checkBox.checked == true) {
        console.log("ck")
        var elems = document.getElementsByClassName("hbk");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
        }
        var elems = document.getElementsByClassName("sv");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
        }
        var elems = document.getElementsByClassName("sd");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
    }
}

function suv() {
    // Get the checkbox
    var checkBox = document.getElementById("suv");
    if (checkBox.checked == true) {
        console.log("ck")
        var elems = document.getElementsByClassName("hbk");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = "none";
        }
        var elems = document.getElementsByClassName("sv");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'block';
        }
        var elems = document.getElementsByClassName("sd");
        for (var i = 0; i < elems.length; i += 1) {
            elems[i].style.display = 'none';
        }
    }
}


document.getElementById("u5").addEventListener("change", function() {
    console.log("hk");
    document.getElementById("120").style.display = "none "
    document.getElementById("verna").style.display = "none"
    document.getElementById("a3").style.display = "none"
    document.getElementById("x3").style.display = "none "
    document.getElementById("swift").style.display = "block"
    document.getElementById("polo").style.display = "none"
    document.getElementById("jp").style.display = "none"
    document.getElementById("innova").style.display = "none"
    document.getElementById("rapid").style.display = "none"

})

document.getElementById("5t").addEventListener("click", function() {
    document.getElementById("120").style.display = "block"
    document.getElementById("verna").style.display = "none"
    document.getElementById("a3").style.display = "none"
    document.getElementById("x3").style.display = "none "
    document.getElementById("swift").style.display = "none"
    document.getElementById("polo").style.display = "block"
    document.getElementById("jp").style.display = "none"
    document.getElementById("innova").style.display = "none"

    document.getElementById("rapid").style.display = "none"

})


document.getElementById("10t").addEventListener("click", function() {
    document.getElementById("120").style.display = "none"
    document.getElementById("verna").style.display = "none"
    document.getElementById("a3").style.display = "none"
    document.getElementById("x3").style.display = "none "
    document.getElementById("swift").style.display = "none"
    document.getElementById("polo").style.display = "none"
    document.getElementById("jp").style.display = "block"
    document.getElementById("innova").style.display = "none"

    document.getElementById("rapid").style.display = "block"

})

document.getElementById("15t").addEventListener("click", function() {
    document.getElementById("120").style.display = "none";
    document.getElementById("verna").style.display = "block";
    document.getElementById("a3").style.display = "none";
    document.getElementById("x3").style.display = "none ";
    document.getElementById("swift").style.display = "none";
    document.getElementById("polo").style.display = "none";
    document.getElementById("jp").style.display = "none";
    document.getElementById("innova").style.display = "block";

    document.getElementById("rapid").style.display = "none"

})

document.getElementById("20a").addEventListener("click", function() {
    document.getElementById("120").style.display = "none"
    document.getElementById("verna").style.display = "none"
    document.getElementById("a3").style.display = "block"
    document.getElementById("x3").style.display = "block "
    document.getElementById("swift").style.display = "none"
    document.getElementById("polo").style.display = "none"
    document.getElementById("jp").style.display = "none"
    document.getElementById("innova").style.display = "none"
    document.getElementById("rapid").style.display = "none"

})