const toggle = document.getElementById('toggle');
const label = document.querySelector('label')
toggle.addEventListener('change', (e) =>{
    document.body.classList.toggle('dark', e.target.checked);
    console.log('Ok')

    if(e.target.checked){
        label.classList.toggle('active')
    }else{
        label.classList.remove('active')
    }

})