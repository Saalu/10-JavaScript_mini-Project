function createHeart(){
    const heart = document.createElement('div');
    heart.className = 'heart'
    
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    heart.innerText = 'I 💗 U';

    document.body.appendChild(heart)
}

setInterval(createHeart, 300)