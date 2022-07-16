import TheHeader from "./TheHeader"
import TheFooter from "./TheFooter"
import ErrorBoundary from "./ErrorBoundary"
import AppScroll from "../components/AppScroll"
import AppCardList from "../components/AppCardList"
import React, { useState, useEffect } from "react"

function App() {
  const [robots, setRobots] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    async function setDataRobots() {
      const data = await fetchDataRobots()
      setRobots(data)
    }

    setDataRobots()
  }, [])

  function setDataSearch(evt) {
    const data = getValueSearch(evt)
    setSearchValue(data)
  }

  async function fetchDataRobots() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")

      return await res.json()
    } catch (err) {
      console.log(err)
    }
  }

  function getValueSearch(evt) {
    return evt.target.value.toLowerCase()
  }

  function getRobotsFiltered() {
    return robots.filter((item) => {
      const name = item.name.toLowerCase()
      const search = searchValue.toLowerCase()

      return name.includes(search)
    })
  }

  if (!robots.length) {
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

export default App
