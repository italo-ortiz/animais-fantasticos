export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  // Ativa e desativa o accordion
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // Iniciar função
  init() {
    if (this.accordionList.length) {
      // Ativar primeiro item da lista de accordion
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
