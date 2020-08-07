import React, { Component } from 'react'
import Images from '../../assets/image/index'
import Data from './Data'
import './index.css'
export default class Recent_Post extends Component {
    render() {
        return (
            <div>
                <div className="card content fashion">
                    <div className="card-body">
                        <h6>RECENT POST</h6>
                        <div className='row' >
                            {Data.map((item, i) => {
                                console.log(item)
                                return (
                                    <div className="row mt-6" style={{ marginBottom: "25px" }}>
                                        <div className="col-md-3">
                                            <div className="fashion_img">
                                                <img className="recent-card-img-top img-fluid" src={item.img} alt="Card image cap" />
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <blockquote className="blockquote ">
                                                <p className='mb-0'>{item.p}</p>

                                                <footer className="blockquote-footer">Posted by Emma On June 11,2019 </footer>
                                            </blockquote>

                                        </div>
                                        <hr></hr>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className=''>
                        <h6>ABOUT ME</h6>
                        <div className="row" style={{ marginBottom: "25px" }}>
                            <div className="col-md-9">
                                <div className="about_img">
                                    <img className="about_img1" src={Images.img13} alt="Card image cap" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="about_img">
                                    <img className="about_img1" src={Images.img14} alt="Card image cap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
