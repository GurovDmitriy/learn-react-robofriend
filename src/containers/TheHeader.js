import AppSearch from "../components/AppSearch"

function TheHeader(props) {
  const search = {
    placeholder: "search robots",
  }

  return (
    <div>
      <h1>RoboFriend</h1>
      <AppSearch dataItem={search} searchChange={props.searchChange} />
    </div>
  )
}

export default TheHeader
