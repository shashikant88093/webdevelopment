
const totalBox = 60

function CreateBox() {
        let i = 0
    let idealTimer = setInterval(() => {
        let colorWhite = (i + 1) % (totalBox + 1)
        let square = Array.from({ length: totalBox }, (_, j) => `<div style="background-color:${j < colorWhite ? 'white' : 'black'}" class="square" id=${j}></div>`).join("")
        document.querySelector(".grid").innerHTML = square
        i++
    }, 1000)

    return ()=> clearInterval(idealTimer)


}

CreateBox()