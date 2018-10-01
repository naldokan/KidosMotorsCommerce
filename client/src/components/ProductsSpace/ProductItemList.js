import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToBasket } from "../../actions";

class ProductItemList extends Component {
  render() {
    return (
      <div className="product-item hover-img">
        <div className="row">
          <div className="col-sm-6 col-md-5 col-lg-4">
            <a  className="product-img">
              <img
                src={`${process.env.PUBLIC_URL}/images/${this.props.product
                  .imageName}`}
                style={{ width: "197.5px", height: "197.5px" }}
                alt=""
              />
            </a>
          </div>
          <div className="col-sm-6 col-md-7 col-lg-8 static-position">
            <div className="product-caption">
              <h4 className="product-name">
                <a>{this.props.product.name}</a>
              </h4>
              <ul className="rating">
                <li className="active">
                  <i className="fa fa-star" />
                </li>
                <li className="active">
                  <i className="fa fa-star" />
                </li>
                <li className="active">
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
              </ul>
              <div className="product-price-group">
                <span className="product-price">${this.props.product.price}</span>
              </div>
              <p className="product-txt">
                Nunc facilisis sagittis ullamcorper. Proin lectus ipsum
              </p>
              <a
                className="ht-btn ht-btn-default"
                onClick={() => {
                  this.props.addToBasket(this.props.product, 1);
                }}
              >
                Add to cart
              </a>
              <ul className="absolute-caption">
                <li>
                  <i className="fa fa-heart-o" />
                </li>
                <li>
                  <i
                    className="fa fa-shopping-basket"
                    onClick={() => {
                      this.props.addToBasket(this.props.product, 1);
                    }}
                  />
                </li>
                <li>
                  <Link to={`/product/:${this.props.product._id}`}>
                    <i className="fa fa-search" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addToBasket })(ProductItemList);
