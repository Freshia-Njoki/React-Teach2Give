import ProfileCard from './components/profileCard'
import avatar from './assets/WhatsApp Image 2023-10-03 at 14.17.26.jpg'
import avatar2 from './assets/WhatsApp Image 2023-10-03 at 14.18.08.jpg'
import avatar3 from './assets/WhatsApp Image 2023-10-03 at 14.18.35.jpg'
import avatar4 from './assets/day at the jitu.jpg'
import './App.css'

function App() {
  const person = [
    {
      name: "Freshia",
    age: 23,
    bio: "software developer",
    profilePicture : avatar
    },
    {
      name: "Charity",
      age: 23,
      bio: "Project manager",
      profilePicture : avatar2
    },
    {
      name: "Grace",
    age: 24,
    bio: "Product design",
    profilePicture : avatar3
    },
    {
      name: "Ruitha",
      age: 30,
      bio: "DataScientist",
      profilePicture : avatar4
      }
    
  ]

  return (
    <div className='app'>
   {
    person && person.map((item, index) => {
      return (
        <ProfileCard key={index} name={item.name} age={item.age} profilePicture={item.profilePicture} bio={item.bio}/>
      )
    })
   }
    </div>
  )
}

export default App