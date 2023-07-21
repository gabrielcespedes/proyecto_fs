import { useParams } from "react-router-dom";

import { useContext } from "react";
import MyContext from "../my_context";

const Artwork = () => {
    const {id} = useParams();

    const { artworks, setArtworks } = useContext(MyContext);

    const selectedArtwork = artworks[artworks.findIndex((element) => element.id == id)];
    
    console.log(id);
    console.log(artworks);
    console.log(selectedArtwork);

    return(
        <div>            
            <img src={selectedArtwork.url_image}></img>
        </div>
    )
}

export default Artwork;