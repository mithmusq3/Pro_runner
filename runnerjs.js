const canvas = document.querySelector('canvas')
canvas.fillStyle = '#4dff4d';
var winx,winy;
if(window.innerWidth<=window.innerHeight){
    winx=window.innerHeight;
    winy=window.innerWidth;
}
else{
    winx=window.innerWidth;
    winy=window.innerHeight;
}
var Quotient = ( winx - (winx % 8)) /8;
Quotient=Quotient*8;
canvas.width = Quotient;
canvas.height =winy;
var forpoints;
var speedincreaser;
var pos='0';
const x= canvas.width/2;
const y= canvas.height/2 ;
var b=2*x;
var sid=2*x;
var points=0;
var t=y;
var obj1h=y-120;
var pu1h=y-120;
var inv1h=y-120;
var re=y;
var condcheck1=0;
var rand;
var speed=0;
var pu1speed=0;
var degrot=0;
var oux1=3*x;
var pux1=3*x;
var inx1=3*x;
var countobj1=1;
var countpu1=1;
var realcountobj1=0;
var realcountpu1=1;
var realcountinv1=1;
var obj1check=0;
var inv1check=0;
var pu1check=0;
var chkcondchek=0;
var minidecider;
var minideciderb;
var minidecider2;
var minidecider2b;
var timeofgame;
var timer=0;
var microvertical;  
var vertadd=0;
var pu1checkdouble=0;
 const background = canvas.getContext('2d');
 var musq = document.getElementById("BGM");
 var musqjump = document.getElementById("jump");
 var musqpower= document.getElementById("power");
 const player = canvas.getContext('2d');
 var image=document.createElement("img");
 image.src="playerA.png";
 var imageb=document.createElement("img");
 imageb.src="playerB.png";
 var imageobj1=document.createElement("img");
 imageobj1.src="obj1.png";
 var imagepu1=document.createElement("img");
 imagepu1.src="slowdown.png";
 var imageinv1=document.createElement("img");
 imageinv1.src="invinsible.png";
 var imageroada=document.createElement("img");
 imageroada.src="roadbasea.png";
 var imageroadb=document.createElement("img");
 imageroadb.src="roadbaseb.png";
 var imagewateru=document.createElement("img");
 imagewateru.src="waterholeup.png";
 var imagewaterb=document.createElement("img");
 imagewaterb.src="waterhole.png";
//Instructions

console.log('The Mine Token Ends the Game');
console.log('The Golden Token Slows down the game for 5 seconds');
console.log('The Grey Token grants you the power of invinsibility for 10 seconds');

 // Designing box

//  player.fillStyle = '#ff4d4d';         // reddish square box with side 50px 
//  player.fillRect(x-(450*x/640),y,50,50);       //posi   
 
 //Designing upper path 


const upperpath = canvas.getContext('2d');
upperpath.fillStyle = '#85e0e0';
upperpath.fillRect(0,0,2*x,y-121);    //posi
upperpath.fillStyle= '#162a3f';
upperpath.fillRect(0,0,2*x,y-221);
//Designing lower path 

const lowerpath = canvas.getContext('2d');
lowerpath.fillStyle = '#85e0e0';
lowerpath.fillRect(0,y+51,2*x,y);    // posi
lowerpath.fillStyle= '#162a3f';
lowerpath.fillRect(0,y+51+180,2*x,y);
//Follow ups of hole 

const holebf = canvas.getContext('2d');
const holebb = canvas.getContext('2d');
const holeuf = canvas.getContext('2d');
const holeub = canvas.getContext('2d');

// 

var trial =canvas.getContext('2d');

//
//just to show the triangle image when the web page loads 
var imageofobj1=canvas.getContext('2d');
var imageofpu1=canvas.getContext('2d');
var imageofinv1=canvas.getContext('2d');
var imageofroadb=canvas.getContext('2d');
var imageofroada=canvas.getContext('2d');
var imageofwaterb=canvas.getContext('2d');
var imageofwateru=canvas.getContext('2d');
    var ctx = canvas.getContext('2d');
    // Draw Triangle
    ctx.drawImage(document.getElementById('frame'), x-(450*x/640),y,50,50);
   
// if (typeof(Storage) !== "undefined") {
//     localStorage.setItem("highscore_task2"," "); 
//   }                                                                                                     
//   const isStorage = 'undefined' !== typeof localStorage;



function motion(){
    
if (pos%2=='0'){
        
       if(t==y)
        { 
            Uppertrain();
            Rotateuptri();
            // musqjump.play();
             
             setTimeout(()=>{pos++;},500)  //prevent mixing of the animate function caused by clicking the mouse before it reaches the other part 
     
          if(pos=='0'){   //start an hole initialization and background music
         
           place('1');   
           speedincreaser=setInterval(()=>{speed+=1;},30000);
           timeofgame=setInterval(()=>{timer++;},1000);
           microvertical=setInterval(()=>{vertadd+=0.5;},60000);
           forpoints=setInterval(()=>{points++; score.innerHTML="Score :"+points;},100);
           musq.play();
           musq.loop = true;
        
           }
        }
        
    }
    else if(pos%2=="1"){
        if(t==y-120)
        {
            Lowertrain();
            Rotatedowntri();
            // musqjump.play();

        setTimeout(()=>{pos++;},500)   //prevent mixing of the animate function caused by clicking the mouse before it reaches the other part 
    }}
}

function Rotateuptri(){

    trial.save();
    trial.translate(x-(450*x/640)+25,re+25);
    trial.rotate(degrot*Math.PI/180);
    trial.clearRect(-26.5,-26.5,53.9,53.9);
    trial.restore();

     var Uprotation=requestAnimationFrame(Rotateuptri);
     re=re-3; 
      
    trial.save();
    trial.translate(x-(450*x/640)+25,re+25);
    trial.rotate(degrot*Math.PI/180);
    trial.drawImage(image,-25,-25,50,50);
    trial.restore();

    degrot=degrot+4.59;
    
    if(degrot>180){
                     cancelAnimationFrame(Uprotation);
                     degrot=0;
                } 
}
function Rotatedowntri(){
    // trial.clearRect(x-(450*x/640)-11,y-121,72,171);

    trial.save();
    trial.translate(x-(450*x/640)+25,re+24);
    trial.rotate(degrot*Math.PI/180);
    trial.clearRect(-26.6,-26.6,55.5,55.5);
    trial.restore();

    var Downrotation=requestAnimationFrame(Rotatedowntri);
    
    re=re+3; 

   // save the unrotated trial of the canvas so we can restore it later
   // the alternative is to untranslate & unrotate after drawing
   trial.save();

   // move to the center of the canvas
   trial.translate(x-(450*x/640)+25,re+25);

   // rotate the canvas to the specified degrees
   trial.rotate(degrot*Math.PI/180);

   // draw the image
   // since the trial is rotated, the image will be rotated also
   trial.drawImage(imageb,-25,-25,50,50);

   // we’re done with the rotating so restore the unrotated trial
   trial.restore();
   degrot=degrot+4.59;
   if(degrot>180){
                    cancelAnimationFrame(Downrotation);
                    degrot=0;
               } 
}
function Uppertrain(){
    // player.clearRect(0,y-121,x*2,171);
    var Uppertrainmotion=requestAnimationFrame(Uppertrain)   
    // player.fillStyle = '#ff4d4d';
    // player.fillRect(x-(450*x/640),t,50,50);
 
        t=t-3;   // monitoring speed of motion
       
        
            
        if((t==y-120)||(t<y-120)){
            cancelAnimationFrame(Uppertrainmotion);
           
        }  
}

function Lowertrain(){
    // player.clearRect(0,y-121,x*2,171);
    var Lowertrainmotion=requestAnimationFrame(Lowertrain)
    // player.fillStyle = '#ff4d4d';
    // player.fillRect(x-(450*x/640),t,50,50);
 
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
            holebf.fillRect(2*x,y+50,100,y+51);
            drawholebf();
            drawholebb();
            if(timer>20)
            {
            minidecider=Math.floor(Math.random() * 2);
            switch(minidecider){
                case 0:
                    if((realcountobj1)%2==0)
                    {
                     oux1=3*x;
                     obj1h=y-(Math.floor(Math.random() * 120) + 1);
                     callobj1();
                    }
                      break;
                case 1:
                    minideciderb=Math.floor(Math.random() * 2);
                    switch (minideciderb) {
                        case 0:

                            if((realcountinv1)%2==0)
                            {
                             inx1=3*x;
                             inv1h=y-(Math.floor(Math.random() * 120) + 1);
                             callinv1();
                            }
                          break;
                        case 1:
                            if((realcountpu1)%2==0)
                            {
                             pux1=3*x;
                             pu1h=y-(Math.floor(Math.random() * 120) + 1);
                             callpu1();
                            }
                          break;
                    }
                    realcountinv1++;
                    realcountpu1++;
                      break;
            }         
            realcountobj1++;
            }
        }
    else if(zran=='2'){
        
        b=2*x;
        sid= 2*x;
        holeuf.fillStyle ='gray';
        holeuf.fillRect(2*x,0,100,y-120)
        drawholeuf();
        drawholeub();
        if(timer>20)
        {
        minidecider2=Math.floor(Math.random() * 2);
        switch(minidecider2){
            case 0:
                if((realcountobj1)%2==0)
                {
                 oux1=3*x;
                 obj1h=y-(Math.floor(Math.random() * 120) + 1);
                 callobj1();
                }
                  break;
            case 1:
                minidecider2b=Math.floor(Math.random() * 2);
                switch (minidecider2b) {
                    case 0:
                        if((realcountinv1)%2==0)
                        {
                         inx1=3*x;
                         inv1h=y-(Math.floor(Math.random() * 120) + 1);
                         callinv1();
                        }
                      break;
                    case 1:
                        if((realcountpu1)%2==0)
                        {
                         pux1=3*x;
                         pu1h=y-(Math.floor(Math.random() * 120) + 1);
                         callpu1();
                        }
                      break;
                }
                realcountinv1++;
                realcountpu1++;
                  break;
        }         
        realcountobj1++;
        }
    }
}

function drawholebf(){
    imageofwaterb.clearRect(b+6,y+49,206,181);
    boxf=requestAnimationFrame(drawholebf);
    // holebf.fillStyle= '#4dff4d';
    holebf.fillStyle= '#162a3f';
    holebf.fillRect(b,y+50,200,y+51);
    b-=(6+speed-pu1speed);
    imageofwaterb.drawImage(document.getElementById('frameH'),b+6,y+49,206,181);
    if(chkcondchek==0){
    check1(x-(450*x/640),t,b,sid);  
    }  
    if((b<-180)){
        cancelAnimationFrame(boxf);        
    }
}

function drawholebb(){
    // imageofroadb.clearRect(sid+200,y+50,500,180);
    boxb=requestAnimationFrame(drawholebb);
    holebb.fillStyle= '#162a3f';
    holebb.fillRect(sid+200,y+50,100,y+51);//third input here is painting repeatedly without clear the previous mark so its continuous 
    sid-=(6+speed-pu1speed);
    imageofroadb.drawImage(document.getElementById('frameG'),sid+200+6,y+49,500,180);
    if(sid<=-230){
        cancelAnimationFrame(boxb);
        rand=Math.floor((Math.random()*2)+1);
        place(rand);
    }
}
function drawholeuf(){
    imageofwateru.clearRect(b+6,y-220,200,100);
    boxf=requestAnimationFrame(drawholeuf);
    // holeuf.fillStyle= '#4dff4d';
    holebf.fillStyle= '#162a3f';
    holeuf.fillRect(b,0,200,y-120);
    b-=(6+speed-pu1speed);
    imageofwateru.drawImage(document.getElementById('frameI'),b+6,y-220,200,100);
    if(chkcondchek==0){
    check2(x-(450*x/640),t,b,sid);
    }
    if((b<-180)){
        cancelAnimationFrame(boxf);
        
    }
}
function drawholeub(){
    // imageofroada.clearRect(sid+200,y-230,100,110);
    boxb=requestAnimationFrame(drawholeub);
    holeub.fillStyle= '#162a3f';
    holeub.fillRect(sid+200,0,100,y-120);
    sid-=(6+speed-pu1speed);
    imageofroada.drawImage(document.getElementById('frameF'),sid+200+6,y-220,500,100);
    if(sid<=-230){
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
        clearInterval(speedincreaser);
        clearInterval(timeofgame);
        clearInterval(microvertical);
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
        clearInterval(speedincreaser);
        clearInterval(timeofgame);
        clearInterval(microvertical);
        musq.loop = false;
        musq.load();
        gameover();
        
    }
    
}



function callobj1(){

    imageofobj1.clearRect(oux1,obj1h,26,26);

    anicallobj1=requestAnimationFrame(callobj1);
    oux1-=(6+speed-pu1speed);
    if((obj1h==(y-120))||(obj1h<(y-120))){
        obj1check=0;
    }
    if((obj1h==(y+23))||(obj1h>(y+23))){
        obj1check=1;
    }
    if(obj1check==0){
        obj1h=obj1h+(1.5+vertadd);
    }
    if(obj1check==1){
        obj1h=obj1h-(1.5+vertadd);
    }
    imageofobj1.drawImage(document.getElementById('frameC'),oux1,obj1h,25,25);
    checkobj1();
    if(oux1<=-25){
        cancelAnimationFrame(anicallobj1);
        countobj1++; 
    }
    
}


function callinv1(){

    imageofinv1.clearRect(inx1,inv1h,26,26);

    anicallinv1=requestAnimationFrame(callinv1);
    inx1-=(6+speed-pu1speed);
    if((inv1h==(y-120))||(inv1h<(y-120))){
        inv1check=0;
    }
    if((inv1h==(y+23))||(inv1h>(y+23))){
        inv1check=1;
    }
    if(inv1check==0){
        inv1h=inv1h+(1.5+vertadd);
    }
    if(inv1check==1){
        inv1h=inv1h-(1.5+vertadd);
    }
    imageofinv1.drawImage(document.getElementById('frameE'),inx1,inv1h,25,25);
    checkinv1();
    if(inx1<=-25){
        cancelAnimationFrame(anicallinv1);
        countinv1++; 
    }
    
}

function callpu1(){

    imageofpu1.clearRect(pux1,pu1h,26,26);

    anicallpu1=requestAnimationFrame(callpu1);
    pux1-=(6+speed-pu1speed);
    if((pu1h==(y-120))||(pu1h<(y-120))){
        pu1check=0;
    }
    if((pu1h==(y+23))||(pu1h>(y+23))){
        pu1check=1;
    }
    if(pu1check==0){
        pu1h=pu1h+(1.5+vertadd);
    }
    if(pu1check==1){
        pu1h=pu1h-(1.5+vertadd);
    }
    imageofpu1.drawImage(document.getElementById('frameD'),pux1,pu1h,25,25);
    checkpu1();
    if(pux1<=-25){
        cancelAnimationFrame(anicallpu1);
        countpu1++; 
    }
    
}

function checkobj1()
{ 
    if((x-(450*x/640)<=oux1)&&(oux1-(x-(450*x/640))<=51)&&(obj1h-re<=51)&&(re-obj1h<=26)){
        imageofobj1.clearRect(oux1,obj1h,26,26);
        cancelAnimationFrame(anicallobj1);
        if(chkcondchek==0){
        cancelAnimationFrame(boxf);
        cancelAnimationFrame(boxb);
        clearInterval(forpoints);
        clearInterval(speedincreaser);
        clearInterval(timeofgame);
        clearInterval(microvertical);
        musq.loop = false;
        musq.load();
        gameover();
    }
    }
    
}
function checkinv1()
{ 
    if((x-(450*x/640)<=inx1)&&(inx1-(x-(450*x/640))<=51)&&(inv1h-re<=51)&&(re-inv1h<=26)){
        imageofinv1.clearRect(inx1,inv1h,26,26);
        if(pu1checkdouble==1){
        clearTimeout(invinsiblepower);
        musqpower.pause();
        musqpower.currentTime = 0;
        }
        pu1checkdouble=1;
        chkcondchek=1;
        musqpower.play();
        invinsiblepower=setTimeout(()=>{chkcondchek=0;pu1checkdouble=0;musqpower.loop=true;musqpower.pause();},10000);
        cancelAnimationFrame(anicallinv1);
    }
    
}
function checkpu1()
{ 
    if((x-(450*x/640)<=pux1)&&(pux1-(x-(450*x/640))<=51)&&(pu1h-re<=51)&&(re-pu1h<=26)){
        imageofpu1.clearRect(pux1,pu1h,26,26);
        pu1speed=1.5;
        pu1speedcontrol=setTimeout(()=>{pu1speed=0;},5000);
        cancelAnimationFrame(anicallpu1);
        
    }
    
}
function gameover()
{   clearInterval(speedincreaser);
    clearInterval(timeofgame);
    clearInterval(microvertical);
    document.getElementById('tab').style.top = '9%';
    document.getElementById("MrMainBody").style.backgroundColor= "rgb(77, 255, 77)";
    document.getElementById('shoutout').style.display = 'visible';
    document.getElementById('MrMainBody').style.overflow = 'auto';
    document.getElementById('shoutoutsec').style.display = 'none';
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
    if(key==9){
    	e.preventDefault();
    }
});

