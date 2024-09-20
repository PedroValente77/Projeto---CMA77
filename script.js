function formataCPF(input){
    var numerosApenas = input.value.replace(/\D/g, '');
    var padrao = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    var cpfFormatado = numerosApenas.replace(padrao,'$1.$2.$3-$4');
    input.value = cpfFormatado;
}

function formataTelefone(input){
    var numerosApenas = input.value.replace(/\D/g, '');
    var padrao = /(\d{2})(\d{5})(\d{4})/;
    var telefoneFormatado = numerosApenas.replace(padrao,'($1) $2-$3');
    input.value = telefoneFormatado;
}

function cadastrarSocio() {
    let msgErrorCPF = document.querySelector('#msgErrorCPF');
    let msgErrorTelefone = document.querySelector('#msgErrorTelefone');
    let msgErrorSenha = document.querySelector('#msgErrorSenha');
    msgErrorCPF.innerHTML = '';
    msgErrorTelefone.innerHTML = '';
    msgErrorSenha.innerHTML = '';

    var newId = Math.floor(Math.random() * 1000) + '-' + Math.floor(Math.random() * 1000) + '-' + Math.floor(Math.random() * 1000);

    var nome = document.getElementById("txt_nome").value;
    var telefone = document.getElementById("txt_telefone").value;
    var cpf = document.getElementById("txt_cpf").value;
    var sexo = document.querySelector('input[name="txt_sexo"]:checked').value;
    var comando = document.getElementById('txt_comando').value;
    var email = document.getElementById("txt_email").value;
    var senha = document.getElementById("txt_senha").value;

    var confirmarSenha = document.getElementById("txt_confirmarSenha").value
    var cpf1 = cpf.charAt(0, 3);
    var cpf2 = cpf.charAt(4, 6);

    var carcpf1 = cpf.charAt(0);
    var carcpf2 = cpf.charAt(1);
    var carcpf3 = cpf.charAt(2);
    var carcpf4 = cpf.charAt(4);
    var carcpf5 = cpf.charAt(5);
    var carcpf6 = cpf.charAt(6);
    var carcpf7 = cpf.charAt(8);
    var carcpf8 = cpf.charAt(9);
    var carcpf9 = cpf.charAt(10);
    var carcpf10 = cpf.charAt(12);
    var carcpf11 = cpf.charAt(13);

    var verificador1 = carcpf1 * 10;
    verificador1 += carcpf2 * 9;
    verificador1 += carcpf3 * 8;
    verificador1 += carcpf4 * 7;
    verificador1 += carcpf5 * 6;
    verificador1 += carcpf6 * 5;
    verificador1 += carcpf7 * 4;
    verificador1 += carcpf8 * 3;
    verificador1 += carcpf9 * 2;
    verificador1 = verificador1 % 11;
    verificador1 = 11 - verificador1;

    var verificador2 = carcpf1 * 11;
    verificador2 += carcpf2 * 10;
    verificador2 += carcpf3 * 9;
    verificador2 += carcpf4 * 8;
    verificador2 += carcpf5 * 7;
    verificador2 += carcpf6 * 6;
    verificador2 += carcpf7 * 5;
    verificador2 += carcpf8 * 4;
    verificador2 += carcpf9 * 3;
    verificador2 += verificador1 * 2;
    verificador2 = verificador2 % 11;
    verificador2 = 11 - verificador2;

    let verificaTel = document.querySelector('#txt_telefone');
    let verificaCpf = document.querySelector('#txt_cpf');
    if(verificaTel.value.length <= 12){

        let msgError = document.querySelector('#msgErrorTelefone');
        msgError.setAttribute('style', 'color: red')
        msgError.innerHTML = '<p>Número de telefone inválido</p>'

    }else if (verificaCpf.value.length <= 12 || cpf1 == cpf2 || verificador1 != carcpf10 || verificador2 != carcpf11){

        let msgError = document.querySelector('#msgErrorCPF');
        msgError.setAttribute('style', 'color: red')
        msgError.innerHTML = '<p>CPF inválido</p>'

    }else if (senha != confirmarSenha){

        let msgError = document.querySelector('#msgErrorSenha');
        msgError.setAttribute('style', 'color: red')
        msgError.innerHTML = '<p>As senhas não conferem</p>'

    } else {

        var socio = {
            id: newId,
            nome: nome,
            telefone: telefone,
            cpf: cpf,
            sexo: sexo,
            comando: comando,
            email: email,
            senha: senha
        };

        var sociosCadastrados = JSON.parse(localStorage.getItem("socios")) || [];
        sociosCadastrados.push(socio);
        localStorage.setItem("socios", JSON.stringify(sociosCadastrados));
        alert("Sócio cadastrado com sucesso");
    }

}

