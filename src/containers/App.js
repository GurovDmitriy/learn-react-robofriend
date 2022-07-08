import TheHeader from "./TheHeader"
import TheFooter from "./TheFooter"
import ErrorBoundary from "./ErrorBoundary"
import AppScroll from "../components/AppScroll"
import AppCardList from "../components/AppCardList"
import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      robots: [],
      searchField: "",
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")

      const data = await res.json()

      this.setState({ robots: data })
    } catch (err) {
      console.log(err)
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
    const { robots, searchField } = this.state

    const robotsFiltered = this.getRobotsFiltered(robots, searchField)

    if (!robots.length) {
      return <h3>Loading...</h3>
    }

    return (
      <div className="container tc">
        <TheHeader
          className="container__header"
          searchChange={this.setSearch}
        />
        <main className="container__main mb3">
          <AppScroll>
            <ErrorBoundary>
              <AppCardList dataItem={robotsFiltered} />
            </ErrorBoundary>
          </AppScroll>
        </main>
        <TheFooter className="container__footer" />
      </div>
    )
  }
}

export default App
