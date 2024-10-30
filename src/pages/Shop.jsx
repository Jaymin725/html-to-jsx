import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch("http://localhost:3000/products");
  const products = await response.json();
  return { products };
}

export default function ShopPage() {
  const { products } = useLoaderData();

  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products.map(({ id, title, price, imgPath }) => (
              <div className="col-12 col-md-4 col-lg-3 mb-5" key={id}>
                <a className="product-item" href="#">
                  <img src={imgPath} className="img-fluid product-thumbnail" />
                  <h3 className="product-title">{title}</h3>
                  <strong className="product-price">${price}</strong>

                  <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
