function AppCard({ dataItem }) {
  const imageSrc = `https://robohash.org/${dataItem.name}`
  const imageAlt = dataItem.name
  const name = dataItem.name
  const email = dataItem.email
  const id = dataItem.id

  return (
    <div id={id} className="bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
      <img src={imageSrc} alt={imageAlt} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default AppCard
