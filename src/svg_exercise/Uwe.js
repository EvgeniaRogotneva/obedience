import * as d3 from "d3";
import React from "react";
import ReactDOM from "react-dom";

class Uwe extends React.Component {
  componentDidMount() {
    const handleDrag = d3
      .drag()
      .subject(function () {
        const me = d3.select(this);
        return { x: me.attr("x"), y: me.attr("y") };
      })
      .on("drag", function () {
        const me = d3.select(this);
        me.attr("x", d3.event.x);
        me.attr("y", d3.event.y);
      });
    const node = ReactDOM.findDOMNode(this);
    handleDrag(d3.select(node));
  }
  render() {
    return <rect {...this.props} />;
  }
}
class App extends React.Component {
  render() {
    return (
      <svg style={{ border: "1px solid" }} width={300} height={300}>
        <Uwe x={20} y={20} width={50} height={50} />
      </svg>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
