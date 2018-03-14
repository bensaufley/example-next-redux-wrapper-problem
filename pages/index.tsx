import * as withRedux from "next-redux-wrapper";
import * as React from "react";

import makeStore from "../redux/makeStore";

class Index extends React.Component {
  public render() {
    return (
      <h1>Test</h1>
    );
  }
}

export default withRedux(makeStore)(Index);
