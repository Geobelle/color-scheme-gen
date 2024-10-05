const getColorBtn = document.getElementById("get")
const colorInput = document.getElementById("color-input")
const colorType = document.getElementById("color-type")

getColorBtn.addEventListener("click", function(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring('#'.length)}&mode=${colorType.value}&count=5`)
    .then(res => res.json())
    .then(data => {
        const colorsArray = data.colors
        const colorCodeArray = colorsArray.map(function(color){
            return `
                                            <div class="code">
                                                <p>${color.hex.value} </p>
                                            </div>
                                            `
        }).join('')
        document.getElementById("color-code").innerHTML = colorCodeArray

         const colorBackgroundArray = colorsArray.map(function(color){
        return `
                    <div class="color" style="background-color:${color.hex.value};"> </div>
                    `
        }).join('')
        document.getElementById("colors").innerHTML = colorBackgroundArray
    })
})