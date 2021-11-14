const style = {
  position: 'absolute',
  bottom: '0',
  right: '0',
  padding: '1em',
  display: 'block',
  textDecoration: 'none',
  fontSize: '14px',
  fontStyle: 'italic',
  color: 'gray',
  transition: 'color 1s'
}

const Link = () => {
  return (
    <a
      style={style}
      href="https://www.oreilly.com/"
      title="Visit book site"
    >
      Designing React Hook The Right Way
    </a>
  )
}

const { render } = ReactDOM
const div = document.createElement("div")
document.body.appendChild(div)
render(<Link />, div)

export default Link