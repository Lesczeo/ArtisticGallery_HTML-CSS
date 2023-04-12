// essa função armazena um detalhe do dia atual, que será usado por componentes:
function DataAtual(argumento) {
    var data = new Date();
    switch (argumento) {   
        case 'ano':
        case 'Ano':
            var ano = data.getFullYear();
            return ano;
        case 'mes':
        case 'Mes':
            //+1 pois na função "getMonth" começa-se com zero:
            var mes = (data.getMonth()+1).toString()
            var mesFormatado = (mes.length === 1) ? `0${mes}` : mes
            return mesFormatado;
        case 'dia':
        case 'Dia':
            var dia = data.getDate().toString()
            var diaFormatado = (dia.length === 1) ? `0${dia}` : dia
            return diaFormatado;
        default:
            dia = data.getDate().toString()
            diaFormatado = (dia.length === 1) ? `0${dia}` : dia
            mes = (data.getMonth()+1).toString()
            mesFormatado = (mes.length === 1) ? `0${mes}` : mes
            ano = data.getFullYear();
            return `${diaFormatado}/${mesFormatado}/${ano}`;
    }
}

// Essa função move a janela do usuário para o começo da página:
function VoltarTopo() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // Chrome
    document.body.scrollTo({top: 0, behavior: 'smooth'}); // Safari(?)
}

export {DataAtual, VoltarTopo};