import TV from "./TV";

const tv = new TV("Globo", 5, true); // Instanciando a classe TV
tv.statusTV(); // Status atual da TV

tv.aumentarVolume();
tv.aumentarVolume();
tv.diminuirVolume();
tv.volumeAtual(); // Volume depois de mexer nele três vezes

tv.canalAtual();
tv.mudarCanal("SBT"); // Mudando canal
tv.canalAtual();

tv.statusTV();
tv.ligarOuDesligarTV();
tv.statusTV;