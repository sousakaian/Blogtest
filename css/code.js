$(document).ready(function () { alert('on jQuery ready'); });

function inptrue1(but) {
    let Smim = $("#Smim");
    let Proj = $("#Proj");
    let Gale = $("#Gale");
    Smim.attr('check',"false");
    Gale.attr('check',"false");
    Proj.attr('check',"false");
    if(but=="Sbut"){
        Smim.attr('check',"checked");
    }
    if(but=="Gbut"){
        Gale.attr('check',"checked");
    }
    if(but=="Pbut"){
        Proj.attr('check',"checked");
    }
}

function glclose(){
    var Gla = []
    for (let i = 0; i <= $(':input[name*="gal"]').length; i++) {
        Gla[i] = $("#GL" + i);
        Gla[i].attr('check',"false");
    }
}
function pjclose(){
    var Pja = []
    for (let i = 0; i <= $(':input[name*="pro"]').length; i++) {
        Pja[i] = $("#PJ" + i);
        Pja[i].attr('check',"false");
    }
}

function inpt2(but) {
    var Gla = []
    for (let i = 0; i <= $(':input[name*="gal"]').length; i++) {
        Gla[i] = $("#GL" + i);
        Gla[i].attr('check',"false");
        if(but==i){
            Gla[i].attr('check',"checked");
        }
    }
}
function inpt3(but) {
    var Pja = []
    for (let i = 0; i <= $(':input[name*="pro"]').length; i++) {
        Pja[i] = $("#PJ" + i);
        Pja[i].attr('check',"false");
        if(but==i){
            Pja[i].attr('check',"checked");
        }
    }
}


function myFunction(z){
	if(z>=3){return;}
	z++
    let SM = $("#SM");
    let Smim = $("#Smim");
    let PJ = $("#PJ");
    let Proj = $("#Proj");
    let GL = $("#GL");
    let Gale = $("#Gale"); 
    if (Smim.attr('check') == "checked") {
        SM.show(250);
    } else {
        SM.hide(250);
    }
    if (Proj.attr('check') == "checked") {
        PJ.show(250);
    } else {
        PJ.hide(250);
    }
    if (Gale.attr('check') == "checked") {
        GL.show(250);
    } else {
        GL.hide(250);
    }
    for (let i = 0; i <= $(':input[name*="gal"]').length; i++) {
        console.log($("#GL" + i).attr('check'),i)
        if($("#GL" + i).attr('check') == "checked"){
            GLs(i);
        } else {
            GLh(i);
        }
    }
    for (let o = 0; o <= $(':input[name*="pro"]').length; o++) {
        console.log($("#PJ" + o).attr('check'),o)
        if($("#PJ" + o).attr('check') == "checked"){
            PJs(o);
        } else {
            PJh(o);
        }
    }
    myFunction(z);
}

function GLs(a){
    $("#GL_" + a).show(500);
    $("#BGL" + a).css("border","solid 10px black");
}
function GLh(a){
    $("#GL_" + a).hide(500);
    $("#BGL" + a).css("border","solid 10px #fa5");
}
function PJs(a){
    $("#PJ_" + a).show(500);
    $("#BPJ" + a).css("border","solid 10px black");
}
function PJh(a){
    $("#PJ_" + a).hide(500);
    $("#BPJ" + a).css("border","solid 10px #fa5");
}