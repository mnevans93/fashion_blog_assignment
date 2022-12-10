export default function Nav(props) {
    const linksArray = props.linksArr

    return (
        <nav>
            <ul aria-label={props.navType} role="navigation">
                {linksArray.map((link) => {
                    return (
                        <li><a href={link}>{link}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}