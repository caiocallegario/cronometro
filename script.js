function progressivo_tela(){
    
    document.getElementById('btn-left-right').style.display = 'none';
    document.getElementById('stop-start-prog').style.display = 'flex';
    document.getElementById('prog').innerHTML = '0';
}

function progressivo(){
    document.getElementById('prog').style.display = 'flex';
    document.getElementById('iniciada').style.display = 'flex';

    if(document.getElementById('prog').innerHTML != '0'){
    document.getElementById('iniciada').innerHTML = 'Contagem retornada';
    }
    else{
    document.getElementById('iniciada').innerHTML = 'Contagem Iniciada!';
    }

    tempo = setInterval(function (){
        let cronometro = document.getElementById('prog').innerHTML;
        let soma = parseInt(cronometro) + 1;
        document.getElementById('prog').innerHTML = soma;

    }, 1000);
}

function stop(){
    clearInterval(tempo);
    document.getElementById('iniciada').innerHTML = 'Pausada!';
}

function reset(){
    clearInterval(tempo);
    cronometro = document.getElementById('prog').innerHTML = '0';
    document.getElementById('iniciada').innerHTML = 'Contagem zerada!';
}

function regresivo_tela(){
    document.getElementById('regressive').style.display = 'flex';
    document.getElementById('btn-left-right').style.display = 'none';
}

function regresive(){
    tempo2 = setInterval(function(){
        let cronometro = document.getElementById('input').value;
        let subtracao = Math.trunc(parseInt(cronometro)) - 1;

        document.getElementById('input').value = subtracao;    
        document.getElementById('esgotado').innerHTML = '';

        if(document.getElementById('input').value == '0'){
            document.getElementById('input').value = '0';
            clearInterval(tempo2);
            document.getElementById('esgotado').innerHTML = 'Tempo esgotado!';
            }

        if(Number.isNaN(parseInt(document.getElementById('input').value)) == true ){
            clearInterval(tempo2);
            alert("Digite um N??mero Inteiro V??lido")
            document.getElementById('input').value = '0';
        }
        
    },1000);
}

function stopregressive(){
    clearInterval(tempo2);
}

function resetregressive(){
    clearInterval(tempo2);
    document.getElementById('input').value = '0';
}

function telainicio(){

    document.getElementById('btn-left-right').style.display = 'flex';
    document.getElementById('stop-start-prog').style.display = 'none';
    document.getElementById('prog').style.display = 'none';
    document.getElementById('iniciada').style.display = 'none';
    document.getElementById('regressive').style.display = 'none';
    document.getElementById('prog').innerHTML = '';
    document.getElementById('esgotado').style.display = 'none';
    document.getElementById('input').value = '0';
    clearInterval(tempo);
    clearInterval(tempo2);
}
