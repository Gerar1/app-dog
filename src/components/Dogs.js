import React from "react";
import Card from "./Card";
import useSWR from "swr";



const fetcher = (url) => fetch(url).then((res) => res.json());

function Dogs() {
    const { data, error } = useSWR (
        "https://api.thedogapi.com/v1/images/search",
        "https://api.thedogapi.com/v1/breeds",

        fetcher
    );

    if (error) return "un error";
    if (!data) return "...cargando...";
    

    const perroRamdom1 = Math.floor(Math.random() * data.length);
    const perroRamdom2 = Math.floor(Math.random() * data.length);
    

    return (
        <div>
            <div>
                <h3>perrito 1</h3>
                <h3>ID: {data[0].id}</h3>
                <img src={data[0].url} alt="perrito" heigth="100" width="100" />
                <h3>temperamento</h3>
                <Card idDog={data[0].id} />
                <div style={{ alignSelf: "center", margin: "30px" }}></div>
                <button onClick= {() => window.location.reload()}>recargar pagina</button>

                <Card

                nameDog={data[perroRamdom1].name}
                urlDog={data[perroRamdom1].image.url}
                temperamentDog={data[perroRamdom1].temperament}
                life_spanDog={data[perroRamdom1].life_span}
                />

                <Card

                nameDog={data[perroRamdom2].name}
                urlDog={data[perroRamdom2].image.url}
                temperamentDog={data[perroRamdom2].temperament}
                life_spanDog={data[perroRamdom2].life_span}
                />

            </div>
        </div>
    );

    
} 

export default Dogs;