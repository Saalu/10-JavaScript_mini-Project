
const btn = document.getElementById('btn');
const container = document.querySelector('.container')


btn.addEventListener('click', ()=>{
    const notif = document.createElement('div')

    notif.classList ='toast'
    notif.innerText = 'This projects are challenging'


    container.appendChild(notif);

    setTimeout(()=>{
        notif.remove()
    }, 3000)
})


