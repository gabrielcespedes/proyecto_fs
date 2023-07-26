import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import MyContext from "../my_context";

import CarouselImages from '../components/Carousel';

const Home = () => {
    const { artworks, setArtworks, setNavTotal, updatingNavTotal } = useContext(MyContext);
    const navigate = useNavigate();

    const Add_Click = (id) => {
        const artwork_id = artworks.findIndex((element) => element.id === id);
        artworks[artwork_id].amount = artworks[artwork_id].amount + 1;
        setArtworks([...artworks]);
        setNavTotal(updatingNavTotal);
    }

    return(
        <div className="pt-5">
            <CarouselImages></CarouselImages>
            <div className="row w-100 mt-5">
                {artworks.map(
                    (element, index) => (
                        <div key={index} className='col-12 col-md-6 col-xl-3'>
                            <div className='card m-auto my-4 tarjeta'>
                                <img onClick={() => navigate(`/artwork/${element.id}`)} src={element.url_image} alt="imagen obra" className="card-img-top"></img>
                                <div className="card-body">
                                    <h5>{element.title}</h5>
                                    <hr></hr>
                                    <p>{element.description}</p>
                                    <div className="d-flex justify-content-around">
                                        <button onClick={() => Add_Click(element.id)} className="btn btn-secondary">Añadir <i class="fa-solid fa-cart-shopping"></i></button>
                                        <button className="btn" >Value: ${element.price}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
                }
            </div>
        </div>
    )

}
export default Home;