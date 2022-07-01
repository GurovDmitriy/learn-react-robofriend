import AppSearch from "./AppSearch"

function TheHeader(props) {
  const search = {
    placeholder: "search robots",
  }

  return (
    <div>
      <h1>RoboFriends</h1>
      <AppSearch dataItem={search} searchChange={props.searchChange} />
    </div>
  )
}

export default TheHeader
