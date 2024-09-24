import './App.css'

function App() {
  
  function color(change){
    document.body.style.backgroundColor = change;
  }

  return (
    <div style={{minHeight:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'> 
        <div className='divStyle'>
          <h1 className='text-center fw-bold'>Background Color Change</h1>
          <div className='mt-3'>
              <button className="redBtn" onClick={() => color('red')}>Red</button>
              <button className="blueBtn" onClick={() => color('blue')}>Blue</button>
              <button className="greenBtn" onClick={() => color('green')}>Green</button>
              <button className="orangebtn" onClick={() => color('Orange')}>Orange</button>
              <button className="purpleBtn" onClick={() => color('purple')}>Purple</button>  
              <button className="blackBtn" onClick={() => color('black')}>Black</button>
          </div>
        </div>
    </div>
  )
}

export default App
