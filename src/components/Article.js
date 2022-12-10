export default function Article(props) {
    const imageLink = require(`../images/${props.img}`)

    return (
        <article>
            <time dateTime={props.dateTime}>{props.dateText}</time>
            <h3>{props.title}</h3>
            <img src={imageLink} alt={props.imgAlt}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero labore? Nihil ipsum, dolore a consequuntur aut reprehenderit ab libero voluptates laudantium eos eaque perferendis ea quod minima consectetur doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero labore? Nihil ipsum, dolore a consequuntur aut reprehenderit ab libero voluptates laudantium eos eaque perferendis ea quod minima consectetur doloremque?</p>
            <div class="continue"><a href="Continues">Continues ...</a></div>
        </article>
    )
}