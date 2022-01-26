import "../styles/Star.scss"



const Star = ({rating}) => {
    const estrellasPintadas = []
    const estrellasGrises = []
    const pintarEstrellas = (rating) => {
        for (let i = 0; i < rating; i++) {
            estrellasPintadas.push(1)
        }
        const cantidadEstrellasGrises = 5-rating
        for (let j = 0; j < cantidadEstrellasGrises; j++) {
            estrellasGrises.push(1)
        }
    }

    pintarEstrellas(rating)

    return (
    <div>
        {estrellasPintadas.map((elemento)=> <span className="fa fa-star checked"></span>)}
        {estrellasGrises.map((elemento)=><span className="fa fa-star"></span>)}
    </div>
       
    )
}

export default Star;