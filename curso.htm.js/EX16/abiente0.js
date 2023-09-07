let num =[5,8,2,9,3]

num.push(1)
num.sort()

console.log(num)
console.log(` o valor tem ${num.length} posiçoes`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log(` o valor nao foi escontrado`)
}else{
    console.log(` o valor ta posicao ${pos}`)
}
