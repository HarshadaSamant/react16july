function Ratings(props) {
    return(
        <div>
            <form id="user-rating-form">
                <span className="user-rating">
                    <input type="radio" name="rating" value="5" checked/><span className="star"></span>

                    <input type="radio" name="rating" value="4" checked/><span className="star"></span>

                    <input type="radio" name="rating" value="3" checked/><span className="star"></span>

                    <input type="radio" name="rating" value="2"/><span className="star"></span>

                    <input type="radio" name="rating" value="1"/><span className="star"></span>
                </span>
            </form>
        
        </div>
    )
}

export default Ratings;

