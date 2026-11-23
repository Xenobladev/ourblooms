import '../App.css'

function Section1({number, title, image, description}) {
    return(
        <>
        <div className = "section1">
            <p className = "heading1">{number}</p>
            <img src = {image} alt = {title} />
            <div className = "section1-text">
                <p className = "heading1">{title}</p>
                <p className = "paragraph1">{description}</p>
            </div>
            <hr className = "divider"></hr>
        </div>

        </>
    )
}

export default Section1