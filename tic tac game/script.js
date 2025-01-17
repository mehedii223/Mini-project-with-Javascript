// display 
const box = document.querySelector(".box");
const winingBox = document.querySelector(".wining-box");
const faildBox = document.querySelector(".faild-box");

// button 
const selectBtn = document.querySelectorAll(".select");
const resetBtn = document.querySelector(".resetBtn");
const newGameBtn = document.querySelectorAll(".newGameBtn");


// wining pettern array
let pettern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
]

// common value
let symbol = true;
let count = 0;

// click event

for(let i = 0; i < selectBtn.length; i++){
    selectBtn[i].addEventListener("click", function(){
        if(symbol && selectBtn[i].innerHTML != "O"){
            symbol = false;
            selectBtn[i].innerHTML = "X";
        }else if(symbol == false && selectBtn[i].innerHTML != "X"){
            symbol = true;
            selectBtn[i].innerHTML = "O";
        }
        winingCheak()

        count++;
        // faild event
        if(count == 9){
            box.style.display = "none";
            faildBox.style.display = "block";
            count = 0;
        }
    })
}

// wining event

function winingCheak(){
    pettern.forEach((a) => {
        let [value1, value2, value3] = [
            selectBtn[a[0]].innerHTML,
            selectBtn[a[1]].innerHTML,
            selectBtn[a[2]].innerHTML
        ]
        
        if(value1 != "" && value2 != "" && value3 != ""){
            if(value1 == value2 && value2 == value3){
                box.style.display = "none";
                winingBox.style.display = "block";
                count = 0;
            }
        }
            
    })
}

// reset click 

resetBtn.addEventListener("click", function(){
    selectBtn.forEach((a) => {
        a.innerHTML = "";
    })

})

// new game click

for(let btnList of newGameBtn){
    btnList.addEventListener("click", function(){
        count = 0;
        selectBtn.forEach((a) => {
            a.innerHTML = "";
        })

        box.style.display = "block";
        winingBox.style.display = "none";
        faildBox.style.display = "none";

        console.log("a")
    })
}


