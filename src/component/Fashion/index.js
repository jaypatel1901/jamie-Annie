import React, { Component } from 'react'
import './index.css'
import Data from './Data'
export default class Fashion extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div className="card content fashion">
                    <div className="card-body">

                        <div className='row' >
                            {Data.map((item, i) => {
                                console.log(item)
                                return (
                                    <div className="row mt-6" style={{marginBottom:"50px"}}>
                                        <div className="col-md-6">
                                            <div className="fashion_img">
                                                <img className="card-img-top img-fluid" src={item.img} alt="Card image cap" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <blockquote className="blockquote ">
                                                <b> <h1 class="card-text">{item.title}</h1></b>
                                                <footer className="blockquote-footer">Posted by Emma On June 11,2019 </footer>
                                                <p className='mb-0'>{item.p}</p>
                                            </blockquote>
                                            <button className='btn btn-dark'>REASSTORY</button>
                                        </div>
                                        <hr></hr>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
