function encontreA(str) {
    let contador = 0

    for (let i = 0;
         i < str.length; i++) {

        const char = str[i]

        if (char === 'a' || char === 'A') {
            contador++;
        }
    }

    if (contador > 0) {
        console.log(`A letra 'a' aparece ${contador} vezes.`)
    } else {
        console.log("A letra 'a' não aparece na string.")
    }
}

const texto = prompt("Digite uma frase ou palavra para contar a letra 'a':")
encontreA(texto)
