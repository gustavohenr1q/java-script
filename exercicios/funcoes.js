/**
 * Estudo das funções
 * @author Gustavo Henrique
 */

    function hello() {
        console.clear()
        console.log("Hello Function")
          console.log(typeof hello)  
    }
    
    hello()







    // função anônima simplificada "Arrow Function (JS Moderno)" 

    const hello3 = () => {
        console.clear()
        console.log('Hello Arrow function assgined')
        console.log("Tipo: " + typeof (hello3)) // apoio ao entendimento da lógica
    }

    hello3()



        console.log('')

       // função simples com parâmetros 

       function somar(num1,num2) {
        console.log("Tipo: " + typeof (somar)) // apoio ao entendimento da lógica
        return (console.log(num1 + num2))
        
       }

       // nesse caso, dentro de parenteses, fornecemos os números que serão somados na função
       
       somar(2, 3)


       console.log('')

        // função anônima com parâmetros 

        const somarA = function (num1, num2) {
            console.log("Tipo: " + typeof (somar)) // apoio ao entendimento da lógica
            return (console.log(num1 + num2))
        }

        somarA(6, 7)

        console.log('')

        
       // função anônima simplificada com parâmetros 

       const somarAF = (num1, num2) => {
            console.log("Tipo: " + typeof (somar)) // apoio ao entendimento da lógica
            return (console.log(num1 + num2))
       }
       somarAF(20, 10)

       

       console.log('')

       // função anônima super simplificada com parâmetros 
       // CUIDADO! neste caso o retorno é impl
       const somarAFS = (num1, num2) => (console.log(num1 * num2))

       somarAFS(30, 30)
