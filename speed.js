function inputSpeed(){
    let speed = prompt ('Enter speed')

    let counter = 0;
    if (speed <= 70){
        alert ('Ok')
    } else if (speed > 70){
        if (speed >= 140){
            alert ("Licesnse Suspended")
        }
        for (let i = 0; i < (speed % 70); i+=5){
            counter ++
        } alert(`${counter} Points`)

        if (counter > 12){
            alert("LICENSE SUSPENDED!!!!!!")
        }
    }
    
}
inputSpeed()