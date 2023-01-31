 var count = 0;
 let increase = document.getElementById("increase").addEventListener("click",() =>
 {
    changeCount(+1)
 })
 let decrease = document.getElementById("decrease").addEventListener("click",() =>{
    changeCount(-1)
})
 const changeCount = (number) => { 
    count += number
    document.getElementById("count").innerHTML = count

 }