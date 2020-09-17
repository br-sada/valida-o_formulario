const rua = document.querySelector("#logradouro")
const bairro = document.querySelector("#bairro")
const complemento = document.querySelector("#complemento")
const cidade = document.querySelector("#localidade")
const uf = document.querySelector("#uf")
const numero = document.querySelector("#rua_numero")
const referencia = document.querySelector("#referencia")

function mascaraCpf(cpf) {
    const cpfcampo = cpf.value

    if (cpfcampo.length == 3 || cpfcampo.length == 7) {
        cpf.value += "."
    }

    if (cpfcampo.length == 11) {
        cpf.value += "-"
    }
}

//Consulta Cep
function limparCampo() {
    const limpo = ""
    rua.value = limpo
    bairro.value = limpo
    cidade.value = limpo
    uf.value = limpo
    complemento.value = limpo
    numero.value = limpo
    referencia.value = limpo
}

function mostrarDados(resultados) {
    if(JSON.stringify(resultados) == '{"erro":true}') {
        alert("CEP não encontrado!")
        limparCampo()
    } else {
        for(const key in resultados) {
            if(document.querySelector("#" + key)) {
                document.querySelector("#" + key).value = resultados[key]
                console.log(resultados[key])
            }
        }
    }
}

function consultaCep(cep) {
    const cepNumero = cep.value.replace(/\D/g, "")
    const cepUrl = `https://viacep.com.br/ws/${cepNumero}/json/`
    const validacep = /^[0-9]{8}$/

    
    if (validacep.test(cepNumero)) {
        fetch(cepUrl)
        .then(function (response) {
            response.json().then(function (data) {
                mostrarDados(data)
            })
        })
        .catch(function(err) {
            console.log(`${err}`)
        })
    } else {
        alert("Informe o Cep corretamente")
    }
} 

