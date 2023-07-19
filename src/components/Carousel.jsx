const Carousel = () => {
    return(
        <div>
            <div className="d-flex">
            <div className="mt-2 w-50 d-inline">
                <div id="carouselExampleIndicators" className="carousel carousel-dark slide">                
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1682685795463-0674c065f315?ixlib=rb-4.0.3&  ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80"   className="d-block w-100 image" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://plus.unsplash.com/premium_photo-1688431299086-bf835ca28a9d?ixlib=rb-4.0.3&    ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"  className="d-block w-100 image" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1689344682959-d8b85fdab21a?ixlib=rb-4.0.3&  ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"    className="d-block w-100 image" alt="..."/>
                        </div>                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"     data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"     data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <h5 className="text-center">Ofertas</h5>
                </div>
            </div>
            <div className="mt-2 w-50 d-inline">
            <div id="carouselExampleIndicators_2" className="carousel carousel-dark slide">
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1688503677973-0c68fcc15175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80"   className="d-block w-100 image" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1687360440155-81bdb9ecd713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"  className="d-block w-100 image" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1688658108841-89577bba566a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"    className="d-block w-100 image" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators_2"     data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators_2"     data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <h5 className="text-center">Artistas</h5>
            </div>
            </div>
            </div>                        
        </div>
    )
}

export default Carousel;