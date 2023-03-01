import "./App.scss";
import Nav from "./views/Nav/Nav"
import Body from "./views/Body/Body-Youtube"
import {  useRef,useState } from "react";
import Popular from "./views/Popular/Popular"
import 'bootstrap/dist/css/bootstrap.min.css';
function App(props) {
  const [isshow,setisshow] = useState(true)
  const [query,setquery] = useState('')
  const childRef = useRef();
  let handlesearch= (query)=> {
    setquery(query)
    setTimeout(() => {
      childRef.current.search()
    }, query);
  }
  return <div className="App">
    <Nav handlesearch={handlesearch}
    setisshow={setisshow}
    />
    <Popular isshow={isshow}/>
  <Body 
  ref={childRef}
  query1={query}
  isshow={isshow}
  />
  
  </div>;
}

export default App;
