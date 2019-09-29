let itens = [];

function add()
{
    let pessoa = {
        nome: document.getElementById("nome").value,
        fone: document.getElementById("fone").value,        
        idade: document.getElementById("idade").value,
        email: document.getElementById("email").value
    }
    itens.push(pessoa);
}


function lista()
{
    //let i;
    let textohtml='<table>';

    for(let i=0;i<itens.length;i++)
    {
        textohtml += '<tr>';
        textohtml += '<td>' + 'Nome: ' + itens[i].nome + '</td>';
        textohtml += '<td>' + 'Fone: ' + itens[i].fone + '</td>';
        textohtml += '<td>' + 'Idade: ' + itens[i].idade + '</td>';
        textohtml += '<td>' + 'Email: ' + itens[i].email + '</td>';
        textohtml += '</tr>'; 
    }

    textohtml +='</table>';

    document.getElementById("container").innerHTML = textohtml;
}
function fonte(e){
    let elemento = document.getElementById("teste");
    let atual = elemento.style.fontSize;
    if(e == 'a'){
        atual = parseInt(atual)+2+'px';
    }else if (e == 'b'){
        atual = parseInt(atual)-2+'px';
    }
    elemento.style.fontSize= atual;
}



function Contraste() {
    document.getElementById("teste").style.color = "yellow";
    document.getElementById("teste").style.backgroundColor = "black";
        }

function Normal(){
    document.getElementById("teste").style.color = "#000";
    document.getElementById("teste").style.backgroundColor = "#FFF";
    
}

