function Header(props) {
  const headerStyle = {
    background: "blue",
    marginLeft: "10px",
    marginRight: "50px"
  }
  return (
    <div style={headerStyle}>
      <h1>Hello there from header, {props.name}.</h1>
      <h2>Your color is {props.color}</h2>
    </div>

  )
}

export default Header;