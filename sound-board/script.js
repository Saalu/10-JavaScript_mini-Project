const sounds = ["airplane", "rain", "engine", "bow", "traffic"]

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () =>{
        document.getElementById(sound).play()
    })
    document.body.appendChild(btn)
})