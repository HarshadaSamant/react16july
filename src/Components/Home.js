import Carousel from "./Carousel";

function Home(props) {
    console.log("Props are: " + props);
    return(
        <div>
            <Carousel />
            <h1>This is Home component</h1>
        </div>
    )
}

export default Home;