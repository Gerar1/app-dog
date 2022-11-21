import React from "react";
import useSWR from "swr";


const fetcher = (url) => fetch(url).then((res) => res.json());

function Card({ idDog }) {
    const { data, error } = useSWR(
        "https://api.thedogapi.com/v1/breeds",
        fetcher
    );
    

    if (error) return "un error";
    if (!data) return "...cargando";
    console.log(data);
    console.log(idDog);

    

    function Cards({nameDog, urlDog, temperamentDog, life_spanDog }) {
        return (
            <Cards>
            <div>
                <h2>soy un componente</h2>
                <div style={{ background: "gray", margin: "30px"}}></div>
                <h2>tarjeta perruna</h2>
                <div>
                    <h3>nombre</h3>
                    <p>{nameDog}</p>
                </div>
                <div>
                    <h3>temperamento</h3>
                    <p>{temperamentDog}</p>
                </div>
                <div>
                    <h3>esperanza de vida</h3>
                    <p>{life_spanDog}</p>
                </div>
                <br></br>
                <img src={urlDog} alt="perrito" height="100" width="100" />
                <br></br>

            </div>
            </Cards>
        );
    }


}


export default Card;