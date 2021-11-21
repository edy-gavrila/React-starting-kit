//This is the root React element. You can write your React app structure in this file.
const App = () => {
  //JSX code will be transpiled straight in the browser with the help of the babel script tag.
  return <div><Hello/></div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
