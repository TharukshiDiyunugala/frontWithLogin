import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={`${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
                <Link to=':id' className='product-card position-relative'>
                    <div className='product-image'>
                        <img src="/images/pile-fresh-vegetables.jpg" className='img-fluid' alt='productimage' />
                        <img src="/images/pile-fresh-fruits.jpg" className='img-fluid' alt='productimage' />

                    </div>
                    <div className='product-details'>
                        <h6 className='Name'>Vegitable</h6>
                        <h5 className='product-amount'>250g</h5>
                        <p className='price'>Rs.100.00</p>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
                <Link className='product-card position-relative'>
                    <div className='product-image'>
                        <img src="/images/pile-fresh-vegetables.jpg" className='img-fluid' alt='productimage' />
                        <img src="/images/pile-fresh-fruits.jpg" className='img-fluid' alt='productimage' />

                    </div>
                    <div className='product-details'>
                        <h6 className='Name'>Vegitable</h6>
                        <h5 className='product-amount'>250g</h5>
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}> hyewgggggggggggggggdsbayeyfgddddddddvbxnbznbBdgwewg</p>
                        <p className='price'>Rs.100.00</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard