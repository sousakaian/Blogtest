function myFunction() {
	//Navigation Elements
	let SM = document.getElementById("SM");
    let Smim = document.getElementById("Smim");
    let PJ = document.getElementById("PJ");
    let Proj = document.getElementById("Proj");
    let GL = document.getElementById("GL");
    let Gale = document.getElementById("Gale");
    if (Smim.checked != false) {
        SM.style.display = "block";
        SM.style.opacity = "1";
        SM.style.height = "auto";
    } else {
        SM.style.display = "none";
        SM.style.opacity = "0";
        SM.style.height = "0px";
    }
    if (Proj.checked != false) {
        PJ.style.display = "block";
        PJ.style.opacity = "1";
        PJ.style.height = "auto";
    } else {
        PJ.style.display = "none";
        PJ.style.opacity = "0";
        PJ.style.height = "0px";
    }
    if (Gale.checked != false) {
        GL.style.display = "block";
        GL.style.opacity = "1";
        GL.style.height = "auto";
    } else {
        GL.style.display = "none";
        GL.style.opacity = "0";
        GL.style.height = "0px";
    }
    //Galery elements
    let GL1 = document.getElementById("GL1");
    let GL_1 = document.getElementById("GL_1");
    let GL2 = document.getElementById("GL2");
    let GL_2 = document.getElementById("GL_2");
    let GL3 = document.getElementById("GL3");
    let GL_3 = document.getElementById("GL_3");
    let GL4 = document.getElementById("GL4");
    let GL_4 = document.getElementById("GL_4");
    let GL5 = document.getElementById("GL5");
    let GL_5 = document.getElementById("GL_5");
    if (GL1.checked != false) {
        GL_1.style.display = "inline-block";
        GL_1.style.opacity = "1";
        GL_1.style.height = "auto";
    } else {
        GL_1.style.display = "none";
        GL_1.style.opacity = "0";
        GL_1.style.height = "0px";
    }
    if (GL2.checked != false) {
        GL_2.style.display = "inline-block";
        GL_2.style.opacity = "1";
        GL_2.style.height = "auto";
    } else {
        GL_2.style.display = "none";
        GL_2.style.opacity = "0";
        GL_2.style.height = "0px";
    }
    if (GL3.checked != false) {
        GL_3.style.display = "inline-block";
        GL_3.style.opacity = "1";
        GL_3.style.height = "auto";
    } else {
        GL_3.style.display = "none";
        GL_3.style.opacity = "0";
        GL_3.style.height = "0px";
    }
    if (GL4.checked != false) {
        GL_4.style.display = "inline-block";
        GL_4.style.opacity = "1";
        GL_4.style.height = "auto";
    } else {
        GL_4.style.display = "none";
        GL_4.style.opacity = "0";
        GL_4.style.height = "0px";
    }
    if (GL5.checked != false) {
        GL_5.style.display = "inline-block";
        GL_5.style.opacity = "1";
        GL_5.style.height = "auto";
    } else {
        GL_5.style.display = "none";
        GL_5.style.opacity = "0";
        GL_5.style.height = "0px";
    }
    //Galery elements
    let PJ1 = document.getElementById("PJ1");
    let PJ_1 = document.getElementById("PJ_1");
    let PJ2 = document.getElementById("PJ2");
    let PJ_2 = document.getElementById("PJ_2");
    let PJ3 = document.getElementById("PJ3");
    let PJ_3 = document.getElementById("PJ_3");
    let PJ4 = document.getElementById("PJ4");
    let PJ_4 = document.getElementById("PJ_4");
    let PJ5 = document.getElementById("PJ5");
    let PJ_5 = document.getElementById("PJ_5");
    if (PJ1.checked != false) {
        PJ_1.style.display = "inline-block";
        PJ_1.style.opacity = "1";
        PJ_1.style.height = "auto";
    } else {
        PJ_1.style.display = "none";
        PJ_1.style.opacity = "0";
        PJ_1.style.height = "0px";
    }
    if (PJ2.checked != false) {
        PJ_2.style.display = "inline-block";
        PJ_2.style.opacity = "1";
        PJ_2.style.height = "auto";
    } else {
        PJ_2.style.display = "none";
        PJ_2.style.opacity = "0";
        PJ_2.style.height = "0px";
    }
    if (PJ3.checked != false) {
        PJ_3.style.display = "inline-block";
        PJ_3.style.opacity = "1";
        PJ_3.style.height = "auto";
    } else {
        PJ_3.style.display = "none";
        PJ_3.style.opacity = "0";
        PJ_3.style.height = "0px";
    }
    if (PJ4.checked != false) {
        PJ_4.style.display = "inline-block";
        PJ_4.style.opacity = "1";
        PJ_4.style.height = "auto";
    } else {
        PJ_4.style.display = "none";
        PJ_4.style.opacity = "0";
        PJ_4.style.height = "0px";
    }
    if (PJ5.checked != false) {
        PJ_5.style.display = "inline-block";
        PJ_5.style.opacity = "1";
        PJ_5.style.height = "auto";
    } else {
        PJ_5.style.display = "none";
        PJ_5.style.opacity = "0";
        PJ_5.style.height = "0px";
    }
}
function glclose(){
	var ele = document.getElementsByName("gal");
	for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
}
function pjclose(){
	var ele = document.getElementsByName("pro");
    for(var i=0;i<ele.length;i++)
	ele[i].checked = false;
}