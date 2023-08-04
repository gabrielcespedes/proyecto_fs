import { useContext } from "react";
import { useNavigate } from 'react-router-dom';

import MyContext from "../my_context";

import CarouselImages from '../components/Carousel';

import Heart from '../components/Heart';

const Home = () => {
    const { artworks, setArtworks, setNavTotal, updatingNavTotal, user, usersInfo, setUsersInfo} = useContext(MyContext);
    const navigate = useNavigate();

    const Add_Click = (id) => {
        const artwork_index = artworks.findIndex((element) => element.product_id === id);
        artworks[artwork_index].amount = artworks[artwork_index].amount + 1;
        setArtworks([...artworks]);
        setNavTotal(updatingNavTotal);
    }

    const Heart_Click = (id, user_id) => {
        const usersInfo_index = usersInfo.findIndex((e) => e.user_id == user_id);        
        const favoritos = usersInfo[usersInfo_index].favorites;
        const imageToRemoveIndex = favoritos.indexOf(id);

        if (imageToRemoveIndex == -1) {
            usersInfo[usersInfo_index].favorites.push(id);
            setUsersInfo([...usersInfo]);
        } else {
            usersInfo[usersInfo_index].favorites.splice(imageToRemoveIndex, 1);
            setUsersInfo([...usersInfo]);
        }       
    }

    const Evaluate_Heart = (id, user_id) => {
        const usersInfo_index = usersInfo.findIndex((e) => e.user_id == user_id);        
        const favoritos = usersInfo[usersInfo_index].favorites;
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
                                <div className="foto" style={{backgroundImage: `url(${element.url_image})`}} onClick={() => navigate(`/artwork/${element.product_id}`)} >                                                                     
                                </div>                                
                                <div className="card-body">
                                    <h5 className="d-flex justify-content-between">{element.title} {user != null && <Heart filled={Evaluate_Heart(element.product_id, user.user_id)} onClick={() => Heart_Click(element.product_id, user.user_id)}></Heart>
                                    }   </h5>
                                    <hr></hr>
                                    <p>{element.description}</p>
                                    <div className="d-flex justify-content-around">
                                        <button onClick={() => Add_Click(element.product_id)} className="btn btn-secondary">Añadir <i class="fa-solid fa-cart-shopping"></i></button>
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