var suma = 0
var numero = 0
var contador = 0
while (numero < 100) {
    numero = numero + 2
    suma =  suma + numero
    contador ++
}
document.write(suma)
alert("hay "+ contador + " numeros pares")