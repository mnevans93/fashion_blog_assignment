import Nav from "./Nav"

export default function Footer() {
    return (
        <footer>
            <Nav
                navType="Footer Navigation"
                linksArr={
                    [`Home`, `Women's`, `Men's`, `On the Street`, `The Catwalk`, `AdWatch`, `About`, `Tips`]
                }
            />
            <p id="copyright">&copy; 2013 Valet Industries, Inc</p>
        </footer>
    )
}