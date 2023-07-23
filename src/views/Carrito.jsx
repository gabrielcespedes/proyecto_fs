import { useContext } from "react";
import MyContext from "../my_context";

const Carrito = () => {
    const {artworks, setArtworks, navTotal, setNavTotal} = useContext(MyContext);

    const calculateTotal = () => {
        let total = 0;
        artworks.forEach((element) => {
            total += element.price * element.amount;
        });
        setNavTotal(total);
        return total;
    }

    const button_minus = (id) => {
        const artwork_Id =  artworks.findIndex((element) => element.id == id);
        artworks[artwork_Id].amount = artworks[artwork_Id].amount - 1;
        setArtworks([...artworks]);
    }

    const button_mas = (id) => {
        const artwork_Id =  artworks.findIndex((element) => element.id == id);
        artworks[artwork_Id].amount = artworks[artwork_Id].amount + 1;
        setArtworks([...artworks]);
    }

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
                    <p key={index+10} className="ms-auto">${element.price * element.amount} 
                    <button className="btn btn-danger mx-2" onClick={() => button_minus(element.id)}>-</button> <strong>    {element.amount}</strong> 
                    <button className="btn btn-primary mx-2" onClick={() => button_mas(element.id)}>+</button> </p> 
                    <hr></hr></div> )})}
                    <div className="text-end">
                        <h3 className="text-dark">Total: ${calculateTotal()}                                        
                        </h3>
                        <button className="btn btn-success">Ir a Pagar</button>
                    </div>                
            </div>
        </div>
    )
}

export default Carrito;