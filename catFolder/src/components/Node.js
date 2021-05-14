export default class Node {
  constructor({ $app, initialState, onClick, onBackClick }) {
    this.state = initialState;
    this.$target = document.createElement("div");
    this.$target.className = "Nodes";
    this.onClick = onClick;
    this.onBackClick = onBackClick;

    $app.appendChild(this.$target);
    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    if (this.state.nodes) {
      const nodeTemplate = this.state.nodes
        .map((node) => {
          const iconPath = node.type === "FILE" ? "./assets/file.png" : "./assets/directory.png";

          return `
                  <div class="Node" data-node-id="${node.id}">
                      <img src="${iconPath}" />
                      <div>${node.name}</div>
                  </div>
              `;
        })
        .join("");

      this.$target.innerHTML = this.state.isRoot
        ? nodeTemplate
        : `<div class="Node"><img src="/assets/prev.png"></div>${nodeTemplate}`;

      this.$target.querySelectorAll(".Node").forEach(($node) => {
        $node.addEventListener("click", (e) => {
          const { nodeId } = e.target.dataset;
          if (!nodeId) {
            this.onBackClick();
          }
          const selectedNode = this.state.nodes.find((node) => node.id === nodeId);

          if (selectedNode) {
            this.onClick(selectedNode);
          }
        });
      });
    }
  }
}
