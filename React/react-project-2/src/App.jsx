import UserCard from "./components/UserCard"
import './App.css'
import companies from './assets/companies.png'

function App() {
 

  return (
    <div className="container">
      <UserCard name="Rohan " image={companies} style={{"border-radius":"10px"}}/>
     

    </div>
     
  )
}

export default App
