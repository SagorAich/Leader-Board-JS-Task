//task-1
document.getElementById('top-player1').style.color='red';

//task-2
document.getElementById('players').style.backgroundColor='rgba(2,100,100,.1)';

//task-3
document.getElementById('add-button').addEventListener('click',function(){
    const li=document.createElement('li');
    li.innerText='adding by deligate';
    const parent=document.getElementById('parent-container');
    parent.appendChild(li);
});

//task-4
document.getElementById('increase-button').addEventListener('click',function(){
    console.log('clicked');
    const inputField=document.getElementById('input');
    //input.value=0;
    let inputValueText=inputField.value;
    let inputValue=parseFloat(inputValueText);
    inputValue=inputValue+1;
    inputField.value=inputValue;
    const increaseButton=document.getElementById('increase-button');
    if(inputField.value==5){
        increaseButton.setAttribute('disabled',true);
    }
})