import i1 from '../assets/dot.png'

function Button ({buttonName}) {
    return(
        <div className = "btn-yellow">
            <img src = {i1} alt = "dot"/>
            <p>{buttonName}</p>
        </div>
    )
}

export default Button