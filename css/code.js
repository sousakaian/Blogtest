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


function myFunction(){
    let SM = $("#SM");
    let Smim = $("#Smim");
    let PJ = $("#PJ");
    let Proj = $("#Proj");
    let GL = $("#GL");
    let Gale = $("#Gale"); 
    console.log(SM.css("display"))
    if (Smim.attr('check') == "checked") {
        SM.css("display", "block");
        SM.css("opacity", "1");
        SM.css("height","auto");
    } else {
        SM.css("display","none");
        SM.css("opacity","0");
        SM.css("height","0px");
    }
    if (Proj.attr('check') == "checked") {
        PJ.css("display","block");
        PJ.css("opacity","1");
        PJ.css("height","auto");
    } else {
        PJ.css("display","none");
        PJ.css("opacity","0");
        PJ.css("height","0px");
    }
    if (Gale.attr('check') == "checked") {
        GL.css("display","block");
        GL.css("opacity","1");
        GL.css("height","auto");
    } else {
        GL.css("display","none");
        GL.css("opacity","0");
        GL.css("height","0px");
    }
    console.log(Smim.attr('check'),"2")
    console.log(Gale.attr('check'),"2")
    console.log(Proj.attr('check'),"2")
    var GLa = []
    var GL_a = []
    var BGLa = []
    for (let i = 0; i <= $(':input[name*="gal"]').length; i++) {
        GLa[i] = $("#GL" + i);
        GL_a[i] = $("#GL_" + i);
        BGLa[i] = $("#BGL" + i);
        if(GLa[i].attr('check') == "checked"){
            GL_a[i].css("display","inline-block");
            GL_a[i].css("opacity","1");
            GL_a[i].css("height","auto");
            BGLa[i].css("border","solid 10px black");
        } else {
            GL_a[i].css("display","none");
            GL_a[i].css("opacity","0");
            GL_a[i].css("height","0px");
            BGLa[i].css("border","solid 10px #fa5");
        }
    }
    var Pja = []
    var Pj_a = []
    var BPja = []
    for (let o = 0; o <= $(':input[name*="pro"]').length; o++) {
        Pja[o] = $("#PJ" + o);
        Pj_a[o] = $("#PJ_" + o);
        BPja[o] = $("#BPjaPJ" + o);
        if(Pja[o].attr('check') == "checked"){
            Pj_a[o].css("display","inline-block");
            Pj_a[o].css("opacity","1");
            Pj_a[o].css("height","auto");
            BPja[o].css("border","solid 10px black");

        } else {
            Pj_a[o].css("display","none");
            Pj_a[o].css("opacity","0");
            Pj_a[o].css("height","0px");
            BPja[o].css("border","solid 10px #fa5");
        }
    }
}
