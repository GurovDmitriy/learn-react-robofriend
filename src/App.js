import TheHeader from "./components/TheHeader"
import TheFooter from "./components/TheFooter"
import AppCardList from "./components/AppCardList"
import { robots } from "./data/robots"
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      robots: robots,
      searchField: "",
    }
  }

  setSearch = (evt) => {
    const searchValue = evt.target.value.toLowerCase()

    this.setState({ searchField: searchValue })
  }

  getRobotsFiltered(arr, value) {
    return arr.filter((item) => {
      const name = item.name.toLowerCase()
      const search = value.toLowerCase()

      return name.includes(search)
    })
  }

  render() {
    const robotsFiltered = this.getRobotsFiltered(
      this.state.robots,
      this.state.searchField
    )

    return (
      <div className="container tc">
        <TheHeader
          className="container__header"
          searchChange={this.setSearch}
        />
        <main className="container__main">
          <AppCardList dataItem={robotsFiltered} />
        </main>
        <TheFooter className="container__footer" />
      </div>
    )
  }
}

export default App
