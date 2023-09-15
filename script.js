const campoLogin = document.getElementById("login)")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novoLogin")
const campoNovaSenha = document.getElementById("novaSenha")
const campoRepSenha = document.getElementById("repSenha")

let usuarios = [];

function cadastrar(){
    if(campoNovaSenha.value == campoRepSenha.value){
        let usuario = {
                login : campoNovoLogin.value,
                senha : campoNovaSenha.value


        }
        usuarios.push(usuario);
        alert("Usuário cadastrado com sucesso!")
    }
    else{
        alert("As senhas não coincidem!")
    }
}

function login(){
}
