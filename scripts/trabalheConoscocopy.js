//*****************funcoes******************************************************** */

function validarCampos(campolabel, caixa, ajuda, tipo, nomeCampo) {
    caixa.addEventListener("blur", (e) => {
        let conteudoCaixa = e.target.value;
        let quantidadeConteudoCaixa = e.target.value.length;


        if (quantidadeConteudoCaixa <= 0) {
            ajuda.innerHTML = "* Campo obrigatório";
            campolabel.innerHTML = `* ${nomeCampo}`;
            campolabel.classList.add("textoErrado");
            caixa.classList.add("caixaErrada");
            ajuda.classList.add("mensagemAjuda");

        } else if (quantidadeConteudoCaixa >= 1 && quantidadeConteudoCaixa <= 10) {
            ajuda.innerHTML = "Campo necessita pelo menos 11 caracteres";
            campolabel.innerHTML = "";
            caixa.classList.add("caixaErrada");
            ajuda.classList.add("mensagemAjuda");

        } else {
            caixa.classList.remove("caixaErrada");
            ajuda.innerHTML = "";
            campolabel.innerHTML = nomeCampo;
            caixa.classList.add("caixaCorreta");
        }

        if (tipo === "email") {
            if (!conteudoCaixa.includes("@")) {
                caixa.classList.add("caixaErrada");
                ajuda.innerHTML = "O campo não é um email válido.";
                campolabel.innerHTML = `* ${nomeCampo}`;
            }
        } else if (tipo === "telefone") {
            if (isNaN(conteudoCaixa)) {
                caixa.classList.add("caixaErrada");
                ajuda.innerHTML = "O campo não é um telefone válido.";
                campolabel.innerHTML = nomeCampo;
            }
        } else if (tipo === "whatsapp") {
            if (isNaN(conteudoCaixa)) {
                caixa.classList.add("caixaErrada");
                ajuda.innerHTML = "O campo não é um whatsapp válido.";
                campolabel.innerHTML = nomeCampo;
            }

        } else {
        }
    });
}

function validarOption(select, selectLabel, ajuda, campolabel, nomeCampoMensagem) {

    select.addEventListener("blur", () => {
        var opcaoValor = select.options[select.selectedIndex].value;
        if (opcaoValor === "emBranco") {
            ajuda.innerHTML = "*Não foi selecionada uma opção";
            selectLabel.classList.add("textoErrado");
            select.classList.add("caixaErrada");
            ajuda.classList.add("mensagemAjuda");

        } else {

            select.classList.remove("caixaErrada");
            select.classList.add("caixaCorreta");
            ajuda.innerHTML = "";
            campolabel.innerHTML = `${nomeCampoMensagem}`
            selectLabel.classList.remove("textoErrado");
        }
    })
}


let arquivoInvalido = true;
let anexarHelper = document.querySelector('.anexarHelper');
let anexarArquivoEnvio = document.querySelector('#anexarCur');

/*
anexarArquivoEnvio.addEventListener("click",()=>{
    validarAnexar();
});
*/


function validarAnexar() {
    let fileInput = document.getElementById("anexarCur");
    let filePath = fileInput.value;
    let labelFilePath = document.querySelector('.pathArquivo');
    let pathTexto ;
    let pathTextoApresentar;

    let uploadExtensions = /(\.pdf|\.docx)$/i;
    

    if (!uploadExtensions.exec(filePath)) {
        fileInput.value = '';
        arquivoInvalido = true;

        pathTexto = "Nenhum arquivo Selecionado";
        labelFilePath.innerHTML = pathTexto ;
        anexarHelper.innerHTML="arquivo Invalido" ;
        anexarHelper.classList.add("mensagemAjuda");
        
    }else{
        pathTexto = fileInput.value;
        pathTextoApresentar =  pathTexto.substring(pathTexto.lastIndexOf("\\")+1);
        labelFilePath.innerHTML = pathTextoApresentar;
        anexarHelper.classList.remove("mensagemAjuda");
        anexarHelper.innerHTML="" ;
        arquivoInvalido = false;
    }

}
function limparAnexar(){
    let labelFilePath = document.querySelector('.pathArquivo');
    labelFilePath.innerHTML="";
}

//Validar campo select
let select = document.getElementById("areaInter");
let selectHelper = document.querySelector(".selectHelper");
let selectLabel = document.querySelector(".areaInter");
let nomeCampoMensagem = "Area de Interesse";

validarOption(select, selectLabel, selectHelper, nomeCampoMensagem);


//Validar campo nome.
let nomeLabel = document.querySelector(".nomeLabel");
let nomeCaixa = document.querySelector("#nome");
let nomeAjuda = document.querySelector(".nomeHelper");
let nomeTipo = "nome";
let nomeCampo = "Nome Completo";

validarCampos(nomeLabel, nomeCaixa, nomeAjuda, nomeTipo, nomeCampo);


//Validar campo email.
let emailLabel = document.querySelector(".emailLabel");
let emailCaixa = document.querySelector("#email");
let emailAjuda = document.querySelector(".emailHelper");
let emailTipo = "email";
let emailCampo = "E-Mail";

validarCampos(emailLabel, emailCaixa, emailAjuda, emailTipo, emailCampo);

//Validar campo Telefone.
let telefoneLabel = document.querySelector(".telefoneLabel");
let telefoneCaixa = document.querySelector("#telefone");
let telefoneAjuda = document.querySelector(".telHelper");
let telefoneTipo = "telefone";
let telefoneCampo = "Telefone";

validarCampos(telefoneLabel, telefoneCaixa, telefoneAjuda, telefoneTipo, telefoneCampo);

//validar campo whatsapp.

let whatsappLabel = document.querySelector(".whatsappLabel");
let whatsappCaixa = document.querySelector("#whatsapp");
let whatsappAjuda = document.querySelector(".whatsHelper");
let whatsappTipo = "whatsapp";
let whatsappCampo = "Whatsapp";

validarCampos(whatsappLabel, whatsappCaixa, whatsappAjuda, whatsappTipo, whatsappCampo);



//Poup Mansagem - Poup Personalizado

let poupPersonalizado = document.getElementById('poupPersonalizado');
let textoPoup = document.querySelector('.explicacao');
let botaoPoup = document.querySelector(".ok");


function abrirPoup(mensagem) {
    poupPersonalizado.style.display = "block";
    textoPoup.innerHTML = mensagem;
}

function fecharPoup() {
    botaoPoup.addEventListener("click", () => {
        poupPersonalizado.style.animation = "animacaoPoupOff  0.6s linear forwards";
        setTimeout(() => {
            poupPersonalizado.style.animation = "";
            poupPersonalizado.style.display = "none";
        }, 600);

    });
}
fecharPoup();


let botaoSubmit = document.querySelector('.caixaButton');
let checkAutorizacao = document.querySelector('#autorizacao');

let iconExclamacao = document.querySelector('#iconExclamacao');
let iconError = document.querySelector('#iconError');
let iconCorrect = document.querySelector('#iconCorrect');



//Botão de formulario

function acaoBotaoSubmit() {
    botaoSubmit.addEventListener("click", () => {
        

        if (!checkAutorizacao.checked) {
            iconCorrect.style.display = "none";
            iconError.style.display = "none";
            iconExclamacao.style.display = "block";

            abrirPoup("Necessário preencher autorização de privacidade.");

        } else if (nomeCaixa.value === "" || emailCaixa.value === "" || telefoneCaixa.value === "" || select.value === "emBranco" || whatsappCaixa.value === "") {
            iconCorrect.style.display = "none";
            iconError.style.display = "none";
            iconExclamacao.style.display = "block";

            abrirPoup("Verifique se todos os campos foram preenchidos.");

        } else if (nomeCaixa.classList.contains("caixaErrada") || emailCaixa.classList.contains("caixaErrada") || telefoneCaixa.classList.contains("caixaErrada") || select.classList.contains("caixaErrada") || whatsappCaixa.classList.contains("caixaErrada")) {
            iconCorrect.style.display = "none";
            iconError.style.display = "block";
            iconExclamacao.style.display = "none";

            abrirPoup("Verifique se todos os campos foram preenchidos corretamente.");
        }else if(arquivoInvalido){
            iconCorrect.style.display = "none";
            iconError.style.display = "block";
            iconExclamacao.style.display = "none";

            abrirPoup("Arquivo inválido, Por favor envie um arquivo do tipo World ou PDF");
          
        }
        else {
            iconCorrect.style.display = "block";
            iconError.style.display = "none";
            iconExclamacao.style.display = "none";

            nomeCaixa.value = "";
            emailCaixa.value = "";
            telefoneCaixa.value = "";
            whatsappCaixa.value = "";
            select.options[0].value;

            nomeCaixa.classList.remove("caixaCorreta");
            emailCaixa.classList.remove("caixaCorreta");
            telefoneCaixa.classList.remove("caixaCorreta");
            whatsappCaixa.classList.remove("caixaCorreta");
            select.classList.remove("caixaCorreta");

            limparAnexar();
            abrirPoup("Informações enviadas com sucesso!  Entraremos em contato em breve.");
        }
    });

}
acaoBotaoSubmit();

