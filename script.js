let inputTime;
let chaeck=0;
let st=document.querySelector(".st")
let start=document.querySelector(".start")
let s=function(){
     inputTime=document.querySelector("#inputTime").value
    if(inputTime<=0){
     chaeck=1;
}
else{
    if(chaeck==0){
    
    game();

}
}

}
st.addEventListener("click",s)


function game(){
    start.classList.add("hidden");
    document.querySelector(".innerBody").hidden = false;
    let bubble_body = document.querySelector(".bubble_body")
    let bubble = "";
    let tBody = document.querySelector("#box2")
    let hitBody = document.querySelector("#box1")
    let scoreBody = document.querySelector("#box3")
    let sc = 0;
    let btn;
    let make_bubble = () => {
        for (let i = 0; i < 250; i++) {
            let randomNumber = Math.floor(Math.random() * 10)
            bubble = bubble + `<div class=bubble>${randomNumber}</div>`;

        }
    }
    make_bubble();
    bubble_body.innerHTML = bubble;

    bubble_body.addEventListener("click", function (e) {
        if (e.target.innerText === hitBody.innerText) {
            bubble_body.innerHTML = null;
            bubble = "";
            make_bubble();
            bubble_body.innerHTML = bubble;
            hitTerget()
            showScore();

        }
        else {
            bubble_body.innerHTML = null;
            bubble = "";
            make_bubble();
            bubble_body.innerHTML = bubble;
            hitTerget()
            show_Score();

        }
    })
    document.addEventListener("keydown", function (e) {
        if (e.key === hitBody.innerText) {
            bubble_body.innerHTML = null;
            bubble = "";
            make_bubble();
            bubble_body.innerHTML = bubble;
            hitTerget()
            showScore();

        }
        else {
            bubble_body.innerHTML = null;
            bubble = "";
            make_bubble();
            bubble_body.innerHTML = bubble;
            hitTerget()
            show_Score();


        }
    })

    let t=tBody.innerText = `${inputTime}`
    t = inputTime-1;
    let timmer = () => {
        let timer = setInterval(function () {
            if (t >= 0) {
                tBody.innerText = `${t}`
                t--;
            }
            else {
                clearInterval(timer);
                bubble_body.innerHTML = null;
                showEnd();

            }

        }, 1000)
    }
    timmer()
    let showScore = () => {
        sc += 10;
        box3.innerHTML = sc;
    }
    let show_Score = () => {
        sc -= 10;
        box3.innerHTML = sc;
    }

    let hitTerget = () => {
        let teg = Math.floor(Math.random() * 10);
        hitBody.innerText = teg
    }
    let showEnd = () => {

        bubble_body.innerHTML = `<div class="end"><h6 class="over">Game Over</h6><p class="pera">Your Score Is ${sc}</p></div><button type="button" class="btn btn-success"><a href="http://127.0.0.1:3000/Project/Bubble%20Game/index.html" class="ancur">Replay</a></button>`
        bubble_body.classList.add("sEnd")


    }
    hitTerget()


}
