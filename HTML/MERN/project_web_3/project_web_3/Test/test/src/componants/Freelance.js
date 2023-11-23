import React from 'react'
import './style.css'
import './responsive.css'
import './bootstrap.css'

const Freelance = () => {
    return (
        <div>

            <section className="freelance_section ">
                <div id="accordion">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 offset-md-1">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            Work Freelaner Has Done
                                        </h2>
                                    </div>
                                    <div className="tab_container">
                                        <div className="t-link-box" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <div className="img-box">
                                                <img src="images/f1.png" alt />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    $250 Million
                                                </h5>
                                                <h3>
                                                    Paid to Freelancers
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <div className="img-box">
                                                <img src="images/f2.png" alt />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    2 Million
                                                </h5>
                                                <h3>
                                                    Paid Invoices
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <div className="img-box">
                                                <img src="images/f3.png" alt />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    700,000
                                                </h5>
                                                <h3>
                                                    Worldwide Freelancer
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="t-link-box collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <div className="img-box">
                                                <img src="images/f4.png" alt />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    98%
                                                </h5>
                                                <h3>
                                                    Customer <br />
                                                    Satisfaction Rate
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt />
                                    </div>
                                </div>
                                <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt />
                                    </div>
                                </div>
                                <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt />
                                    </div>
                                </div>
                                <div className="collapse" id="collapseFour" aria-labelledby="headingfour" data-parent="#accordion">
                                    <div className="img-box">
                                        <img src="images/freelance-img.jpg" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default Freelance
