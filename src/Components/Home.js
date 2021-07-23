import Carousel from "./Carousel";
import Card from "./Card";

function Home(props) {
    console.log("Props are: " + props);
    return(
        <div>
            <Carousel />
            <h1 style={{fontSize:"24px", margin:"20px 0"}}>
                Cakes for all occasions
            </h1>
            <Card />
        </div>
    )
}

export default Home;