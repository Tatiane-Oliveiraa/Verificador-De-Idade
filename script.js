function verificar() {
   var data = new Date()
   var ano = data.getFullYear() /*puxa dados do ano que estamos*/
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (Number(fano.value.length == 0) || Number(fano.value > ano)) {
        alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
    //busca o elemento pelo nome
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
       // res.innerHTML = `Idade calculada: ${idade}.`
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemenino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemaduro.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homemvelho.png')
            }
        } else if (fsex[1].checked) { 
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemenina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulhermadura.png')
            } else {
                //Idosa
                img.setAttribute('src', 'mulhervelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
   }
}