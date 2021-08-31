import React from 'react';
import { Navbar } from './conponents';
import { Dashboard } from './pages';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';




const App =() => {
  const [positive, setPositive]= React.useState('')
  const [negetive, setNegetive]= React.useState('')
  const [balance, setBalance]= React.useState('')

  // const [search, setSearch]=React.useState('')
  //   const [loop, setLoop]=React.useState(table)
  //   const [searchData, setSearchData] =React.useState([])

  // //  console.log(loop)
  //   const searching=()=>{
  //     setSearchData(loop.filter((data)=> data.cate.toLowerCase().include(search.toLowerCase())))
  //   } 
  //   React.useEffect(()=>{
  //     searching()
  //   },{search})

    
  //   const handleSearch =(e)=>{
  //     e.preventDefault()
  //     setSearch(e.target.value)
      


  //   }
  //   console.log(searchData)
  return (
    <Router>
    <Navbar />
    <Dashboard />
    
    <Switch >
      <Route path='/cal' />
    </Switch>
    

    </Router>
  );
}

export default App;
