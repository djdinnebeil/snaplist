import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import SmallProductTile from '../SmallProductTile';
import './LandingPage.css';
import {useEffect} from "react";
import {fetchAllProducts} from "../../redux/productReducer.js";

export default function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector(state => state.products.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, products.length]);

  const featuredProducts = products.slice(0, 5);

  return (
    <div className="landing-page">
      {/* Header Block */}
      {/*<div className="header-block">*/}
      {/*<div className="header-content">*/}
      {/*<h1 className="kalnia-title">Very merry deals!</h1>*/}
      {/*<p className="subtitle">Celebrate the holidays with handcrafted gifts</p>*/}
      {/*<button onClick={() => navigate('/product')} className="shop-button">Shop deals</button>*/}
      {/*</div>*/}
      {/*<div className="header-image">*/}
      {/*  <img*/}
      {/*    src="https://raw.githubusercontent.com/djdinnebeil/xmas-list-images/refs/heads/main/family-christmas-landing-page.png"*/}
      {/*    alt="Family Christmas"/>*/}
      {/*</div>*/}
      {/*</div>*/}

        {/* General Block */}
        <div className="general-block">
          <h2>Amazing items</h2>
          <div className="product-list">
            {featuredProducts.map(product => (
              <SmallProductTile key={product.id} product={product}/>
            ))}
          </div>
          <button onClick={() => navigate('/product')} className="shop-button">See All Products</button>
        </div>

            {/* Introduction Block */}
        <div className="info-block">
          <h2>What is SnapList?</h2>
          <h3>Read our mission</h3>
          <div className="info-sections">
            <div className="info-item">
              <h4>An online marketplace</h4>
              <p>SnapList is an online marketplace, where you can post unneeded gift items for sale.</p>
            </div>
            <div className="info-item">
              <h4>Oh snap, the deals</h4>
              <p>Because these are gift items that others do not need, you can often find items at a deep discount.</p>
            </div>
            <div className="info-item">
              <h4>Buyer protection</h4>
              <p>If an item does not arrive, SnapList can investigate and get you a refund.</p>
            </div>
          </div>
        </div>

        {/* Information Section Block */}
        <div className="info-block">
          <div className="help-center">
            <div className="help-text">Have a question? Well, we got some answers</div>
            <button onClick={() => window.open("https://github.com/jivanb7/mod-6-project/wiki", "_blank")}
                    className="shop-button">
              Go to Help Center
            </button>
          </div>
        </div>

    </div>
      );
      }
