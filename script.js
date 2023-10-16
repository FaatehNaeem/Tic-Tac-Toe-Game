let box = document.getElementsByClassName("box");
let txt = document.getElementById("text");
let trigger = true;
let res = document.getElementById("res")
res.style.display= "none";
let cont = document.getElementById("container");
let row1 = document.getElementById("row1")
let row2 = document.getElementById("row2")
let row3 = document.getElementById("row3")
let btn = document.getElementById("primary")

cont.style.position="fixed";
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => {
        if (box[i].innerHTML === "") {
            if (trigger) {
                box[i].innerHTML = "X";
            } else {
                box[i].innerHTML = "Ø";
            }
            trigger = !trigger;
        }

        const arr = [];

        for (let i = 0; i < box.length; i++) {
            arr.push(box[i].innerHTML);
        }

        if ((arr[0] === "X" && arr[1] === "X" && arr[2] === "X") ||
            (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") ||
            (arr[6] === "X" && arr[7] === "X" && arr[8] === "X") ||
            (arr[0] === "X" && arr[3] === "X" && arr[6] === "X") ||
            (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") ||
            (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") ||
            (arr[0] === "X" && arr[4] === "X" && arr[8] === "X") ||
            (arr[2] === "X" && arr[4] === "X" && arr[6] === "X")) {
            txt.innerHTML = "Player X wins";    
            res.style.display="block"
            row1.style.display="none"
            row2.style.display="none"
            row3.style.display="none"
            btn.addEventListener("click",()=>{
                location.reload();
             })

        } else if ((arr[0] === "Ø" && arr[1] === "Ø" && arr[2] === "Ø") ||
            (arr[3] === "Ø" && arr[4] === "Ø" && arr[5] === "Ø") ||
            (arr[6] === "Ø" && arr[7] === "Ø" && arr[8] === "Ø") ||
            (arr[0] === "Ø" && arr[3] === "Ø" && arr[6] === "Ø") ||
            (arr[1] === "Ø" && arr[4] === "Ø" && arr[7] === "Ø") ||
            (arr[2] === "Ø" && arr[5] === "Ø" && arr[8] === "Ø") ||
            (arr[0] === "Ø" && arr[4] === "Ø" && arr[8] === "Ø") ||
            (arr[2] === "Ø" && arr[4] === "Ø" && arr[6] === "Ø")) {
            txt.innerHTML = "Player Ø wins";
            res.style.display="block"
            row1.style.display="none"
            row2.style.display="none"
            row3.style.display="none"
            btn.addEventListener("click",()=>{
                location.reload();
             })
        } else {
            // Check if all boxes are filled
            let isDraw = true;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === "") {
                    isDraw = false;
                    break;
                }
              
            }
            
            if (isDraw) {
                txt.innerHTML = "DRAW";
                res.style.display="block"
                row1.style.display="none"
                row2.style.display="none"
                row3.style.display="none"
                btn.addEventListener("click",()=>{
                    location.reload();
                 })
            }
        }
    });
}




