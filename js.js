
function Toggle1(){
    if(document.getElementById("btn1").style.color=="red")
    {
        document.getElementById("btn1").style.color="gray";
    }
    else
    {
        document.getElementById("btn1").style.color="red";
    }
}
function Toggle2(){
    if(document.getElementById("btn2").style.color=="red")
    {
        document.getElementById("btn2").style.color="gray";
    }
    else
    {
        document.getElementById("btn2").style.color="red";
    }
}
function Toggle3(){
    if(document.getElementById("btn3").style.color=="red")
    {
        document.getElementById("btn3").style.color="gray";
    }
    else
    {
        document.getElementById("btn3").style.color="red";
    }
}
function Toggle4(){
    if(document.getElementById("btn4").style.color=="red")
    {
        document.getElementById("btn4").style.color="gray";
    }
    else
    {
        document.getElementById("btn4").style.color="red";
    }
}


function Tog1(){
    if(document.getElementById("s1").style.color=="black")
    {
        document.getElementById("s1").style.color="gray";
    }
    else
    {
        document.getElementById("s1").style.color="black";
    }
}
function Tog2(){
    if(document.getElementById("s2").style.color=="black")
    {
        document.getElementById("s2").style.color="gray";
    }
    else
    {
        document.getElementById("s2").style.color="black";
    }
}
function Tog3(){
    if(document.getElementById("s3").style.color=="black")
    {
        document.getElementById("s3").style.color="gray";
    }
    else
    {
        document.getElementById("s3").style.color="black";
    }
}
function Tog4(){
    if(document.getElementById("s4").style.color=="black")
    {
        document.getElementById("s4").style.color="gray";
    }
    else
    {
        document.getElementById("s4").style.color="black";
    }
}

const follow = document.getElementById('follow');

follow.addEventListener('click', function onClick(event) {
  const backgroundColor = follow.style.backgroundColor;

  if (backgroundColor === '#0095f6') {
    follow.style.backgroundColor = 'white';

  } else {
    follow.style.backgroundColor = '#0095f6';

  }
});
