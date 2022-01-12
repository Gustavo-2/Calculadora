function calculadora(){
    const operacao = Number(prompt("Escolha uma operação: \n 1- Soma(+) \n 2- Subtração(-) \n 3- Multiplicação(*) \n 4- Divisão real(/) \n 5- Divisão inteira(%)\n 6- Potenciação(**)"));

    if (!operacao || operacao >= 7){
        alert("[ERRO] operação inválida!");
        calculadora();
    }else{

        let n1 = Number(prompt("digite um número"));
        let n2 = Number(prompt("digite outro valor"));
        let resultado;

        if (!n1 || !n2){
            alert("[ERRO] Parametros inválidos!");
            calculadora();
        }else{
        
            function Soma(){
                resultado = n1 + n2;
                alert(` ${n1} + ${n2}  = ${resultado}`);
                novaOperacao();
            }

            function Subtracao(){
                resultado = n1 - n2;
                alert(` ${n1} - ${n2}  = ${resultado}`);
                novaOperacao();
            }

            function Multiplicacao(){
                resultado = n1 * n2;
                alert(` ${n1} * ${n2}  = ${resultado}`);
                novaOperacao();
            }

            function DivisaoReal(){
                resultado = n1 / n2;
                alert(` ${n1} / ${n2}  = ${resultado}`);
                novaOperacao();
            }

            function DivisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2}  é igual ${resultado}`);
                novaOperacao();
            }

            function Potenciacao(){
                resultado = n1 ** n2;
                alert(` ${n1} elevado a  ${n2}ª  é igual à ${resultado}`);
                novaOperacao();
             }

    function novaOperacao(){
        let opcao = prompt("Deseja fazer outa operação? \n 1- sim \n 2-não");

        if (opcao == 1){
            calculadora();
        } else if (opcao == 2){
            arlet("Até mais");
        } else {
            alert("[ERRO] digite uma opção valida!");
            novaOperacao();
        }
    }
}

       /* if (operacao == 1){
            Soma();

        }else if (operacao == 2){
            Subtracao();

        }else if (operacao == 3){
            Multiplicacao();

        }else if (operacao == 4){
            DivisaoReal();

        }else if (operacao == 5){
            DivisaoInteira();

        }else if (operacao == 6){
            Potenciacao();
        } */

        switch (operacao){
            case 1:
                Soma();
                break;
            case 2:
                Subtracao();
                break;
            case 3:
                Multiplicacao();
                break;
            case 4:
                DivisaoReal();
                break;
            case 5:
                DivisaoInteira();
                break;
            case 6:
                Potenciacao();
                break;
        }
            

    }

  
}
 calculadora();