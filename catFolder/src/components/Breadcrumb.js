export default class Breadcrumb {
  constructor({ $app, initialState, onClick }) {
    this.state = initialState;
    this.onClick = onClick;
    this.$target = document.createElement("nav");
    this.$target.className = "Breadcrumb";

    $app.appendChild(this.$target);
    this.$target.addEventListener("click", (e) => {
      const $navItem = e.target.closest(".nav__item");

      if ($navItem) {
        const { index } = $navItem.dataset;
        this.onClick(index ? parseInt(index, 10) : null);
      }
    });

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = `<div class="nav__item">root</div>${this.state
      .map((node, index) => `<div class="nav__item" data-index="${index}">${node.name}</div>`)
      .join("")}
    `;
  }
}
