import React from 'react'

function Navbar() {
  return (
    <>

    {/* <div>
      <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="#">Navbar</a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameName="navbar-toggler-icon"></span>
    </button>
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="#">Link</a>
        </li>
        <li classNameName="nav-item dropdown">
          <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classNameName="dropdown-menu">
            <li><a classNameName="dropdown-item" href="#">Action</a></li>
            <li><a classNameName="dropdown-item" href="#">Another action</a></li>
            <li><hr classNameName="dropdown-divider" /></li>
            <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Professor Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Research Papers</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Achievements</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Teaching Experience</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Awards</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Collaborations</a></li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <a href="#" className="btn btn-primary ms-3">Admin Panel</a>
        </div>
    </div>
</nav>
    </>
  )
}

export default Navbar
