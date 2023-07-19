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
                            <div className='card m-auto my-4'>
                                <img src={element.url_image} alt="imagen obra"></img>
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