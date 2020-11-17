import React from "react";
import Layout from "./components/Layout/Layout";
import DivProject from "./containers/DivProject/DivProject";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <DivProject />
        </Layout>
      </div>
    );
  }
}

export default App;
