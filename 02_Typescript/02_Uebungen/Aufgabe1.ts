interface Airplane{
    model:string,
    passangerCapacity:number,
    rangelnKm:number,
    isJet:boolean,
}

const airplane1: Airplane = {
    model:"Boeing 747",
    passangerCapacity:645,
    rangelnKm:15000,
    isJet:false,
}

const airplane2: Airplane ={
    model:"Private-Jet",
    passangerCapacity:20,
    rangelnKm:8500,
    isJet:true,
}

function printAirplaneInfo(airplane1: any)
{
    console.log(airplane1)
    console.log(airplane2)
}

console.log(airplane1, airplane2)