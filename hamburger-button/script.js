
const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    btn.classList.toggle('active')

    if(btn.classList.contains('active')){
        btn.innerText = 'X'
    }else{
        btn.innerText = '☰ '

    }
})



