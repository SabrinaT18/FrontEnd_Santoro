const valorTicket=200
const descEstudiante=80
const descTrainee=50
const descJunior=15

function suma(){
    let cant=document.getElementById("cant").value
    
    let cat=document.getElementById("cat").value

    let total=0
    if (cat==1) {
        total=cant*valorTicket*.2 //80%
    } else if (cat==2) {
        total=cant*valorTicket*.5 //50%
    } else if (cat==3){
        total=cant*valorTicket*.85 //15%
    } else {
    total=cant*valorTicket 
    }
    document.getElementById("total").innerHTML=`Total a pagar: $ ${total}`
}


function borrar(){
    document.getElementById("total").innerHTML=`Total a pagar: $ 0`
}


