import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import MyContext from "../my_context";

import CarouselImages from '../components/Carousel';

import Heart from '../components/Heart';

const Home = () => {
    const { artworks, setArtworks, setNavTotal, updatingNavTotal, artistsInfo, setArtistsInfo, user} = useContext(MyContext);
    const navigate = useNavigate();

    const Add_Click = (id) => {
        const artwork_index = artworks.findIndex((element) => element.id === id);
        artworks[artwork_index].amount = artworks[artwork_index].amount + 1;
        setArtworks([...artworks]);
        setNavTotal(updatingNavTotal);
    }

    const Heart_Click = (id, user_id) => {
        const img_index = artworks.findIndex((img) => img.id == id);
        const artist_index = artistsInfo.findIndex((e) => e.user_id == user_id);        
        const favoritos = artistsInfo[artist_index].favorites;
        const imageToRemoveIndex = favoritos.indexOf(id);

        if (imageToRemoveIndex == -1) {
            artistsInfo[artist_index].favorites.push(id);
            setArtistsInfo([...artistsInfo]);
        } else {
            artistsInfo[artist_index].favorites.splice(imageToRemoveIndex, 1);
        }
        
        console.log(artistsInfo);

        artworks[img_index].liked = !artworks[img_index].liked;
        setArtworks([...artworks]);
    }

    const Evaluate_Heart = (id, user_id) => {
        const artist_index = artistsInfo.findIndex((e) => e.user_id == user_id);        
        const favoritos = artistsInfo[artist_index].favorites;
        if (favoritos.includes(id)) {
            return true;
        } else {
            return false;
        }   
    }

    return(
        <div className="pt-5">
            <CarouselImages></CarouselImages>
            <div className="row w-100 mt-5">
                {artworks.map(
                    (element, index) => (
                        <div key={index} className='col-12 col-md-6 col-xl-3'>
                            <div className='card m-auto my-4 tarjeta'>
                                {/* <img onClick={() => navigate(`/artwork/${element.id}`)} src={element.url_image} alt="imagen obra" className="card-img-top"></img> */}
                                <div className="foto" style={{backgroundImage: `url(${element.url_image})`}}>
                                    {user != null && <Heart filled={Evaluate_Heart(element.id, user.user_id)} onClick={() => Heart_Click(element.id, user.user_id)}></Heart>
                                    }                                    
                                </div>                                
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