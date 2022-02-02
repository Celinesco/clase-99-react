import "../styles/Card.scss"
import Star from "./Star"
import { useState } from "react"
import Modal from "./Modal"



const Card = ({ title, type, price, rating, isAvailable, onSale, img}) => {
    const [cardClicked, setCardClicked] = useState(false)
    const [cardHover, setCardHover] = useState(false);
    
    const handleMouseEnter = () => {
        cardClicked ? setCardHover(false) : setCardHover(true)
    }
    const handleMouseLeave = () => {
        setCardHover(false)
    }

    const cerrarModal = () => {
        setCardClicked(false)
       
    }

    const handleClickModal = () => {
        console.log("handle")
        setCardHover(false)
       setTimeout (()=> {
        setCardClicked(true)
       },650)
            
       
    }
  
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
        className={"card-container " + `${!isAvailable && "no-available"} ${cardHover && isAvailable && "scale-card"}`}>
                <img onClick={handleClickModal} src={img}></img>
                <div className="title-type-star">
                    <div className="space-between">
                        <h2>{title}</h2>
                        {onSale && <span>ON SALE!</span>}
                    </div>
                    <h3>{type}</h3>
                    <div className="stars-container">
                        <Star rating={rating}/>
                    </div>
                </div>
                <div className="price-icon">
                    <p>${price}</p>
                    <button type="button"><i className="fas fa-cart-plus"></i></button>
                </div>
                {cardClicked && <Modal title={title} price={price} cerrarModal={cerrarModal}></Modal>}
        </div>
    )
}

export default Card;


// codigo de la clase 99
// <div className={isAvailable ? "card-container" : "card-container no-available"} >
//    <img src={img}></img>
//    <div className="title-type-star">
//        <div className="space-between">
//            <h2>{title}</h2>
//            {onSale && <span>ON SALE!</span>}
//        </div>
//        <h3>{type}</h3>
//        <div className="stars-container">
//            <Star rating={rating}/>
//        </div>
//    </div>
//    <div className="price-icon">
//        <p>${price}</p>
//        <button type="button"><i className="fas fa-cart-plus"></i></button>
//    </div>

// </div>