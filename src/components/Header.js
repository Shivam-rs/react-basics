function Header(props) {

  return (
    <div>
      <h1>Hello there from header, {props.name}.</h1>
      <h2>Your color is {props.color}</h2>
    </div>

  )
}

export default Header;