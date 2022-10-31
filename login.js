  //visualizar a senha quando clicar na imagem do olho//
    let btn = document.querySelector('#olhos');
btn.addEventListener('click', function() {
    let input = document.querySelector('#inputPassword');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});
