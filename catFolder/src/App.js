import Breadcrumb from "./components/Breadcrumb.js";
import Node from "./components/Node.js";
import ImageView from "./components/ImageView.js";
import { getData } from "./libs/api.js";
import Loading from "./components/Loading.js";

const cache = {};

export default class App {
  constructor($app) {
    this.$app = $app;

    this.state = {
      isRoot: true,
      isLoading: false,
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
          this.setState({
            ...this.state,
            isLoading: true,
          });
          if (node.type === "DIRECTORY") {
            if (cache[node.id]) {
              this.setState({
                ...this.state,
                depth: [...this.state.depth, node],
                isRoot: false,
                nodes: cache[node.id],
              });
            } else {
              const nextNodes = await getData(node.id);
              this.setState({
                ...this.state,
                depth: [...this.state.depth, node],
                isRoot: false,
                nodes: nextNodes,
              });
              cache[node.id] = nextNodes;
            }
          } else if (node.type === "FILE") {
            this.setState({
              ...this.state,
              selectedFilePath: node.filePath,
            });
          }
        } catch (e) {
          console.log(e);
        } finally {
          this.setState({
            ...this.state,
            isLoading: false,
          });
        }
      },
      onBackClick: () => {
        try {
          const nextState = { ...this.state };
          nextState.depth.pop();

          const prevNodeId = nextState.depth.length === 0 ? null : nextState.depth[nextState.depth.length - 1].id;

          this.setState({
            ...this.state,
            isLoading: true,
          });

          if (prevNodeId === null) {
            this.setState({
              ...nextState,
              isRoot: true,
              nodes: cache.rootNode,
            });
          } else {
            this.setState({
              ...nextState,
              isRoot: false,
              nodes: cache[prevNodeId],
            });
          }
        } catch (e) {
          console.log(e);
        } finally {
          this.setState({
            ...this.state,
            isLoading: false,
          });
        }
      },
    });

    this.imageView = new ImageView({ $app, initialState: this.state.selectedFilePath });

    this.loading = new Loading({ $app, initialState: this.state.isLoading });

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
    this.loading.setState(this.state.isLoading);
  }

  async init() {
    try {
      this.setState({
        ...this.state,
        isLoading: true,
      });
      const fetchedData = await getData();
      this.setState({
        ...this.state,
        isRoot: true,
        nodes: fetchedData,
      });
      cache.rootNode = fetchedData;
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        ...this.state,
        isLoading: false,
      });
    }
  }
}
