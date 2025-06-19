

    let colorCount = 0
    function addWhiteColor() {
        let grid = document.querySelector(".grid");
        let timerTigger = setInterval(() => {
            colorCount = (colorCount + 1) % 61;
            let squares = Array.from({ length: 60 }, (_, i) => `<div class="square" id="${i}" style="background-color: ${i < colorCount ? "white" : "black"}"></div>`).join("");
            grid.innerHTML = squares;
        }, 1000);

        return () => clearInterval(timerTigger);
    }
    addWhiteColor();