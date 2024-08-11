function Sidebar(props) {
  const sideBarStyle = {
    width: "calc(30% - 10px)",
    background: "pink",
    marginLeft: "10px",
  }

  return (
    <aside style={sideBarStyle}>
      Hello from side bar
    </aside>

  )
}

export default Sidebar;