import TheHeader from "./TheHeader"
import TheFooter from "./TheFooter"
import ErrorBoundary from "./ErrorBoundary"
import AppScroll from "../components/AppScroll"
import AppCardList from "../components/AppCardList"
import { useEffect } from "react"
import { connect } from "react-redux"

import { setSearchValue, fetchRobots } from "../actions"

const mapStateToProps = (state) => {
  return {
    searchValue: state.reducerSearchValue.searchValue,
    robots: state.reducerFetchRobots.robots,
    isPending: state.reducerFetchRobots.isPending,
    error: state.reducerFetchRobots.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDataSearch: (evt) => dispatch(setSearchValue(evt.target.value)),
    setDataRobots: () => dispatch(fetchRobots()),
  }
}

function App(props) {
  // state
  const { searchValue, robots, setDataSearch, setDataRobots, isPending } = props

  // hooks
  useEffect(() => {
    setDataRobots()
  }, [])

  function getRobotsFiltered() {
    return robots.filter((item) => {
      const name = item.name.toLowerCase()
      const search = searchValue.toLowerCase()

      return name.includes(search)
    })
  }

  // render
  if (isPending) {
    return <h3>Loading...</h3>
  }

  return (
    <div className="container tc">
      <TheHeader className="container__header" searchChange={setDataSearch} />
      <main className="container__main mb3">
        <AppScroll>
          <ErrorBoundary>
            <AppCardList dataItem={getRobotsFiltered()} />
          </ErrorBoundary>
        </AppScroll>
      </main>
      <TheFooter className="container__footer" />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
