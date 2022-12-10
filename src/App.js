import Header from "./components/Header"
import Article from "./components/Article"
import Footer from "./components/Footer"

export default function App() {
    return(
        <>
            <Header  />
            <main>
                <Article
                    img="blog-image-1.jpg"
                    imgAlt="A woman wearing a bright red/orange dress standing against a blue wall on an empty street"
                    title="On the Street in Brooklyn"
                    dateText="11/12/20"
                    dateTime="2020-11-12"
                    text="" 
                />
                <Article
                    img="blog-image-2.jpg"
                    imgAlt="A trio of well-dressed people are facing mostly towards the camera. Two of them are judging you with eyes that pierce into your very soul. The third on the right looks off into the distance without care for the camera"
                    title="Vintage in Vogue"
                    dateText="11/11/20"
                    dateTime="2020-11-11"
                    text=""
                />
            </main>
            <Footer />
        </>
    )
}