import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import {Helmet} from "react-helmet";



function App() {
 
  return (
   <main className="app transition-all ease-in">
      <Helmet>
        <meta charSet="utf-8" />
        <title>3DTees</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Home />
      <Canvas />
      <Customizer />
   </main>
  )
}

export default App
