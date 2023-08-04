function metodoPagamento (pagamento, valor ){
    if (pagamento === 'debito'){
        console.log(valor - (valor* 0.1));
    }else if (pagamento === 'pix', 'dinheiro'){
        console.log(valor - (valor* 0.15));
    }else if (pagamento === 'credito'){
        console.log(valor + (valor * 0.20));
    }else {
        console.log('metdo de pagamento nao escolhido')
    }
}
 metodoPagamento('dinheiro', 100);