import AppCardListItem from "./AppCardListItem"

function AppCardList({ dataItem }) {
  const data = dataItem.map((item, index) => {
    return {
      ...item,
      id: `robot-${index + 1}`,
    }
  })

  return data.map((item) => {
    return <AppCardListItem dataItem={item} key={item.name} />
  })
}

export default AppCardList
