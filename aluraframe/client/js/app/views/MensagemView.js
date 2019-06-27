class MensagemView extends View {
  constructor(elemento) {
    super(elemento); // super é pra classe mãe
  }
  template(model) {
    //?:  é verdadeiro? se sim, retorna a mensagem a seguir

    return model.texto
      ? `<p class="alert alert-info">${model.texto}</p>`
      : "<p></p>";
  }
}
