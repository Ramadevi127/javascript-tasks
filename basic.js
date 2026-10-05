function range() {
    let n = parseInt(document.getElementById("n1").value);
    let a;

    if (n >= 1 && n <= 10) {
        a = "between range";
    } else {
        a = "not in range";
    }

    document.getElementById("n2").value = a;
}

function uppercase(){
    let a=document.getElementById("n3").value
    let b;
    if(a>='A' && a<='Z'){
        b="uppercse"
    }
    else{
        b="lowercase"
    }
    document.getElementById("n4").value=b
}

function lowercase(){
    let a=document.getElementById("n5").value
    let b;
    if(a>='a' && a<='z'){
        b="lowercase"
    }
    else{
        b="uppercse"
    }
    document.getElementById("n6").value=b
}

function vowel(){
    let a=document.getElementById("n7").value
    let b;
    if(a=='A'||a=='E'||a=='I'||a=='O'||a=='U'||a=='a'||a=='e'||a=='i'||a=='o'||a=='u'

    ){
        b="vowel"
    }
    else{
        b="not"
    }
    document.getElementById("n8").value=b
}

function alphabet(){
    let a=document.getElementById("n9").value
    let b;
    if(a>='A'&&a<='Z'||a>='a'&&a<='z'){
        b="aplhabet"
    }
    else{
        b="not"
    }
       document.getElementById("n10").value=b
}

function digit(){
    let a=document.getElementById("n11").value
    let b;
    if(a>=1 && a<=9){
        b="digit"
    }
    else{
        b="not"
    }
     document.getElementById("n12").value=b
}

function login(){
    let a=document.getElementById("n13").value
    let b=document.getElementById("n14").value
    let c;
    if(a=="hero" && b=="1234"){
        c="login suucessful"
    }
    else{
        c="not coorect"
    }
    document.getElementById("n15").value=c
}
