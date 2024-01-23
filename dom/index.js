function myfunction(){
    const span = document.getElementById("myspan")
    const h2 = document.getElementById("myh2")
    h2.insertAdjacentElement("afterend", span)
}