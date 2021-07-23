function Cakedetails() {

    return(
        <div className="cake-details" style={{backgroundColor:"#FFEBC9", height:"100vh"}}>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", height: "100%", padding: "40px 0"}}>
                <div className="details-wrapper" style={{width: "50%"}}>
                    <div className="image-wrapper" style={{width: "70%", margin: "auto"}}>
                        <img style={{width: "100%", height: "auto"}} src="https://www.getatoz.com/images/birthday-chocolate-truffle-cake-name.png" />
                    </div>
                    <div className="ingredients-wrapper" style={{margin: "40px"}}>
                        <ul style={{backgroundColor:"#FDF6F0", display: "flex", flexWrap: "wrap"}}>
                            <li style={{width: "40%", margin: "10px", fontSize: "18px"}}>Milk</li>
                            <li style={{width: "40%", margin: "10px", fontSize: "18px"}}>Egg</li>
                            <li style={{width: "40%", margin: "10px", fontSize: "18px"}}>Chocolate</li>
                            <li style={{width: "40%", margin: "10px", fontSize: "18px"}}>Butter</li>
                        </ul>
                    </div>
                </div>
                <div className="details-wrapper" style={{width: "50%", textAlign: "center"}}>
                <h1>Dark Chocolate Cake</h1>
                <form class="rating-widget">
  <input type="checkbox" class="star-input" id="1"/>
  <label class="star-input-label" for="1">1
    <i class="fa fa-star"></i>
    <i class="fa fa-star orange"></i>
  </label>
  <input type="checkbox" class="star-input" id="2"/>
  <label class="star-input-label" for="2">2
    <i class="fa fa-star"></i>
    <i class="fa fa-star orange"></i>
  </label>
  <input type="checkbox" class="star-input" id="3"/>
  <label class="star-input-label" for="3">3
    <i class="fa fa-star"></i>
    <i class="fa fa-star orange"></i>
  </label>
  <input type="checkbox" class="star-input" id="4"/>
  <label class="star-input-label" for="4">4
    <i class="fa fa-star"></i>
    <i class="fa fa-star orange"></i>
  </label>
  <input type="checkbox" class="star-input" id="5"/>
  <label class="star-input-label" for="5">5
    <i class="fa fa-star"></i>
    <i class="fa fa-star orange"></i>
  </label>
  
</form>
<span>4.5</span>
                <div>100 reviews</div>
                <div className="description">
                    <p>Dark chocolate cake for a party of 2 people</p>
                </div>
                <div>
                    <span>Current Price: </span><span>315</span>
                </div>
                <div>
                    <span>Weight: </span><span>0.5 kg</span>
                </div>
                <div>
                    <span>Flavour: </span><span>Chocolate</span>
                </div>
                <div>
                    <span>Occasion: </span><span>Birthday</span>
                </div>

                <div className="cart-button" style={{margin: "40px auto"}}>
                    <button type="submit" className="btn btn-primary">Add to cart</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Cakedetails;