import { useContext } from "react";

import MyContext from "../my_context";

const Home = () => {
    const { artworks, setArtworks } = useContext(MyContext);

    return(
        <>
            <div className="row">
                {artworks.map(
                    (element, index) => (
                        <div key={index} className='col-12 col-md-6 col-xl-3'>
                            <div className='card m-auto my-4 tarjeta'>
                                <img src={element.url_image} alt="imagen obra" className="card-img-top"></img>
                                <div className="card-body">
                                    <h5>{element.title}</h5>
                                    <hr></hr>
                                    <p>{element.description}</p>
                                    <p className="text-end">Value: {element.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        </>
    )

}



export default Home;