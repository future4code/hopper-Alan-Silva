// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let resultado = array[i]
                array[i] = array[j]
                array[j] = resultado
            }
        }
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let retornandoPares = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            retornandoPares.push(array[i])
        }
    }
    return retornandoPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let paresElevados = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        paresElevados.push(array[i] * array[i]);
      }
    }
    return paresElevados;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let retornandoMaiorNumero = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > retornandoMaiorNumero) {
            retornandoMaiorNumero = array[i]
        }
    }
    return retornandoMaiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
        let maiorNumero = []
        let menorNumero = []
        let maiorDivisivelPorMenor = []
        if (num1 > num2) {
          maiorNumero = num1;
          menorNumero = num2;
        } else {
          maiorNumero = num2;
          menorNumero = num1;
        }
        maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
        const  diferenca = maiorNumero - menorNumero;
        return {
          maiorNumero: maiorNumero,
          maiorDivisivelPorMenor: maiorDivisivelPorMenor,
          diferenca: diferenca
        };
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayPrimeiroN = [];
    for (let number = 0; arrayPrimeiroN.length < n; number++) {
      if (number % 2 === 0) {
        arrayPrimeiroN.push(number);
      }
    }
    return arrayPrimeiroN;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return 'Equilátero'
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoas) {
  
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}