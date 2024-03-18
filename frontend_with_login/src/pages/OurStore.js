import React, { useEffect, useReducer,useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Header from '../components/Layout/Header';
import { sample_products_Biscuit, sample_tags } from './data';
import Thambnails from '../components/Thumbnails/Thambnails';
import { useParams } from 'react-router-dom';
import Search1 from '../components/Search/Search';
import Tags from '../components/Tags/Tags';

export const getAll = async () => sample_products_Biscuit;
export const search = async searchTerm =>
    sample_products_Biscuit.filter(items =>
        items.name.toLowerCase().includes(searchTerm.toLowerCase()));

export const getAllTags = async () => sample_tags;
export const getAllByTag = async tag =>{
    if (tag === 'All') return getAll();
    return sample_products_Biscuit.filter(item => item.tags?.includes(tag));
};

export const getById = async productId =>
  sample_products_Biscuit.find(item => item.id === productId);

const initialState = { products: [],tags: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case 'Product_Loaded':
            return { ...state, products: action.payload };
        case 'TAGS_LOADED':
            return { ...state, tags: action.payload };   
        default:
            return state;
    }
};

const OurStore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products,tags } = state;
    const [sortBy, setSortBy] = useState('best-selling');
    const { searchTerm, tag } = useParams();
    useEffect(() => {
        getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));
        const loadproducts = 
        tag? getAllByTag(tag)
        :searchTerm 
        ? search(searchTerm) 
        : getAll();

        loadproducts.then(products => dispatch({ type: 'Product_Loaded', payload: products }))
    }, [searchTerm,tag]);

    useEffect(() => {
        const sortedProducts = [...products].sort((a, b) => {
            switch (sortBy) {
                case 'title-ascending':
                    return a.name.localeCompare(b.name);
                case 'title-descending':
                    return b.name.localeCompare(a.name);
                case 'price-ascending':
                    return a.price - b.price;
                case 'price-descending':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });

        dispatch({ type: 'Product_Loaded', payload: sortedProducts });
    }, [sortBy, products]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <>
            <Header />

            <BreadCrumb title="Our Store" />
            <Search1 />
           
            <div className='store-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Shop By Category</h3>
                                <div className='d-flex gap-1 form-check-label' >
                                <Tags tags={tags}/>
                                </div>
                            </div>
                            <div>
                                <div className='filter-card mb-3'>
                                    <h3 className='filter-title'>Filter By</h3>

                                    <h5 className='sub-title'>Availablity</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id=""
                                            />
                                            <label
                                                className="form-check-label" htmlFor="">
                                                In Stock(1)
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id=""
                                                checked
                                            />
                                            <label className="form-check-label" htmlFor="">
                                                Out of stock(0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-0' >

                                        <div className="form-floating mb-3">
                                            <input
                                                type=" "
                                                className="form-control custom-input"
                                                id="floatingInput"
                                                placeholder="From"
                                            />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type=" "
                                                className="form-control custom-input"
                                                id="floatingInput1"
                                                placeholder="To"
                                            />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>

                                </div>

                            </div>
                           
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-grid mb-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 d-block' style={{ width: '100px' }}>Sort By:</p>
                                        <select
                                            name=""
                                            className='form-control form-select'
                                            id=""
                                            value={sortBy}
                    onChange={handleSortChange}
                    style={{ fontSize: '14px' }}
                    >
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected='selected'>
                                                Best selling
                                            </option>
                                            <option value='title-ascending'>Name (A-Z)</option>
                                            <option value='title-descending'>Name (Z-A)</option>
                                            <option value='price-ascending'>Price (low to high)</option>
                                            <option value='price-descending'>Price (high to low)</option>
                                        </select>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='products-list pb-5'>
                                <div className='d-flex gap-1 flex-wrap'>
                                    <Thambnails products={products} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurStore