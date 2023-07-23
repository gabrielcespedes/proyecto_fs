import { useContext } from "react";
import MyContext from "../my_context";
import { Carousel, Container, Row, Col } from "react-bootstrap";
const CarouselImages = () => {
    const { artistsInfo } = useContext(MyContext);
    const randomArtists = () => {
        const artistsData = [...artistsInfo]
        const randomChoose = [];
        for (let i = 0; i < artistsInfo.length; i++) {
            const randomIndex = Math.floor(Math.random() * artistsData.length);
            randomChoose.push(artistsData[randomIndex]);
            artistsData.splice(randomIndex, 1);
        }
        return randomChoose;
        }

    
    return(

            <Container>        
                <Row xs={1} md={2} lg={2}>
                    <Col>
                    <Carousel className="fondo">
                    {randomArtists().map(
                        (element, index) => (

                            <Carousel.Item>
                                <img
                                className="d-block w-100 image"
                                key={index}
                                src={element.user_image}
                                height="400"
                                alt="First slide"/>
                            <Carousel.Caption>
                                <h3>{element.username}</h3>
                                <p>{element.description}</p>
                            </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    </Col>
                    <Col>
                    <Carousel className="fondo">
                    {randomArtists().map(
                        (element, index) => (

                            <Carousel.Item>
                                <img
                                className="d-block w-100 image"
                                key={index}
                                src={element.user_image}
                                height="400"
                                alt="First slide"/>
                            <Carousel.Caption>
                                <h3>{element.username}</h3>
                                <p>{element.description}</p>
                            </Carousel.Caption>
                            </Carousel.Item>

                        ))}
                    </Carousel>
                    </Col>
                </Row>
            </Container>

    )
}

export default CarouselImages;

/*

        <div>
            <div className="d-flex">
            <div className="mt-2 w-50 d-inline">
                <div id="carouselExampleIndicators" className="carousel carousel-dark slide">                
                    <div className="carousel-inner">
                    
                {randomArtists().map(
                    (element, index) => (
                        <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            key={index}
                            src={element.user_image}
                            alt="First slide"/>
                        <Carousel.Caption>
                            <h3>{element.username}</h3>
                            <p>{element.description}</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    ))}

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"     data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"     data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <h5 className="text-center">Artistas</h5>
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
                <h5 className="text-center">Ofertas</h5>
            </div>
            </div>
            </div>                        
        </div>*/