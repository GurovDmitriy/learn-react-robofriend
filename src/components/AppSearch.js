function AppSearch(props) {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        onInput={props.searchChange}
        placeholder={props.dataItem.placeholder}
      />
    </div>
  )
}

export default AppSearch
