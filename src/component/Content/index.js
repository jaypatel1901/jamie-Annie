import React, { Component } from 'react'
import Images from '../../assets/image/index'
import './index.css'
export default class Content extends Component {
    render() {
        return (
            <div className='content-style'>
                <div className=" ">
                    <div className="card-body">
                        <blockquote className="blockquote text-center">
                            <h3 className="mb-0"><em>Design is coming to grips with one's real lifestyle, one's real place in the world.</em></h3>
                            <h3 className='mb-0'> <em>Rooms should not be put together for show but to nourish one's wellbeing .</em> </h3>
                            <footer className="blockquote-footer"> Albert Hadley </footer>
                        </blockquote>
                        <div class="row" style={{marginInlineStart:'100px'}}>
                            <div className='bottum_img'>
                            <div class="column">
                                <img src={Images.img1} alt="Snow" style={{ width: "80%",height:'95%' }} />
                            </div>
                            <div class="column">
                                <img src={Images.img2} alt="Forest" style={{ width: "80%" }} />
                            </div>
                            <div class="column">
                                <img src={Images.img3} alt="Mountains" style={{ width: "80%" }} />
                            </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
