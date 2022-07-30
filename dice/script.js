const dice = document.querySelector(".dice");
const value =document.querySelector(".num");

dice.addEventListener("click",()=>{
    let num = Math.floor(Math.random()*7);
    let ans;
    let data;
    switch(num){
        case 0:
        case 1:
            ans = 1;
            data = `<span>o</span>`;
            dice.style.backgroundColor = 'red';
            value.style.color = "white";
            break;
        case 2:
            ans = 2;
            data = `<span>o</span><span>o</span>`;
            dice.style.backgroundColor = 'green';
            value.style.color = "white";
            break;
        case 3:
            ans = 3;
            data = `<span>o</span><span>o</span><br><span>o</span>`;
            dice.style.backgroundColor = 'black';
            value.style.color = "white";
            break;
        case 4:
            ans = 4;
            data = `<span>o</span><span>o</span><br><span>o</span><span>o</span>`;
            dice.style.backgroundColor = 'blue';
            value.style.color = "white";
            break;
        case 5:
            ans = 5;
            data = `<span>o</span><span>o</span><br><span>o</span><span>o</span><br><span>o</span>`;
            dice.style.backgroundColor = 'purple';
            value.style.color = "white";
            break;
        case 6:
            ans = 6;
            data = `<span>o</span><span>o</span><br><span>o</span><span>o</span><br><span>o</span><span>o</span>`;
            dice.style.backgroundColor = 'deeppink';
            value.style.color = "white";
            break;
        default:
            ans = 0;
    }
    console.log(ans);
    value.innerHTML = data;
})
