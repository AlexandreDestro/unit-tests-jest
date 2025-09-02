const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
    let utilitarios;

    beforeEach(() => {
        utilitarios = new Utilitarios();
    });


    
    test('Deve inverter uma string corretamente', () => {
        expect(utilitarios.inverterString('hello')).toBe('olleh');
    });

    test('Deve contar o número de caracteres em uma string', () => {
        expect(utilitarios.contarCaracteres('javascript')).toBe(10);
    });

    test('Deve converter uma string para maiúsculas', () => {
        expect(utilitarios.paraMaiusculas('abc')).toBe('ABC');
    });

    test('Deve converter uma string para minúsculas', () => {
        expect(utilitarios.paraMinusculas('XYZ')).toBe('xyz');
    });

    test('Deve colocar a primeira letra de uma string em maiúscula', () => {
        expect(utilitarios.primeiraLetraMaiuscula('teste')).toBe('Teste');
    });

    test('Deve remover espaços em branco do início e fim de uma string', () => {
        expect(utilitarios.removerEspacos('  texto com espacos  ')).toBe('texto com espacos');
    });

    test('Deve repetir um texto o número de vezes correto', () => {
        expect(utilitarios.repetirTexto('oi', 3)).toBe('oioioi');
    });

    test('Deve contar o número de palavras em uma string', () => {
        expect(utilitarios.contarPalavras('Olá mundo, este é um teste.')).toBe(6);
    });

    test('Deve verificar se uma string é um palíndromo', () => {
        expect(utilitarios.ehPalindromo('Ame a ema')).toBe(true);
        expect(utilitarios.ehPalindromo('Não é palindromo')).toBe(false);
    });
    


    test('Deve somar dois números corretamente', () => {
        expect(utilitarios.somar(5, 3)).toBe(8);
    });

    test('Deve subtrair dois números corretamente', () => {
        expect(utilitarios.subtrair(10, 4)).toBe(6);
    });

    test('Deve multiplicar dois números corretamente', () => {
        expect(utilitarios.multiplicar(2, 7)).toBe(14);
    });

    test('Deve dividir dois números corretamente', () => {
        expect(utilitarios.dividir(10, 2)).toBe(5);
    });

    test('Deve lançar um erro ao dividir por zero', () => {
        expect(() => utilitarios.dividir(10, 0)).toThrow('Divisão por zero');
    });

    test('Deve verificar se um número é par', () => {
        expect(utilitarios.ehPar(4)).toBe(true);
        expect(utilitarios.ehPar(7)).toBe(false);
    });

    test('Deve verificar se um valor é um número', () => {
        expect(utilitarios.ehNumero(123)).toBe(true);
        expect(utilitarios.ehNumero('abc')).toBe(false);
        expect(utilitarios.ehNumero(NaN)).toBe(false);
    });

    test('Deve gerar um número aleatório dentro do intervalo correto', () => {
        const numAleatorio = utilitarios.gerarNumeroAleatorio(50);
        expect(numAleatorio).toBeGreaterThanOrEqual(0);
        expect(numAleatorio).toBeLessThan(50);
    });



    test('Deve retornar o primeiro elemento de um array', () => {
        expect(utilitarios.primeiroElemento([1, 2, 3])).toBe(1);
    });

    test('Deve retornar o último elemento de um array', () => {
        expect(utilitarios.ultimoElemento([1, 2, 3])).toBe(3);
    });

    test('Deve retornar o tamanho de um array', () => {
        expect(utilitarios.tamanhoArray([1, 2, 3, 4])).toBe(4);
    });

    test('Deve ordenar um array corretamente', () => {
        const arrDesordenado = [3, 1, 2];
        const arrOrdenado = utilitarios.ordenarArray(arrDesordenado);
        expect(arrOrdenado).toEqual([1, 2, 3]);
        
        expect(arrDesordenado).toEqual([3, 1, 2]);
    });

    test('Deve inverter um array corretamente', () => {
        const arrOriginal = [1, 2, 3];
        const arrInvertido = utilitarios.inverterArray(arrOriginal);
        expect(arrInvertido).toEqual([3, 2, 1]);
        
        expect(arrOriginal).toEqual([1, 2, 3]);
    });
    
    test('Deve juntar os elementos de um array com o separador padrão', () => {
        expect(utilitarios.juntarArray(['a', 'b', 'c'])).toBe('a,b,c');
    });

    test('Deve juntar os elementos de um array com um separador específico', () => {
        expect(utilitarios.juntarArray(['a', 'b', 'c'], '-')).toBe('a-b-c');
    });

    test('Deve calcular a média de um array de números', () => {
        expect(utilitarios.mediaArray([10, 20, 30])).toBe(20);
        expect(utilitarios.mediaArray([])).toBe(0);
    });

    test('Deve remover duplicados de um array', () => {
        expect(utilitarios.removerDuplicados([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
    });

    test('Deve mesclar dois objetos corretamente', () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });
});