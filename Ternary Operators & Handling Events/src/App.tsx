import './App.css'

function App() {
  const handleClick =(msg:string) => {
    alert(msg)
  }
  const handlesubmit = (e:any) => {
    e.preventDefault()
    alert("submitted")
  }
  const seeDate = () => {
    alert (Date())
  }
  return (
    <>
    {/* <button onClick={() => handleClick("clicked")}>click me</button> */}

    {/* <form action="" onSubmit={handlesubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name='name' placeholder='enter your name'/>
      <button type='submit'>submit</button>
    </form> */}

    {/* <div onScroll={() => alert("scrolled")} style={{border: "3px solid green", height:"200px", overflow:"scroll"}}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio provident sequi magni animi illum perferendis, vitae officiis quia.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dvident sequi magni animi illum perferendis, vitae officiis quia.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio provident sequi magni animi illum perferendis, vitae officiis quia.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio provident sequi magni animi illum perferendis, vitae officiis quia.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio provident sequi magni animi illum perferendis, vitae officiis quia.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio provident sequi magni animi illum perferendis, vitae officiis quia.
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio provident sequi magni animi illum perferendis, vitae officiis quia.
    </div> */}

    {/* <input type="text" onChange={() => alert("item changed")}/> */}
    {/* <button onKeyDown={() => alert("key pressed down")}>onmouseover</button> */}
    <h3 onMouseOver={() => console.log("hey")}  onMouseOut={() => {console.log("hello")}}>😎</h3>
    <button onClick={seeDate}>click to see time...</button>
    </>
  )
}

export default App
