import "../styles/Card.scss"
import Star from "./Star"



const Card = ({ title, type, price, rating, img }) => {
    return (
        <div className="card-container">
            <img src={img}></img>
            <div className="title-type-star">
                <h2>{title}</h2>
                <h3>{type}</h3>
                <div className="stars-container">
                    <Star rating={rating}/>
                </div>
            </div>
            <div className="price-icon">
                <p>${price}</p>
                <button type="button"><i className="fas fa-cart-plus"></i></button>
            </div>

        </div>
    )
}

export default Card;

