let numtRea = document.querySelector(".numtRea")
let numMem = document.querySelector('.numMem')
let numVer = document.querySelector('.numVer')
let numVis = document.querySelector('.numVis')
let numb = document.querySelector('.numb')

 /*somando valores e transf em numero*/ 
function somar(field){
        switch(field){
            case 'reaction':
                numtRea.innerHTML = ( parseInt(numtRea.innerText) + 1 ) + '<span>&nbsp; / 100 </span>'
                break
            case 'memory':
                numMem.innerHTML = (parseInt(numMem.innerText) + 1) + '<span>&nbsp; / 100 </span>'
                break
            case 'verbal':
                numVer.innerHTML = (parseInt( numVer.innerText) + 1) + '<span>&nbsp; / 100 </span>'
                break
            case 'visual' :
                numVis.innerHTML = (parseInt (numVis.innerText) + 1) + '<span>&nbsp; / 100 </span>'
                break   
        }
        media()    
}

function media(){
    let total = ( parseInt(numtRea.innerText) + parseInt(numMem.innerText) + parseInt( numVer.innerText) + parseInt (numVis.innerText))
    let media = parseInt( total / 4)
    numb.innerText = media
}

 /*subtraindo valores e transf em numero*/ 
function subtrair(field){
    switch(field){
        case 'reaction':
            numtRea.innerHTML = ( parseInt(numtRea.innerText) - 1 ) + '<span>&nbsp; / 100 </span>'
            break
        case 'memory':
            numMem.innerHTML = (parseInt(numMem.innerText) - 1) + '<span>&nbsp; / 100 </span>'
            break
        case 'verbal':
            numVer.innerHTML = (parseInt( numVer.innerText) - 1) + '<span>&nbsp; / 100 </span>'
            break
        case 'visual' :
            numVis.innerHTML = (parseInt (numVis.innerText) - 1) + '<span>&nbsp; / 100 </span>'
            break   
    }
    media()    
}