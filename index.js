
import dogsInfo from "./data.js"
import Dog from "./Dog.js"
let isWaiting = false
let currentDogNumber = 0
let dogs = new Dog(dogsInfo[currentDogNumber])

document.getElementById("like-btn").addEventListener("click",()=>{
    let timer = 1500
    if(!isWaiting){
        isWaiting = true
        mouseOverBadge()
        dogs.setLikeStatus()
        dogs.setSwipeStatus()
        if (dogs.hasBeenLikedYou){
            document.getElementById("badge-like").classList.add("badge-active")
            setTimeout(()=>{
                document.getElementById("overlay").style.display ="block"
                document.getElementById("badge-like").classList.remove("badge-active-trasparent")
                },timer)
            timer += 2000
            setTimeout(()=>{
                document.getElementById("overlay").style.display ="none"},timer)
        }
        currentDogNumber+=1
        renderDog("badge-like", timer)   
    }
})

document.getElementById("dont-like-btn").addEventListener("click",()=>{
    let timer = 1500
    if(!isWaiting){
        isWaiting = true
        mouseOverBadge()
        dogs.setSwipeStatus()
        currentDogNumber+=1
        renderDog("badge-dont-like", timer)     
    }
})

function mouseOverBadge(){ // function to Hover badges
        const btn = [
        {"btn":"like-btn",
        "badge":"badge-like"}, 
        {"btn":"dont-like-btn",
        "badge":"badge-dont-like"}
        ]
    for (let i=0; i< btn.length; i++){
        if (!isWaiting){
            document.getElementById(btn[i].btn).addEventListener("mouseenter", ()=>{
            document.getElementById(btn[i].badge).classList.add("badge-active-trasparent")
            })
            document.getElementById(btn[i].btn).addEventListener("mouseleave", ()=>{
            document.getElementById(btn[i].badge).classList.remove("badge-active-trasparent")
            })   
        } else {
            document.getElementById(btn[i].btn).addEventListener("mouseenter", ()=>{
            document.getElementById(btn[i].badge).classList.remove("badge-active-trasparent")
            })
            document.getElementById(btn[i].btn).addEventListener("mouseleave", ()=>{
            document.getElementById(btn[i].badge).classList.remove("badge-active-trasparent")
            })    
        } 
    }
}

function renderDog(currentBadge, timer) {
        if (currentDogNumber > dogsInfo.length-1){
            isWaiting = true
            document.getElementById(currentBadge).classList.add("badge-active")
            document.getElementById(currentBadge).classList.remove("badge-active-trasparent")
            setTimeout(()=>{
            render()
            document.getElementById("dog-info").style.opacity = 0
            document.getElementById("main-container").style.backgroundImage = `url()`
            document.getElementById("overlay-no-more-dogs").style.display = "block"
            },timer)
        }else{
            dogs = new Dog(dogsInfo[currentDogNumber])
            document.getElementById(currentBadge).classList.add("badge-active")
            document.getElementById(currentBadge).classList.remove("badge-active-trasparent")
            setTimeout(()=>{
            isWaiting = false
            render()
            }, timer) 
        }   
}

function render() {
    document.getElementById("main-container").innerHTML = dogs.setCurrentDogHtml()
    document.getElementById("main-container").style.backgroundImage = `url(${dogs.currentImg})`
    document.getElementById("main-container").classList.add("background-animation")
    setTimeout(()=>{
        document.getElementById("main-container").classList.remove("background-animation")
        },2000)
    mouseOverBadge()
}

render()