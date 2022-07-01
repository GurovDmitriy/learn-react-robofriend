function AppCardListItem({ dataItem }) {
  return (
    <div
      id={dataItem.id}
      className="bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5"
    >
      <Image dataItem={dataItem} />
      <Caption dataItem={dataItem} />
    </div>
  )
}

function Image({ dataItem }) {
  const imageSrc = `https://robohash.org/${dataItem.name}`

  return <img src={imageSrc} alt={dataItem.imageAlt} />
}

function Caption({ dataItem }) {
  return (
    <div>
      <h2>{dataItem.name}</h2>
      <p>{dataItem.email}</p>
    </div>
  )
}

export default AppCardListItem
