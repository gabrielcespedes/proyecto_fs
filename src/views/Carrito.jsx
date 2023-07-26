import { useContext } from "react";
import MyContext from "../my_context";

const Carrito = () => {
    const {artworks, setArtworks, navTotal, setNavTotal, updatingNavTotal} = useContext(MyContext);

    const calculateTotal = () => {
        setNavTotal(updatingNavTotal);
        return navTotal;
    }
    const button_minus = (id) => {
        const artwork_Id =  artworks.findIndex((element) => element.id == id);
        artworks[artwork_Id].amount = artworks[artwork_Id].amount - 1;
        setArtworks([...artworks]);
    };
    
    const button_mas = (id, ) => {
        const artwork_Id =  artworks.findIndex((element) => element.id == id);
        artworks[artwork_Id].amount = artworks[artwork_Id].amount + 1;
        setArtworks([...artworks]);
    };


    return(
        <div className="container bg-light m-5 p-5">
            <h6 className="text-dark">Detalles del pedido:</h6>
            <div className="container bg-white p-3">
                {artworks.filter((element) => {
                    if (element.amount > 0) {
                        return element;
                    }
                }).map((element, index) => {return(
                <div className="d-flex"><p key={index}>
                    <img src={element.url_image} width="100" alt="imagen obra"></img> {element.title}</p> 
                    <p key={index+10} className="ms-auto">{Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP'}).format(element.price * element.amount)}
                    <button className="btn mx-2" style={{backgroundColor: 'rgba(200, 140, 130, 1)', color: '#fff'}} onClick={() => button_minus(element.id)}>-</button> <strong>    {element.amount}</strong> 
                    <button className="btn mx-2" style={{backgroundColor: 'rgba(130, 160, 200, 1)', color: '#fff'}} onClick={() => button_mas(element.id)}>+</button> </p> 
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