import Breadcrumb from "./components/Breadcrumb.js";
import Node from "./components/Node.js";
import ImageView from "./components/ImageView.js";
import { getData } from "./libs/api.js";

export default class App {
  constructor($app) {
    this.$app = $app;

    this.state = {
      isRoot: true,
      selectedFilePath: "",
      nodes: [],
      depth: [],
    };

    this.breadcrumb = new Breadcrumb({
      $app,
      initialState: this.state.depth,
    });

    this.node = new Node({
      $app,
      initialState: {
        nodes: this.state.nodes,
        isRoot: this.state.isRoot,
      },
      onClick: async (node) => {
        try {
          if (node.type === "DIRECTORY") {
            const nextNodes = await getData(node.id);
            this.setState({
              ...this.state,
              depth: [...this.state.depth, node],
              isRoot: false,
              nodes: nextNodes,
            });
          } else if (node.type === "FILE") {
            this.setState({
              ...this.state,
              selectedFilePath: node.filePath,
            });
          }
        } catch (e) {
          console.log(e);
        }
      },
    });

    this.imageView = new ImageView({ $app, initialState: this.state.selectedFilePath });

    this.init();
  }

  setState(nextState) {
    this.state = nextState;
    this.breadcrumb.setState(this.state.depth);
    this.node.setState({
      nodes: this.state.nodes,
      isRoot: this.state.isRoot,
    });
    this.imageView.setState(this.state.selectedFilePath);
  }

  async init() {
    try {
      const fetchedData = await getData();
      this.setState({
        ...this.state,
        isRoot: true,
        nodes: fetchedData,
      });
    } catch (e) {
      console.log(e);
    }
  }
}
