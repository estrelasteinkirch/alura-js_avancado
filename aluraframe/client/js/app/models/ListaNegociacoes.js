class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  //blindando as negociacoes dentro da lista: lê a cópia da lista as negociações, se alguém mudar, nao consegue pois muda a cópia e não a lista original
  get negociacoes() {
    return [].concat(this._negociacoes);
  }
}
