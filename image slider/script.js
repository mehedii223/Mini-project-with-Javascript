
// Image access
const images = document.querySelectorAll("#img");
const dotBtn = document.querySelectorAll(".dot-btn button");
const container = document.querySelector(".container");

// Button access
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let i = 0;
let x = 4;

// start next button work
nextBtn.addEventListener("click", function(){
    images[i].style.animation = "next1 0.5s forwards";
    if(i >= images.length - 1){
        i = 0
    }else{
        i++
    }
    images[i].style.animation = "next2 0.5s forwards";
    dotBoxAdd()
})

prevBtn.addEventListener("click", function(){
    images[i].style.animation = "prev1 0.5s forwards";
    dotBtn[i].classList.remove("bgDark");
    if(i <= 0){
        i = 3
    }else{
        i--
    }
    images[i].style.animation = "prev2 0.5s forwards";
    dotBtn[i].classList.add("bgDark");
    dotBoxAdd()
})

// Auto slider
let timeInterval;
function autoSlide(){
    timeInterval = setInterval(startSlide, 3000)
    function startSlide(){
        images[i].style.animation = "next1 0.5s forwards";
        dotBtn[i].classList.remove("bgDark");
        if(i >= images.length - 1){
            i = 0
        }else{
            i++
        }
        images[i].style.animation = "next2 0.5s forwards";
        dotBtn[i].classList.add("bgDark");
        console.log(i)
    }
}
autoSlide()

// Stop auto slide when mouse is over
container.addEventListener("mouseover", function(){
    clearInterval(timeInterval)
})
// Again slide when mouse is out
container.addEventListener("mouseout", autoSlide)


// Add and remove bgDark class from the dotBox
function dotBoxAdd(){
    dotBtn.forEach((a)=> a.className = "");
    dotBtn[i].classList += "bgDark";
}

// Add click event to the dotbtn
function switchImage(currentImg){
    currentImg.classList.add("bgDark");
    let imageId = currentImg.getAttribute("attr");
    if(imageId > i){
        images[i].style.animation = "next1 0.5s forwards";
        i = imageId
        images[i].style.animation = "next2 0.5s forwards";
    }else if(imageId == i){
        return;
    }else{
        images[i].style.animation = "prev1 0.5s forwards";
        i = imageId
        images[i].style.animation = "prev2 0.5s forwards";
    }
    dotBoxAdd()
}