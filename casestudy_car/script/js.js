document.getElementById("buybtn").addEventListener("click", function() {
    document.getElementById("change").style.display = "none";
    document.getElementById("by").style.display = "block";

    document.getElementById("sell").style.display = "none";
});

document.getElementById("sellbtn").addEventListener("click", function() {
    document.getElementById("change").style.display = "none";
    document.getElementById("sell").style.display = "block";
    document.getElementById("by").style.display = "none";
});

document.getElementById("subm").addEventListener("click", function() {
    document.getElementById("lj").innerText = "Logout";
});



function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("hb");
    if (checkBox.checked == true) {
        console.log("ck")
        document.getElementById("hbk").style.display = "block";

        document.getElementById("sd").style.display = "none";

        document.getElementById("sv").style.display = "none";
    } else {

        document.getElementById("sd").style.display = "none";

        document.getElementById("sv").style.display = "none";
    }
}