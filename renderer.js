let form=document.getElementById('form')
let label=document.querySelectorAll('.labels')
let input=document.querySelectorAll('.inputs')
let start=document.getElementById('start')
let neww = document.getElementById('new');
neww.onclick=()=>{
    neww.style.display='none'
    form.style.display='block'
    label.forEach((e)=>{
        e.style.display = "block";
    })
    input.forEach((e)=>{
        e.style.display = "block";
    })
    start.style.display='block'
}
start.onclick=()=>{
    let player1=document.getElementById('player1').value;
    let player2=document.getElementById('player2').value;
    if(player1=="" || player2==""){
        alert('please enter players name')
    }
    else{
    window.bridge.start(player1,player2);
    }
}