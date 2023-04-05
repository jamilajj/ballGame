"use strict";
let input=prompt("name and Surname");
let ball = document.querySelector('#ball');
let bar = document.querySelector('#bar');
let point=document.querySelector('#point');
let table=document.querySelector('.tbl')
let user=document.querySelector('#user')
let barX = 0;
let ballX = 0;
let ballY = 0;
let ballMx = 5;
let ballMy = 5;
let sum =0;

onkeydown = barMove;
let set = setInterval(ballMove, 40);

function barMove(e){
    if(e.keyCode == 39){
        if(barX<700){
            barX += 25;
        }
        console.log(barX);
    }

    if(e.keyCode == 37){
        if(barX>0){
            barX -= 25;
        }
    }


    bar.style.left = barX + 'px';

}


function ballMove(){
    if(ballX<0 || ballX>745){
        ballMx *= -1;
    }

    if(ballY<0){
        ballMy *= -1;
    }else if(ballY>550 && ballX>=barX-25 && ballX<=barX+75){
        ballMx+=1;
        ballMy+=1;
        ballMy *= -1;
        sum+=1;
        point.innerHTML=`Point:${sum}`;
    }else if(ballY>550){
      let result = confirm('Uduzdunuz yeni oyuna baslamaq isteyirsinizmi?');
        clearInterval(set);
        if(result){
            location.reload();
        }
    }


    // else if(ballY>550){
    //     alert('uduzdunuz')
    // }

    ballX += ballMx;
    ballY += ballMy;

    // console.log(ballM);
    // console.log(ballX);

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
   
    user.innerHTML(input);
}