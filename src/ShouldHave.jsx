import React, { useState } from "react";
import "./ShouldHave.css";
import CircularProgress from "@mui/material/CircularProgress";

function ShouldHave () {

    const [imageLoading, setImageLoading] = useState({
        image_1: true,
        image_2: true,
        image_3: true
    })

    const handleImageLoad = (imageKey) => {
        setImageLoading(prevState => ({
            ...prevState,
            [imageKey]: false,
        }));
    };

    return <div className="should-have">
        
        <div className="should-have-1"> 
            <div className="mi-rectangulo"></div> 
            <h2 style={{textAlign:"left"}}>Why should you have a cat?</h2> 
            <p style={{textAlign:"justify"}}>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
            <div><a href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,Lundgren%20and%20Robert%20Segal%2C%20M.A.">READ MORE <img src="../images/arrow-right-alt_117700.svg" alt="" /></a> </div>
        </div>
        <div className="should-have-2">
            <div>
                <div className="should-have-image-2" >
                {imageLoading.image_2 && (
                            <div style={{height:'96%', width:'100%', display: 'flex', alignItems: 'center', justifyContent:'center', position: 'absolute'}}>
                                <CircularProgress size={80} />
                            </div>
                        )}
                        <img
                            className="image-2"
                            src="../images/image 2.png"
                            alt=""
                            onLoad={() => handleImageLoad('image_2')}
                            style={{ display: imageLoading.image_2 ? 'none' : '' }}
                        />
                </div>
                <div className="should-have-image-1" style={{display: imageLoading.image_1 ? 'flex' : 'block'}}>
                    {imageLoading.image_1 && (
                        <div style={{height:'100%', width:'70%',display: 'flex', alignItems: 'center', justifyContent:'center', position: 'absolute'}}>
                            <CircularProgress size={80} />
                        </div>
                    )}
                    <img
                        className="image-1"
                        src="../images/image 1.png"
                        alt=""
                        onLoad={() => handleImageLoad('image_1')}
                        style={{ display: imageLoading.image_1 ? 'none' : '' }}
                    />
                </div>
                
                
            </div>
            <div className="should-have-image-3">
            {imageLoading.image_3 && (
                        <div style={{height:'100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <CircularProgress size={80} />
                        </div>
                    )} 
                    <img
                        className="image-3"
                        src="../images/image 3.png"
                        alt=""
                        onLoad={() => handleImageLoad('image_3')}
                        style={{ display: imageLoading.image_3 ? 'none' : '' }}
                    />
            </div>
            
        </div>
    </div>
}

export default ShouldHave;