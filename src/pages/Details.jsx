import { useState } from "react";
import { useEffect } from "react"; 
import { useParams } from "react-router-dom";

const Details = () =>{
    const { name } = useParams();
    const [producto, setProducto] = useState('');
    useEffect(() => {
        const arrayZapatillas = [
            id=1,
            marca='Kyrie Irving',
            estado='Nueva',
            precio="1300$",
            img={img-kyrie}]

        const arrayCamisetas = [
            id=1,
            marca = "Jordan",
            estado="Usada",
            precio="2300$"
            img={img-jordan}
        ]
    }, [name]);
 
    return(
        <h1>Detalle de producto {name}</h1>
    )
}

export default Details;