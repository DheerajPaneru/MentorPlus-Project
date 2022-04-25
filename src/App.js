
import React from 'react'
import'./App.css'
const App = () => {
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    < img src="https://mentorplus.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.0db42e3e.svg&w=384&q=75" alt=" "/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Plan&Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">FAQ's</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Contact us</a>
        </li>
<div className='sign'>
        <button type="button" className="ghy">login</button>
        <br/>
        <button type="button" className="ghy">signup</button>
        </div>
      </ul>
    </div>
  </div>
</nav>
<hr></hr>
      </>
    </div>
  )
}

export default App