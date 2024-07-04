document.addEventListener("DOMContentLoaded",()=>{
    let table = document.getElementById("ping-pong-table");
    let ball = document.getElementById("ball");
    let paddle = document.getElementById("paddle");
    let ballx=10;
    let bally=10;
    let dx=2;
    let dy=2;
    ball.style.top=`${ballx}px`;
    ball.style.left=`${bally}px`;

    setInterval(function exec(){
        ballx+=dx;
        bally+=dy;
        ball.style.left=`${ballx}px`
        ball.style.top=`${bally}px`
        //collision of ball and paddle
        if(ballx<paddle.offsetLeft+paddle.offsetWidth
            &&bally>paddle.offsetTop
            &&bally+ball.offsetHeight<paddle.offsetTop+paddle.offsetHeight){
            dx=-1;
        }
        if(ballx>table.offsetWidth-ball.offsetWidth||ballx<=0){
            dx*=-1;
        }
        if(bally>table.offsetHeight-ball.offsetHeight||bally<=0){
            dy*=-1;
        }
        
     
    },1);
    let paddleY=0;
    let dpy=5;
      
    document.addEventListener("keydown",(event)=>{
        event.preventDefault();
        if(event.keyCode==38&&paddleY>0){
               paddleY+=(-1)*dpy;
        }
        else if(event.keyCode==40&&paddleY<table.offsetHeight-paddle.offsetHeight){
            paddleY+=dpy

        }
        paddle.style.top=`${paddleY}px`
    });

    document.addEventListener("mousemove",(event)=>{
        if(event.clientX>table.offsetLeft+(table.offsetWidth)/2) return;
       let mouseDistanceFromTop = event.clientY;
       let distanceOfTableFromTop = table.offsetTop;
       let mousePointControl= mouseDistanceFromTop-distanceOfTableFromTop-distanceOfTableFromTop-paddle.offsetHeight/2;
       
       if(mousePointControl<=0||mousePointControl>table.offsetHeight-paddle.offsetHeight){
         return;
       }
         paddle.style.top=`${mousePointControl}px`

    })
})