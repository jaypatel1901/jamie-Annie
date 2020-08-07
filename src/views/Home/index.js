import React, { Component } from 'react'
// import 'https://fonts.googleapis.com/css?family=Josefin+Sans';
import Content from '../../component/Content/index'
import Header from '../../component/Header/index'
import Fashion from '../../component/Fashion/index'
import Recent_Post from '../../component/RecentPost/index'
import Images from '../../assets/image/index'
import './index.css'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='banner-img'>
                                    <img class="d-block w-100" src={Images.img21} alt="First slide" />

                                </div>
                                <div class="carousel-caption d-none d-md-block">
                                    <h1 className='mb-0'>Fashion & Interior Design</h1>
                                    <h1 className='mb-0'> Are One  & The Same</h1>

                                    <button className='btn btn-dark'>READ STROY</button>                                </div>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={Images.img22} alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={Images.img20} alt="Third slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                < Content />
                <div className='row' style={{ backgroundColor: '#fdfdfd', marginTop: '-25px' }} >
                    <div className='col-md-7'>
                        <Fashion />
                    </div>
                    <div className='col-md-5'>
                        <Recent_Post />
                    </div>
                </div>
                <div className="text-light bg-dark" style={{ marginTop: '-25px', padding: '50px' }}>
                    <div className='row ' >
                        <div className="col-md-6">
                            <div className="kitchen_img">
                                <img className="card-img-top img-fluid" src={Images.img15} alt="Card image cap" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <blockquote className="blockquote ">
                                <b> <h1 class="card-text">Kitchen Reveal! </h1></b>
                                <footer className="blockquote-footer">Posted by Emma On June 11,2019 </footer>
                                <p className='mb-0 far'>You don't realize how much detail and planning goes into every single </p>
                                <p className='mb-0'>corner of room until you build a home! We fianlly put the finishing  </p>
                                <p className='mb-0'>touches on our kitchen and I couldn't</p>
                            </blockquote>
                            <button className='btn btn-light'>REASSTORY</button>
                        </div>
                    </div>
                </div>
                <div className='thought'>
                    <div className="">
                            <blockquote className="blockquote text-center">
                                <h3 className="mb-0"><em>Design is coming to grih6s with one's real lifestyle, one's real place in the world.</em></h3>
                                <h3 className='mb-0'><em> Rooms should not be put together for show but to nourish one's wellbeing .</em> </h3>
                                <footer className="blockquote-footer"> Albert Hadley </footer>
                            </blockquote>
                    </div>
                </div>

                <div className="footer">
                    <div className="row">
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='col-img'>
                                        <img src={Images.img17} alt="Snow" style={{ width: "100%" }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='col-img'>
                                        <img src={Images.img18} alt="Snow" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='col-img'>
                                        <img src={Images.img19} alt="Snow" style={{ width: "100%" }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='col-img'>
                                        <img src={Images.img20} alt="Snow" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className='col-img1'>
                                <img src={Images.img21} alt="Forest" style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='col-img'>
                                        <img src={Images.img22} alt="Snow" style={{ width: "100%" }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='col-img'>
                                        <img src={Images.img23} alt="Forest" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='col-img'>
                                        <img src={Images.img24} alt="Snow" style={{ width: "100%" }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='col-img'>
                                        <img src={Images.img25} alt="Forest" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
