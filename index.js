//const lista =["Item1","Item2","Item3"]
//const mt = [
//[1,2,3],
//[4,5,6],
//[7,8,9]
//]
//console.log(lista[0])
//console.log (mt[1][1])

//mt.forEach(function(item){
  //  console.log(item)
//}

// lista.forEach(item => console.log(item)

//mt.forEach(function(item){
    //item.forEach(function(valor){
        //console.log(valor)
    //})
//})


class Estudante{
    constructor(nome,idade,email,ra,curso,disciplinas){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }

}
const Estudante1 = new Estudante("joyce","joyce@fatec.sp.gov.br","0215645454","ADS",["Programação, Sistema WEB, Ingles"])
const Estudante2 = new Estudante("Christian","Christian@fatec.sp.gov.br","0215645454","ADS",["Programação, Sistema WEB, Ingles"])
console.log(Estudante1)
console.log(Estudante2)