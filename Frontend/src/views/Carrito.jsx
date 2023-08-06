import { useContext } from "react";
import MyContext from "../my_context";
import { getCart } from '../services/cartService';
import { useEffect } from "react";
import axios from 'axios';


const Carrito = () => {
    const {artworks, setArtworks, navTotal, setNavTotal, updatingNavTotal, user, cartInfo, setCartInfo} = useContext(MyContext);
    const urlServer = "http://localhost:3000";
    const calculateTotal = () => {
        setNavTotal(updatingNavTotal);
        return navTotal;
    }
    const button_minus = async (id) => {
        try {
            const selectedProduct = artworks.filter(e => e.product_id === id);
            const body = {
                "user_id": user.user_id,
                "product_id": selectedProduct[0].product_id
            };
            await axios.put(urlServer+"/cart/sustract", body);
        } catch ({ response: { data: message } }) {
            console.log(message);
        }
    
    };
    
    const button_mas = async (id) => {
        try {
            const selectedProduct = artworks.filter(e => e.product_id === id);
            const body = {
                "user_id": user.user_id,
                "product_id": selectedProduct[0].product_id,
                "price": selectedProduct[0].price
            };
            await axios.post(urlServer+"/cart", body);
        } catch ({ response: { data: message } }) {
            console.log(message);
        }
    };


    useEffect(() => {          
        getCart(user.user_id)
            .then((data) => {
                const cart = data.map((product => ({
                ...product
            })));
            setCartInfo([...cart])
        })
        .catch((error) => console.error('Error al obtener informacion desde servidor.', error)) 
    }, [cartInfo]);


    return(
        <div className="container bg-light m-5 p-5">
            <h6 className="text-dark">Detalles del pedido:</h6>
            <div className="container bg-white p-3">
                {cartInfo.map((element, index) => {return(
                <div className="d-flex"><p key={index}>
                    <img src={element.url_image} width="100" alt="imagen obra"></img> {element.title}</p> 
                    <p key={index+10} className="ms-auto">{Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(element.price * element.quantity)}
                    <button className="btn mx-2" style={{backgroundColor: 'rgba(200, 140, 130, 1)', color: '#fff'}} onClick={() => button_minus(element.product_id)}>-</button> <strong>    {element.quantity}</strong> 
                    <button className="btn mx-2" style={{backgroundColor: 'rgba(130, 160, 200, 1)', color: '#fff'}} onClick={() => button_mas(element.product_id)}>+</button> </p> 
                    <hr></hr></div> )})}
                    <div className="text-end">
                        <h3 className="text-dark">Total: {Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(calculateTotal())}                                      
                        </h3>
                        <button className="btn btn-dark">Ir a Pagar</button>
                    </div>                
            </div>
        </div>
    )
}

export default Carrito;