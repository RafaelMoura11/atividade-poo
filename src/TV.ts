export default class TV {
    private _canal: string;
    private _volume: number;
    private _TvLigada: boolean;

    constructor(canal: string, volume: number, TvLigada: boolean) {
        this._canal = canal;
        this._volume = volume;
        this._TvLigada = TvLigada;
    }

    public mudarCanal(canal: string): void {
        this._canal = canal;
        return console.log(`Agora você está no canal ${ this._canal }`);
    }

    public canalAtual(): void {
        return console.log(`Você está no canal ${ this._canal }`);
    }

    public aumentarVolume(): void {
        this._volume += 1;
        return console.log(`Volume: ${ this._volume }`);
    }

    public diminuirVolume(): void {
        this._volume -= 1;
        return console.log(`Volume: ${ this._volume }`);
    }

    public volumeAtual(): void {
        return console.log(`Volume: ${ this._volume }`);
    }

    public ligarOuDesligarTV(): void {
        this._TvLigada = !this._TvLigada;
        const mensagem = this._TvLigada ? "Ligando a TV" : "Desligando a TV";
        return console.log(mensagem);
    }

    public TVEstaLigada(): string {
        const mensagem = this._TvLigada ? "A TV está ligada" : "A TV está desligada";
        return mensagem;
    }

    public statusTV(): void {
        console.log(`Canal atual: ${ this._canal }`);
        console.log(`Volume atual: ${ this._volume }`);
        console.log(`A TV está: ${ this.TVEstaLigada() }`);
    }

}