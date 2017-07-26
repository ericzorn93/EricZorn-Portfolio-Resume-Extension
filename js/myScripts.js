/* Made By Eric Zorn */

function checkLoad() {
    "use strict";
    var loaded = console.log("The document is loaded properly!");

    document.addEventListener('load', loaded);
}


function getId(id) {
    "use strict";
    document.getElementById(id);
}


function fillData() {
    "use strict";
    getId("name").innerHTML = "< Hey Everyone, my name is Eric Zorn! />";
}































window.document.onload = checkLoad();