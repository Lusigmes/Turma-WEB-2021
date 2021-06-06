var btnCadastro = document.getElementById('btnCadastro');
var btnAtualiza = document.getElementById('btnAtualiza');
var btnBuscar = document.getElementById('btnBuscar');
var btnDelete = document.getElementById('btnDelete');

//produto,fornecxedor,valor,qnt,data,descrção
function criarProduto(id_,produto_,fornecedor_,valor_,quantia_,data_,descri_){
    var produto = {
        id:id_,
        name:produto_,
        forn:fornecedor_,
        valor:valor_,
        qnt:quantia_,
        data:data_,
        descr:descri_

    }
    return produto;
}
function validarPedido(produto){
    return produto.name && produto.valor && produto.qnt && produto.forn ;
}
function cadastrarProduto(produto){
    window.localStorage.setItem(produto.id,JSON.stringify(produto))
}

if(btnAtualiza){
    btnAtualiza.onclick = function(){
        var produto = criarProduto(document.getElementById('idProduto').value,
        document.getElementById('name').value,
        document.getElementById('forn').value,
        document.getElementById('valor').value,
        document.getElementById('qnt').value,
        document.getElementById('data').value,
        document.getElementById('descr').value
        )
        if(validarPedido(produto)){
            cadastrarProduto(produto);
            alert('Sucesso');
            document.getElementById('formU').reset();
        }else{
            alert('Erro');
            return;
        }
    }
}
if(btnCadastro){
    btnCadastro.onclick = function(){
        var produto = criarProduto(new Date().getFullYear().toString() + new Date().getDay().toString() + new Date().getSeconds().toString(),
           document.getElementById('name').value,
           document.getElementById('forn').value,
           document.getElementById('valor').value,
           document.getElementById('qnt').value,
           document.getElementById('data').value,
           document.getElementById('descr').value);
        if(validarPedido(produto)){
            cadastrarProduto(produto);
            alert('Sucesso');
            document.getElementById('formC').reset();
        }else{
            alert('Erro');
            return;
        }
    }
}

if(btnBuscar){
    btnBuscar.onclick = function(){
        var id = document.getElementById('idProduto').value;
        if(id){
            var produto = JSON.parse(localStorage.getItem(id));
            document.getElementById('name').value = produto.name ;
            document.getElementById('forn').value = produto.forn ;
            document.getElementById('valor').value = produto.valor;
            document.getElementById('qnt').value = produto.qnt ;
            document.getElementById('data').value = produto.data;
            document.getElementById('descr').value = produto.descr ;
        }else{
            alert('Erro');
            return;
        }
    }
}
if(btnDelete){
    btnDelete.onclick = function(){
        var id= document.getElementById('idProduto').value;
        var produto = JSON.parse(localStorage.getItem(id));
        if(produto){
            localStorage.removeItem(id);
            alert('Sucesso');
            document.getElementById('formC').reset();
            document.getElementById('formU').reset();
        }
    }
}
