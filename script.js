let sentence = document.getElementById("text")

function changeTextContent(){

    sentence.textContent="This is changed content"
}
function increaseFontSize(){
    let old_size = parseFloat(window.getComputedStyle(sentence, null).getPropertyValue('font-size'));
    sentence.style.fontSize= (old_size+5).toString() + "px"

}
function decreaseFontSize(){
    let old_size = parseFloat(window.getComputedStyle(sentence, null).getPropertyValue('font-size'));
    sentence.style.fontSize= (old_size-5).toString() + "px"

}
function randomColor(){
    let r = Math.floor((Math.random()*255))
    let g = Math.floor((Math.random()*255))
    let b = Math.floor((Math.random()*255))

    let color = `rgb(${r},${g},${b})`
    sentence.style.color=color


}
function randomBgColor(){
    let r = Math.floor((Math.random()*255))
    let g = Math.floor((Math.random()*255))
    let b = Math.floor((Math.random()*255))

    let color = `rgb(${r},${g},${b})`
    sentence.style.backgroundColor=color


}


function showImg(){
    let random = Math.floor((Math.random()*2))
    let img = document.getElementById("img")
    
    random ==1? img.setAttribute("src","other.png") : img.setAttribute("src","stillLife.png")
    img.style.display="inline"
    
}