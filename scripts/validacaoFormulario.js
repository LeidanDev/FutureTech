
//*****************funcoes******************************************************** */

function validarCampos(campolabel,caixa,ajuda,tipo,nomeCampo ){
    caixa.addEventListener("blur",(e)=>{
        let conteudoCaixa = e.target.value;
        let quantidadeConteudoCaixa = e.target.value.length;
     
        
        if(quantidadeConteudoCaixa <= 0){
             ajuda.innerHTML ="* Campo obrigatório";
             campolabel.innerHTML = `* ${nomeCampo}` ;
             campolabel.classList.add("textoErrado");
             caixa.classList.add("caixaErrada");  
             ajuda.classList.add("mensagemAjuda");
        
        }else if(quantidadeConteudoCaixa >= 1 && quantidadeConteudoCaixa <= 10){
            ajuda.innerHTML = "Campo necessita pelo menos 11 caracteres";
            campolabel.innerHTML= `* ${nomeCampo}`;
            campolabel.classList.add("textoErrado");
            caixa.classList.add("caixaErrada");  
            ajuda.classList.add("mensagemAjuda");
            
        }else{
             caixa.classList.remove("caixaErrada");
             campolabel.classList.remove("textoErrado");
             ajuda.innerHTML = "";
             campolabel.innerHTML = nomeCampo;
             caixa.classList.add("caixaCorreta"); 
        } 

        if(tipo === "email"){
            if(!conteudoCaixa.includes("@")){
                caixa.classList.add("caixaErrada");
                ajuda.innerHTML = "O campo não é um email valido.";
                campolabel.innerHTML = `* ${nomeCampo}`;
            }
        }else if(tipo === "telefone"){
            if(isNaN(conteudoCaixa)){
                caixa.classList.add("caixaErrada");
                ajuda.innerHTML = "O campo não é um telefone valido.";
                campolabel.innerHTML = nomeCampo;
            }
        }else {

        }
        
     });

}

function validarOption(select,selectLabel,ajuda,nomeCampo){

    select.addEventListener("blur",()=>{
        var opcaoValor = select.options[select.selectedIndex].value;
        if(opcaoValor ==="emBranco"){
            select.classList.add("caixaErrada");
            ajuda.innerHTML = "Não foi selecionada uma opção";
            ajuda.classList.add("mensagemAjuda");
            selectLabel.innerHTML =`* ${nomeCampo}`;
            selectLabel.classList.add("textoErrado");

        }
        else{
            ajuda.classList.remove("mensagemAjuda");
            ajuda.innerHTML="";
            select.classList.remove("caixaErrada");
            select.classList.add("caixaCorreta");

        }
    })
}

function validarCaixaMensagem(areaTexto,nomeCampo,label,areaHelper){
   areaTexto.addEventListener("blur",(e)=>{
        
        let tamanhoTexto = e.target.value.length;
        if(tamanhoTexto <=20  || tamanhoTexto >= 100){
            areaTexto.classList.add("caixaErrada");
            areaHelper.innerHTML = "Minimo 20 caracteres, maximo 100.";
            areaHelper.classList.add("mensagemAjuda");
            label.classList.add("textoErrado");
            label.innerHTML = `* ${nomeCampo}`;
            
        }else{
            areaTexto.classList.remove("caixaErrada");
            areaTexto.classList.add("caixaCorreta");
            areaHelper.innerHTML = "";
            label.innerHTML = `${nomeCampo}`;
            label.classList.remove("textoErrado");
        }
   });
}

//*****************funcoes******************************************************** */


//Validar campo Caixa  Mensagem
let areaTexto = document.getElementById("mensagem");
let textAreaHelper = document.querySelector(".textAreaHelper");
let label = document.querySelector(".mensagemLabel");
let campoNome = "Mensagem";

validarCaixaMensagem(areaTexto,campoNome,label,textAreaHelper);


//Validar campo select
let select = document.getElementById("solucoes");
let selectHelper = document.querySelector(".selectHelper");
let selectLabel = document.querySelector(".mensagemLabel");
let nomeCampoMensagem = "Mensagem";

validarOption(select,selectLabel,selectHelper,nomeCampoMensagem);


//Validar campo nome.
let nomeLabel = document.querySelector(".nomeLabel");
let nomeCaixa = document.querySelector("#nome");
let nomeAjuda = document.querySelector(".nomeHelper");
let nomeTipo ="nome"; 
let nomeCampo="Nome Completo";

validarCampos(nomeLabel,nomeCaixa,nomeAjuda,nomeTipo,nomeCampo);  



//Validar campo email.
let emailLabel = document.querySelector(".emailLabel");
let emailCaixa = document.querySelector("#email");
let emailAjuda = document.querySelector(".emailHelper");
let emailTipo="email";
let emailCampo="E-Mail";

validarCampos(emailLabel,emailCaixa,emailAjuda,emailTipo,emailCampo);  

//Validar campo Telefone.
let telefoneLabel = document.querySelector(".telefoneLabel");
let telefoneCaixa = document.querySelector("#telefone");
let telefoneAjuda = document.querySelector(".telHelper");
let telefoneTipo="telefone";
let telefoneCampo="Telefone";

validarCampos(telefoneLabel,telefoneCaixa,telefoneAjuda,telefoneTipo,telefoneCampo); 


//Poup Mansagem - Poup Personalizado

let poupPersonalizado = document.getElementById("poupPersonalizado");
let textoPoup = document.querySelector(".explicacao");
let botaoPoup = document.querySelector(".ok");


function abrirPoup(mensagem){
    poupPersonalizado.style.display="block";
    textoPoup.innerHTML = mensagem;
}

function fecharPoup(){
    botaoPoup.addEventListener("click",()=>{
         poupPersonalizado.style.animation = "animacaoPoupOff  0.6s linear forwards";
         setTimeout(() => {
            poupPersonalizado.style.animation = "";
            poupPersonalizado.style.display="none";
        }, 600);
         
    });
}
fecharPoup();


let botaoSubmit = document.querySelector('.caixaButton');
let checkAutorizacao = document.querySelector('#autorizacao');

let iconExclamacao = document.querySelector('#iconExclamacao');
let iconError = document.querySelector('#iconError');
let iconCorrect= document.querySelector('#iconCorrect');

//Botão de formulario

function acaoBotaoSubmit(){
    botaoSubmit.addEventListener("click",()=>{
        
        if(!checkAutorizacao.checked){
            iconCorrect.style.display="none";
            iconError.style.display="none";
            iconExclamacao.style.display="block";

            abrirPoup("Necessário preencher autorização de privacidade.");

        }else if(nomeCaixa.value==="" || emailCaixa.value==="" || telefoneCaixa.value===""  || select.value === "emBranco" || areaTexto.value==="" ){
            iconCorrect.style.display="none";
            iconError.style.display="none";
            iconExclamacao.style.display="block";

            abrirPoup("Verifique se todos os campos foram preenchidos.");
        
        }else if(nomeCaixa.classList.contains("caixaErrada") || emailCaixa.classList.contains("caixaErrada") || telefoneCaixa.classList.contains("caixaErrada") || select.classList.contains("caixaErrada") ||areaTexto.classList.contains("caixaErrada")){
            iconCorrect.style.display="none";
            iconError.style.display="block";
            iconExclamacao.style.display="none";

            abrirPoup("Verifique se todos os campos foram preenchidos corretamente.");
        }
        else{
            iconCorrect.style.display="block";
            iconError.style.display="none";
            iconExclamacao.style.display="none";

            nomeCaixa.value="";
            emailCaixa.value="";
            telefoneCaixa.value="";
            areaTexto.value="";
            select.options[0].value;

            nomeCaixa.classList.remove("caixaCorreta");
            emailCaixa.classList.remove("caixaCorreta");
            telefoneCaixa.classList.remove("caixaCorreta");
            areaTexto.classList.remove("caixaCorreta");
            select.classList.remove("caixaCorreta");

            abrirPoup("Informações enviadas com sucesso!  Entraremos em contato em breve.");
        }
    });
   
}

acaoBotaoSubmit();