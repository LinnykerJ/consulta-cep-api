const soap = require('soap')
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl '

soap.createClient(url, (err,cliente) => {
    if(err){
        console.log(err)
    }else{
        //client
        console.log('OK')
        cliente.consultaCEP({
            cep: '67133000'                    // <~~ para fazer pesquisa modificar esse cep
        }, (err, res) => {
            console.log(res)
        })
    }
})