function Main(props) {
  const mainStyle = {
    width: "calc(30% - 10px)",
    background: "lightblue",
    marginLeft: "10px",
  }

  return <h2 style={mainStyle}>{props.greeting} from main</h2>
}

export default Main;