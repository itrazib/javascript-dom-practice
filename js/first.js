// const btnElement = document.getElementsByTagName('button');

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

function makeBlueViolet(){
    document.body.style.backgroundColor = 'blueViolet'
}

const btnMakeYellow = document.getElementById('btn-make-yel');
btnMakeYellow.onclick = function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// using addEventListener

document.getElementById('btn-make-red').addEventListener('click', 
    function makeRed(){
    document.body.style.backgroundColor = 'red';
})
