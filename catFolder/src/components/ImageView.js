const IMAGE_PATH_PREFIX =
  "https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public";

export default class ImageView {
  constructor({ $app, initialState, onClick }) {
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "Modal ImageViewer";
    this.onClick = onClick;

    $app.appendChild(this.$target);

    const handleClick = (e) => {
      if (e.key === "Escape") {
        this.onClick();
      }
    };
    window.addEventListener("keydown", handleClick);

    this.$target.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        this.onClick();
      }
    });

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.innerHTML = `
        <div class="content" tabindex="-1">
            ${this.state ? `<img src="${IMAGE_PATH_PREFIX}${this.state}" />` : ""}
        </div>
    `;
    this.$target.style.display = this.state ? "block" : "none";
  }
}
