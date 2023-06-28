function raffle() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
       alert("Não pode digitar ENTRE menor que E")
    }
    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;


        alert(result)
    }



}



