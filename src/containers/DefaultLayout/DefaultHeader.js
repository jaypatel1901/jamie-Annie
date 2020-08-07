import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import './style.css'
import image from '../../assets/image/index'
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor() {
    super()
  }
  
 
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <div>
        <nav class="navbar navbar-expand-lg md-center ">
          <a class="navbar-brand" ></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse col-8" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">HOME </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">FASHION</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">INTERIOR</a>
              </li>
            </ul>
          </div>
          <div style={{textAlign:"center"}} className='col-8'>
            <h3>
            JAMIE & ANNIE
              </h3> </div>
              <div class="collapse navbar-collapse col-8" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">ABOUT </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CONTACT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SHOP</a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
       
        {/* <AppSidebarToggler className="d-lg-none" display="md" mobile /> */}
        {/* <AppNavbarBrand
          full={{ src: image.logo_main, width: 150, height: 45  , alt: 'CoreUI Logo' }}
          minimized={{ src: image.logo_main, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <div style={{textAlign:"right"}}>
        <button className='btn btn-success pull-right' style={{ textAlign: "right",marginRight:15 }} onClick={this.onClickloguot}>Logout</button>

          </div> */}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
