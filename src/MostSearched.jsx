import React, {useState, useEffect} from "react";
import Top from "./Top"
import Bottom from "./Bottom";
import "./MostSearched.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";



function MostSearched() {

    useEffect(()=>{
        document.body.style.height = '190vh';
        document.documentElement.style.height = '100vh';
    

        return () => {
          document.body.style.height = 'auto';
          document.documentElement.style.height = 'auto';
        };

    }, []) 
    
    const [mostSearchedCats, setMostSearchedCats] = useState([]);
    const [loading, setLoading] = useState([
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
    ]);

    const handleImageLoad = (index) => {
        setLoading((prevLoading) => {
            const newLoading = [...prevLoading];
            newLoading[index] = false;
            return newLoading;
        })
    }

    const local = 'http://localhost:3000/most_searched';
    const url = 'https://cat-wiki-backend-d4sb.onrender.com/most_searched'
    useEffect(()=>{
        axios.get(url). 
        then(response => {setMostSearchedCats(response.data);
            console.log("Most searched  most searched", response.data);
        })
        .catch(error => {
            console.error('Error al obtener los gatos más buscados:', error);
          });
    },[])

    return (
        <div className="container" id="container-most-searched">
            <div className="container-1" id="container-1-most-searched">
                <Top></Top>
                <div>
                    <div>   

                    <h1 style={{textAlign:'left', fontWeight:'700', marginTop:'0'}}>Top 10 most searched breeds</h1>
                    </div>
                    
                    <div className="m-searched-container">

                    
                    <div className="most-searched-container">
                    <div className="img-container searched" id="searched">
                        {loading[0] && (<div className="loading-wrapper">
                            <CircularProgress size={80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[0].image_url} 
                        alt=""
                        style = {{display: loading[0] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(0)}  />
                    </div>
                        <div className="most-searched-text-container">
                           <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[0].name}`}> <h2>1. {mostSearchedCats.length > 0 && mostSearchedCats[0].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[0].description} </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        {loading[1] && (<div className="loading-wrapper">
                            <CircularProgress size={80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[1].image_url} 
                        style = {{display: loading[1] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(1)}  
                        alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[1].name}`}> <h2>2. {mostSearchedCats.length > 0 && mostSearchedCats[1].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[1].description} </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >

                        {loading[2] && (<div className="loading-wrapper">
                            <CircularProgress size={80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[2].image_url} 
                        style = {{display: loading[2] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(2)} 
                        alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[2].name}`}> <h2>3. {mostSearchedCats.length > 0 && mostSearchedCats[2].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[2].description} </p>
                        </div>
                    </div>



                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        {loading[3] && (<div className="loading-wrapper">
                            <CircularProgress size = {80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[3].image_url} 
                        style = {{display: loading[3] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(3)} 
                        alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[3].name}`}> <h2>4. {mostSearchedCats.length > 0 && mostSearchedCats[3].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[3].description} </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        {loading[4] && (<div className="loading-wrapper">
                            <CircularProgress size = {80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[4].image_url} 
                        style = {{display: loading[4] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(4)} 
                        alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[4].name}`}> <h2>5. {mostSearchedCats.length > 0 && mostSearchedCats[4].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[4].description}  </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        {loading[5] && (<div className="loading-wrapper">
                            <CircularProgress size = {80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[5].image_url} 
                        style = {{display: loading[5] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(5)} 
                        alt="" />

                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[5].name}`}> <h2>6. {mostSearchedCats.length > 0 && mostSearchedCats[5].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[5].description}  </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        {loading[6] && (<div className="loading-wrapper">
                            <CircularProgress size = {80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[6].image_url} 
                        style = {{display: loading[6] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(6)} 
                        alt="" />
                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[6].name}`}> <h2>7. {mostSearchedCats.length > 0 && mostSearchedCats[6].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[6].description} </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched" >
                        {loading[7] && (<div className="loading-wrapper">
                            <CircularProgress size = {80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[7].image_url} 
                        style = {{display: loading[7] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(7)} 
                        alt="" />
                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[7].name}`}> <h2>8. {mostSearchedCats.length > 0 && mostSearchedCats[7].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[7].description}  </p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched">
                        {loading[8] && (<div className="loading-wrapper">
                            <CircularProgress size = {80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[8].image_url} 
                        style = {{display: loading[8] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(8)} 
                        alt="" />
                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[8].name}`}> <h2>9. {mostSearchedCats.length > 0 && mostSearchedCats[8].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[8].description}</p>
                        </div>
                    </div>


                    <div className="most-searched-container">
                    <div className="img-container searched">
                        {loading[9] && (<div className="loading-wrapper">
                            <CircularProgress size = {80}/>
                        </div>)}
                        <img src={mostSearchedCats.length > 0 && mostSearchedCats[9].image_url} 
                        style = {{display: loading[9] ? 'none' : ''}}
                        onLoad={() => handleImageLoad(9)} 
                        alt="" />
                        
                    </div>
                        <div className="most-searched-text-container">
                        <a href={`/#/cat/${mostSearchedCats.length > 0 && mostSearchedCats[9].name}`}> <h2>10. {mostSearchedCats.length > 0 && mostSearchedCats[9].name}</h2> </a>
                            <p> {mostSearchedCats.length > 0 && mostSearchedCats[9].description}</p>
                        </div>
                    </div>
                    </div>
                </div>



                
                <Bottom></Bottom>
            


            </div>

            

            

            
        </div>
    )
}

export default MostSearched;