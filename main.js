// const drumLength=document.querySelectorAll(".drum").length;

// for(let i=0;i<drumLength;i++){
//     document.querySelectorAll('.drum')[i].addEventListener('click',function(e){
//         makeNoise(this.innerHTML);
//         animatingButtons(this.innerHTML);
//     })
// }

// function makeNoise(key){
//     switch(key){
//         case 'W':
//             const t1=new Audio("music/t1.mp3");
//             t1.play();
//             break;

//         case 'A':
//             const t2=new Audio("music/t2.mp3");
//             t2.play();
//             break;

//         case 'S':
//             const t3=new Audio("music/t3.mp3");
//             t3.play();
//             break;

//         case 'D':
//             const t4=new Audio("music/t4.mp3");
//             t4.play();
//             break;

//         case 'J':
//             const t5=new Audio("music/t5.mp3");
//             t5.play();
//             break;

//         case 'K':
//             const t6=new Audio("music/t6.mp3");
//             t6.play();
//             break;

//         case 'L':
//             const t7=new Audio("music/t7.mp3");
//             t7.play();
//             break;

        
//     }
// }


// function animatingButtons(key){
//     const activeButton=document.querySelector(`.${key.toLowerCase()}`);
//     console.log(activeButton);
//     activeButton.classList.add("pressed");
//     setTimeout(()=>{
//         activeButton.classList.remove("pressed")
//     },500);
// }


const drumLength = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumLength; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        makeNoise(this.innerHTML);
        animatingButtons(this.innerHTML);
    });
}

// ✅ Add keyboard support
document.addEventListener("keydown", function(event) {
    makeNoise(event.key.toUpperCase());
    animatingButtons(event.key.toUpperCase());
});

function makeNoise(key) {
    switch (key) {
        case 'W':
            new Audio("music/t1.mp3").play();
            break;
        case 'A':
            new Audio("music/t2.mp3").play();
            break;
        case 'S':
            new Audio("music/t3.mp3").play();
            break;
        case 'D':
            new Audio("music/t4.mp3").play();
            break;
        case 'J':
            new Audio("music/t5.mp3").play();
            break;
        case 'K':
            new Audio("music/t6.mp3").play();
            break;
        case 'L':
            new Audio("music/t7.mp3").play();
            break;
        default:
            console.log("No sound mapped for key:", key);
    }
}

function animatingButtons(key) {
    const activeButton = document.querySelector(`.${key.toLowerCase()}`);
    if (!activeButton) return; // avoids error for unmapped keys
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 500);
}
