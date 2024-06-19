import * as readline from 'readline';
import TV from "./TV";

const tv = new TV("Globo", 5, true);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = () => {
    console.log("1) Ver o status atual da TV");
    console.log("2) Mudar o canal");
    console.log("3) Aumentar o volume");
    console.log("4) Diminuir o volume");
    console.log("5) Desligar TV");
  
    rl.question('\nO que deseja fazer? \n', (opcao) => {
      switch (Number(opcao)) {
        case 1:
            tv.statusTV();
            menu();
            break;
        case 2:
            rl.question('Qual canal você gostaria de assistir? ', (canal) => {
              tv.mudarCanal(canal);
              menu();
            });
            break;
        case 3:
            tv.aumentarVolume();
            tv.volumeAtual();
            menu();
            break;
        case 4:
            tv.diminuirVolume();
            tv.volumeAtual();
            menu();
            break;
        case 5:
            tv.ligarOuDesligarTV();
            rl.close();
            break;
        default:
            console.log("Opção inválida");
            menu();
      }
    });
  };

menu();

