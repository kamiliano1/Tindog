// Create the Dog class here

import dogsInfo from "./data.js"

class Dog {
    
    constructor(data){
        
        Object.assign(this, data)
        this.currentImg = this.avatar
    }
    
    setCurrentDogHtml(){
        const { name, age, bio } = this
        return `            
        <div>
            <img class="badge" id="badge-like" src="images/badge-like.png">
            <img class="badge" id="badge-dont-like" src="images/badge-nope.png">
        </div>
        <div id="dog-info">
            <h1>${name}, ${age}</h1>
            <h2>${bio}</h2>
        </div>
        `
    }
    
    setLikeStatus(){
         this.hasBeenLiked = true
    }
    
    setSwipeStatus(){
        this.hasBeenSwiped = true
    }
}

export default Dog