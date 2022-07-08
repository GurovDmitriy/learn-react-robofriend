function AppScroll(props) {
  const style = {
    overflowY: "scroll",
    border: "1px solid lightgrey",
    height: "500px",
  }

  return <div style={style}>{props.children}</div>
}

export default AppScroll
