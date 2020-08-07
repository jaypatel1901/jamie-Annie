import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='header'>
          <nav className="navbar navbar-expand-lg ">
            <div className="collapse navbar-collapse col-5 text-right"  id="navbarNav">
            <div className='left-nav float-right '>
              <ul className="navbar-nav d-flex justify-content-between">
                <li className="nav-item ">
                  <a className="nav-link" href="#">HOME </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FASHION</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">INTERIOR</a>
                </li>
              </ul>
            </div>
            </div>
           <div className='col-2'>
           <div style={{ textAlign: "center" }} className=''>
              <h3>JAMIE  &  ANNIE</h3>
            </div>
           </div>
           
            <div className='right-nav' style={{marginInlineStart:'103px'}}>
            <div className="collapse navbar-collapse col-5" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a className="nav-link" href="#">ABOUT </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">SHOP</a>
                </li>
              </ul>
            </div>
            </div>
           
          </nav>
        </div>
      </React.Fragment>
    )
  }
}
