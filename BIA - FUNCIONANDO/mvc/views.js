
// Impedir refresh da página ao clicar no botão submit //
let form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); button() }
form.addEventListener('submit', handleForm);



const ele_usermane = document.getElementById("username");
const ele_email = document.getElementById("email");
const ele_password = document.getElementById("password");
const ele_passwordconfirmation = document.getElementById("id_passwordconfirmation");
const ele_rg = document.getElementById("RG");




function checkInputs() {



  const usernameValue = ele_usermane.value;
  const emailValue = ele_email.value;
  const passwordValue = ele_password.value;
  const passwordconfirmationValue = ele_passwordconfirmation.value;
  const RGValue = ele_rg.value;


  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordconfirmationValue === "") {
    setErrorFor(id_passwordconfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordconfirmationValue !== passwordValue) {
    setErrorFor(id_passwordconfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(id_passwordconfirmation);
  }
  if (RGValue === "") {
    setErrorFor(RG, "RG é obrigatório.");
  }
  else {
    setSuccessFor(RG);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }


  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    // Adiciona a mensagem de erro
    small.innerText = message;

    // Adiciona a classe de erro
    formControl.className = "form-control error";


  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.className = "form-control success";


  }

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  if (!(ele_usermane.value == "") && (ele_email.value.match(/@/)) && (ele_email.value.match(/.com/)) && (ele_password.value.length > 6) && (ele_password.value == ele_passwordconfirmation.value) && !(ele_rg.value == "")) {
    alert("Cadastro feito com sucesso!");
    window.location.reload();
    }

}



