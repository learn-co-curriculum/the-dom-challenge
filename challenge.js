var number = 0;
var number_likes = {};
var paused = false;
const counter = document.querySelector("#counter")
const decrease_btn = document.getElementById("-")
const increase_btn = document.getElementById("+")
const like_btn = document.getElementById('<3')
const likes_list = document.querySelector('.likes')
const pause_btn = document.getElementById("pause")
const comment_form = document.getElementById("comment-form")
const comment_list = document.getElementById("list")
setInterval( function(){
    if (!paused){
        number ++;
        counter.innerHTML = number
    }
}, 1000);

decrease_btn.addEventListener("click", function(){
    if (!paused){
        number--;
        counter.innerHTML = number;
    }
})

increase_btn.addEventListener("click", function(){
    if (!paused){
        number++;
        counter.innerHTML = number;
    }
})

like_btn.addEventListener("click", function(){
    if (!paused){
        if (number_likes[`${number}`]){
            number_likes[`${number}`] ++
        }
        else{
            number_likes[`${number}`] = 1
        }

        likes_list.innerHTML = ""
        add_likes()
    }
})

function add_likes(){
    if (!paused){
        for (const key in number_likes){

            let times = number_likes[key]
            const li = document.createElement("li")
            li.innerHTML = `<li>${key} has been liked ${times} times</li>`
            likes_list.append(li)
        }
    }
}

pause_btn.addEventListener("click", function(){

    pause_btn.innerText = pause_btn.innerText == "resume" ? "pause" : "resume"
    paused = paused ? false : true
})

comment_form.addEventListener("submit", function(){

    event.preventDefault()
    if (!paused){
        let comment = comment_form[0].value
        // console.log(comment)
        const p = document.createElement("p")
        p.innerText = comment
        comment_list.append(p)
        comment_form.reset()
    }
})