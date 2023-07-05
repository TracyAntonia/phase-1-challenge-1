// let speed = prompt ('Enter speed:');

// function inputSpeed(){
//     // let speed = prompt ('Enter speed:');

//     if(speed <= 70){
//         alert("OK.")

//     }else if(speed > 70){
//         for(let i = 0; i < (speed % 70); i+) {
        
//         }
//     }    
   
//     // for (let i =0; i < (speed % 70); i+5){
//     //     i++
//     //     alert(`${counter} Points`)
//     // }alert(`${counter} Points`)
//     // if (counter > 12){
//     //     alert("License suspended!!!")
//     // }
// }   
// inputSpeed()

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