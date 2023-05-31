import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function ProductDetail() {
    const {productId} = useParams();

    const [ListadoProductos, setListadoProductos] = useState([]);

    useEffect (() => {
      fetch("https://646e5db89c677e23218b94aa.mockapi.io/api/v1/productos")
      .then((Listado) => Listado.json())
      .then((Listado) => {
        setListadoProductos(Listado);
      })
    },[]);    

    const thisProduct = ListadoProductos.find(prod => prod.id === productId)

    if(!thisProduct){
        return(
            <h1>NO HAY PRODUCTOS</h1>
        )
    }
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Precio: ${thisProduct.precio}</p>
            <p>Descripcion: {thisProduct.descripcion}</p>
            <p><img src={thisProduct.url} width="100px" height="100px" /></p>
        </div>
    )
}

export default ProductDetail;