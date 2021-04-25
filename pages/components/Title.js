export default function Title({backgroundColor, version}) {
  return (
    <h1 style={{backgroundColor: backgroundColor, padding: 20, fontSize: 70}}>
        Welcome to version {version}
    </h1>
  )
}
