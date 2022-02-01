import { useState } from "react"
import "../styles/Modal.scss"

const Modal = ({title, price, cerrarModal}) => {
    const [cantidadDeArticulos, setCantidadDeArticulos] = useState(0)

    const botonMasOnClick = () => {
        setCantidadDeArticulos(cantidadDeArticulos + 1)
    }

    const botonMenosOnclick = () => {
        if (cantidadDeArticulos > 0) {
            setCantidadDeArticulos(cantidadDeArticulos -1)
        }
    }

    return (
        <div className="modal-background">
            <div className="info-modal-container">
                <button className="boton-cerrar" onClick={cerrarModal}>x</button>
                <p>Cuantos {title} deseas agregar a tu carrito de compras</p>
                <div className="contenedor-cantidades">
                    <button onClick={botonMenosOnclick}>-</button>
                    <p>{cantidadDeArticulos}</p>
                    <button onClick={botonMasOnClick}>+</button>
                </div>
                <p>Precio total: {cantidadDeArticulos*price}</p>
            </div>
        </div>
    )
}


export default Modal;