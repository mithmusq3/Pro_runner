const canvas = document.querySelector('canvas')
canvas.fillStyle = '#4dff4d';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var forpoints;
var pos='0';
const x= canvas.width/2;
const y= canvas.height/2 ;
var b=2*x;
var sid=2*x;
var points=0;
var t=y;
var rand;

 const background = canvas.getContext('2d');
 var musq = document.getElementById("BGM");
 var musqjump = document.getElementById("jump");
 const player = canvas.getContext('2d');

 // Designing box

 player.fillStyle = '#ff4d4d';         // reddish square box with side 50px 
 player.fillRect(x-450,y,50,50);       //posi   
 
 //Designing upper path 


const upperpath = canvas.getContext('2d');
upperpath.fillStyle = '#85e0e0';
upperpath.fillRect(0,0,2*x,y-121);    //posi

//Designing lower path 

const lowerpath = canvas.getContext('2d');
lowerpath.fillStyle = '#85e0e0';
lowerpath.fillRect(0,y+51,2*x,y-51);    // posi

//Follow ups of hole 

const holebf = canvas.getContext('2d');
const holebb = canvas.getContext('2d');
const holeuf = canvas.getContext('2d');
const holeub = canvas.getContext('2d');

// if (typeof(Storage) !== "undefined") {
//     localStorage.setItem("highscore_task2"," "); 
//   }                                                                                                     
//   const isStorage = 'undefined' !== typeof localStorage;


function motion(){
    
if (pos%2=='0'){
        
       if(t==y)
        { 
            Uppertrain();
            // musqjump.play();
     
             setTimeout(()=>{pos++;},500)  //prevent mixing of the animate function caused by clicking the mouse before it reaches the other part 
     
          if(pos=='0'){   //start an hole initialization and background music
         
           place('1');   
           forpoints=setInterval(()=>{points++; score.innerHTML="Score :"+points;},250);
           musq.play();
           musq.loop = true;
           }
        }
        
    }
    else if(pos%2=="1"){
        if(t==y-120)
        {
            Lowertrain();
            // musqjump.play();

        setTimeout(()=>{pos++;},500)   //prevent mixing of the animate function caused by clicking the mouse before it reaches the other part 
    }}
}


function Uppertrain(){
    player.clearRect(0,y-121,x*2,171);
    var Uppertrainmotion=requestAnimationFrame(Uppertrain)
        
    player.fillStyle = '#ff4d4d';
    player.fillRect(x-450,t,50,50);
 
        t=t-3;   // monitoring speed of motion
       
        
        if((t==y-120)||(t<y-120)){
            cancelAnimationFrame(Uppertrainmotion);
           
        }  
}

function Lowertrain(){
    player.clearRect(0,y-121,x*2,171);
    var Lowertrainmotion=requestAnimationFrame(Lowertrain)
    player.fillStyle = '#ff4d4d';
    player.fillRect(x-450,t,50,50);
 
         t=t+3; // monitoring speed of motion
         
        if((t==y)||(t>y)){
            cancelAnimationFrame(Lowertrainmotion);
           
        }  
}


var score = document.getElementById('score');
var hscoretab = document.getElementById('highestscore')
var high_score = localStorage.getItem("highscore_task2");
if ((high_score == null)||(high_score=='')) {
    high_score = 0;
    console.log('Working YAY');
    localStorage.setItem("highscore_task2", JSON.stringify(high_score))
}
else {
    high_score = JSON.parse(high_score);
    hscoretab.innerHTML = "HighScore: " + high_score;
}
function place(zran)
{

    if(zran=='1')
         {
            b=2*x;
            sid= 2*x;
            drawholebf();
            drawholebb();               
        }
    else if(zran=='2'){
        
        b=2*x;
        sid= 2*x;
        drawholeuf();
        drawholeub();
        }
}

function drawholebf(){
    
    boxf=requestAnimationFrame(drawholebf);
    holebf.fillStyle= '#4dff4d';
    holebf.fillRect(b,y+50,200,y+51);
    b-=8;

    check1(x-450,t,b,sid);    
    if((b==0)||(b<0)){
        cancelAnimationFrame(boxf);      
    }
}

function drawholebb(){
    
    boxb=requestAnimationFrame(drawholebb);
    holebb.fillStyle= '#85e0e0';
    holebb.fillRect(sid+200,y+50,100,y+51);//third input here is painting repeatedly without clear the previous mark so its continuous  
    sid-=8;
    
    if(sid==-200){
        cancelAnimationFrame(boxb);
        rand=Math.floor((Math.random()*2)+1);
        
        place(rand);
    }
}
function drawholeuf(){
    
    boxf=requestAnimationFrame(drawholeuf);
    holeuf.fillStyle= '#4dff4d';
    holeuf.fillRect(b,0,200,y-120);
    b-=8;
    check2(x-450,t,b,sid);
    
    if(b==0){
        cancelAnimationFrame(boxf);
        
    }
}
function drawholeub(){
    
    boxb=requestAnimationFrame(drawholeub);
    holeub.fillStyle= '#85e0e0';
    holeub.fillRect(sid+200,0,100,y-120);
    sid-=8;
    
    if(sid==-200){
        cancelAnimationFrame(boxb);
       
        rand=Math.floor((Math.random()*2)+1);
       
        place(rand);
    }
}

function check1(bx,by,ox,ox2)
{ 
    if((ox-bx<=50) && (y-by<=2) && (ox2-bx<=0) && (bx-ox<=200)){
      
        cancelAnimationFrame(boxf);
        cancelAnimationFrame(boxb);
        clearInterval(forpoints);
        musq.loop = false;
        musq.load();
        gameover();
        
    }
    
}
function check2(bx,by,ox,ox2)
{ 
    if((ox-bx<=50)&&(by-(y-120)<=0)&&(ox2-bx<=0)&&(bx-ox<=200)){
        
        cancelAnimationFrame(boxf);
        cancelAnimationFrame(boxb);
        clearInterval(forpoints);
        musq.loop = false;
        musq.load();
        gameover();
        
    }
    
}

function gameover()
{   shoutout.style.display = 'visible';
    canvas.style.display = 'none';
    scor.innerHTML = 'Score :' + points;
    
    if(points>high_score){
        high_score = points;
        hscoretab.innerHTML = "Highscore :" + high_score;
        localStorage.setItem("highscore_task2", JSON.stringify(high_score));

    }
    var Highscoreloc=document.getElementById("Highscoreloc");
    Highscoreloc.innerHTML = "HighScore: " + high_score;

}

window.addEventListener('keydown', function (e) {
    key = e.keyCode;
    if(key==32){
    	e.preventDefault();
    	motion();
    }
});

