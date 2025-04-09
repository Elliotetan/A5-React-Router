import './Hero.css'

function Hero() {

    return (
        <div className="hero">
        <div className="heroInput">
            <div className="searchBar">
            <input type="number" value={sideB} placeholder='Search Films. . .' onChange={(event) => setC(Number(event.target.value))} required />
            </div>
            <button className="searchButton">Search</button>

        </div>
    </div>
    )
}

export default Hero;