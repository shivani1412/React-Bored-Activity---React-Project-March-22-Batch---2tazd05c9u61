import React from 'react'
import '../styles/App.css';

const Loader = () => <div id="loader">Loading...</div>


const App = () => {
  let[activity,setActivity] = useState("");
  let[type,seType] = useState("education");
  let[loading,setLoading] = useState(false);
  async function fetching(){
  setLoading(true);
    const data = await fetch(`http://www.boredapi.com/api/activity?type=${type}`)
    const res = await data.json();
    setActivity(res.activity);
    setLoading(false)
  }
  useEffect(()=>{
  fetching();
  },[type])
  

  return (
    <div id="main">
    {loading?(<Loader />:(<div id ="activity"></div>))}
    <button id = "btn-recreation" onClick = {()=>setType("recreation")}>recreational</button>
 <button id = "btn-education" onClick = {()=>setType("education")}>education</button>
    </div>
  )
}


export default App;
