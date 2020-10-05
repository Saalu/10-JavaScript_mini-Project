const text = 'My followers on Facebook are awesome 💓'
const wrapper = document.querySelector('.wrapper')
let index = 0;

function writeText(){
    // let p = createElement('p')
  document.body.innerText = text.slice(0, index);

    index ++;

    if(index > text.length -1){
        index = 0
    }
    
    // wrapper.appendChild(p)
}

setInterval(writeText, 100)