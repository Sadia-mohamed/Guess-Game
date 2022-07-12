let winAudio= new Audio('./win.mp3')
let failAudio = new Audio('fail.mp3')
let nearFail= new Audio('nearFail.mp3')
var count = 0;

 
 let secretNumber = Math.trunc(Math.random() * 20)+1;
 console.log(secretNumber);
 const checkBtn= document.querySelector('.check');


 checkBtn.addEventListener('click', function(){
     count++;
 let guessNumber =Number(document.querySelector('.guess').value);

 if (!guessNumber){
        document.querySelector(".message").textContent = "⛔ No Number!" ;
    }  

else if (guessNumber != secretNumber){
    document.querySelector(".message").textContent =
     guessNumber > secretNumber ? '🆙too high' : ' ⬇too low';  
     
     document.querySelector('.guess').value= '';

     if (count===4){
        nearFail.play();
     } else if (count===5 ){
        failAudio.play();
        document.querySelector('.message').innerHTML = '<h4> no attempt left ,try again! 😥 </h4> '
        document.querySelector('.number').textContent = secretNumber;
        btncheck.disable = true;
        checkBtn.style.backgroundColor ="rgba(220,220,220,0.677)";

     }
  
}
  else if (count===5 && guessNumber === secretNumber){
    
    document.querySelector(".message").textContent="correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('body').style.backgroundColor ="green";
    document.querySelector(".number").style.width='15rem';
    checkBtn.style.backgroundColor="rgba(220,220,220,0.677)"
    checkBtn.style.cursor="default";
    winAudio.play();
    checkBtn.disable = true;

}  else if (guessNumber === secretNumber){
    
    document.querySelector(".message").textContent="correct Number";
    console.log('inside the correct' + secretNumber);
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('body').style.backgroundColor ="green";
    document.querySelector(".number").style.width='15rem';
    checkBtn.style.backgroundColor="rgba(220,220,220,0.677)"
     checkBtn.style.cursor="default";
    winAudio.play();
    checkBtn.disable = true;
}  
   

});

const againBtn = document.querySelector('.again');
   againBtn.addEventListener('click',()=>{
   count = 0;
   secretNumber = Math.trunc(Math.random() * 20)+1;
   document.querySelector(".number").textContent="?";
   document.querySelector(".number").style.width="10rem";
   document.querySelector(".guess").value="";
   document.querySelector(".message").textContent="Start guessing...";
   checkBtn.disable=false;
   checkBtn.style.cursor= 'pointer';
   document.querySelector('body').style.backgroundColor="#f0db4f";
   checkBtn.style.backgroundColor="#388697";

   
});



// let againBtn = document.querySelector('again');
// againBtn = addEventListener('click', function(){
   // document.querySelector(".number").textContent = '?';
   
   // document.querySelector('.guess').value= '';



// });