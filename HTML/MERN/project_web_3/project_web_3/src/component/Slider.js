import React from 'react'
// import '..component/Beverages.css'
import '../component/Slider.css'


const Beverages = () => {
    return (
        <div>

            <section className="awSlider">
                <div className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                        <li data-target=".carousel" data-slide-to={0} className="active" />
                        <li data-target=".carousel" data-slide-to={1} />
                        <li data-target=".carousel" data-slide-to={2} />
                        <li data-target=".carousel" data-slide-to={3} />
                    </ol>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80" />
                            <div className="carousel-caption">Görsel #1</div>
                        </div>
                        <div className="item">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80" />
                            <div className="carousel-caption">Görsel #2</div>
                        </div>
                        <div className="item">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80" />
                            <div className="carousel-caption">Görsel #3</div>
                        </div>
                        <div className="item">
                            <img src="https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80" />
                            <div className="carousel-caption">Görsel #4</div>
                        </div>
                    </div>
                    {/* Controls */}
                    <a className="left carousel-control" href=".carousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
                        <span className="sr-only">Geri</span>
                    </a>
                    <a className="right carousel-control" href=".carousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
                        <span className="sr-only">İleri</span>
                    </a>
                </div>
            </section>


        </div>
    )
}

export default Beverages
