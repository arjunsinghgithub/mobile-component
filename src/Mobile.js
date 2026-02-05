import './Mobile.css'
function Phone (props){
    return(
        <>
            <div id="container">
                <div id="image">
                    <img src={props.src} alt= {props.alt} height="200px" width="160px" alt="mobile-picture"/>
                </div>
                <div id="details">
                    <h1>{props.name}</h1>
                    <ul>
                        <li>{props.feature1}</li>
                        <li>{props.feature2}</li>
                        <li>{props.feature3}</li>
                        <li>{props.feature4}</li>
                        <li>{props.feature5}</li>
                    </ul>
                </div>
                <div id="price-section">
                    <div>
                        <span id="price">&#8377;{props.price} </span>
                        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png" height="20px" alt="flipkart-Assured.png"/>
                    </div>
                    <div><span>Upto <strong>&#8377;{props.offOnExchange}</strong> Off on Exchange</span></div>
                    <div><span><a href="/bank-offer">Bank Offer</a></span></div>
                    
                </div>
            </div>
        </>
    );
}

export default Phone;










