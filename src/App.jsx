import Banner from "./components/Banner"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer titulo={"Momentito!!!"} mensaje={"Dentro de muy poco vas a poder disfrutar de una tienda terriblemente tuneada ... mantenete al tanto en nuestras redes sociales"} />
    <Banner /> 
    </>

  )
}

export default App
