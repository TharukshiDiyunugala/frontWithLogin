import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [goodsImageURL, setGoodsImageURL] = useState("");
  const [goodsPrice, setGoodsPrice] = useState("");
  const [goodsDiscount, setGoodsDiscount] = useState("");
  const [isGoodsAdded, setIsGoodsAdded] = useState(false);

  const navigate = useNavigate();

  const handleGoodsSubmit = (event) => {
    event.preventDefault();

    setIsGoodsAdded(true);

    setTimeout(() => {
      navigate("/shop");
    }, 2000);
  };

  return (
    <div className='grid place-items-center'>
      <div className='px-4 my-12'>
        <section style={{ marginTop: '40px', marginBottom: '40px' }}>
          <h2 className='mb-8 text-3xl font-bold'>Add Goods to the LuxeMART</h2>
        </section>
  
        <form onSubmit={handleGoodsSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
          <div className='flex gap-8'>
        
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <label htmlFor="goodsImageURL" className="font-bold">
                Goods Image URL
              </label>
            </div>
            <input 
              id="goodsImageURL"
              name='goodsImageURL'
              placeholder="Goods image URL"
              required
              type="text"
              value={goodsImageURL}
              onChange={(e) => setGoodsImageURL(e.target.value)}
            />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <label style={{marginTop:'20px'}}htmlFor="inputState" className="font-bold">
                Goods Category
              </label>
            </div>
            
            <select
              id='inputState'
              name='selectedCategory'
              className='w-full rounded'
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>Select a category</option>
              <option value="Vegitable">Vegitable</option>
              <option value="Fresh fruits">Fresh fruits</option>
              <option value="Water and drinks">Water and drinks</option>
            </select>
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <label style={{marginTop:'20px'}}htmlFor="goodsPrice" className="font-bold">
                Goods Price
              </label>
            </div>
            <input
              id="goodsPrice"
              name='goodsPrice'
              placeholder="Goods price"
              required
              type="text"
              value={goodsPrice}
              onChange={(e) => setGoodsPrice(e.target.value)}
            />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <label style={{marginTop:'20px'}}htmlFor="goodsDiscount" className="font-bold">
                Goods Discount
              </label>
            </div>
            <input
              id="goodsDiscount"
              name='goodsDiscount'
              placeholder="Goods discount"
              required
              type="text"
              value={goodsDiscount}
              onChange={(e) => setGoodsDiscount(e.target.value)}
            />
          </div>
          </div>

{isGoodsAdded && (
  <div className="text-green-600 font-bold mt-2">
    Goods added successfully! Redirecting to shop...
  </div>
)}

<button style={{ marginTop: '40px' }} type="submit" className='btn btn-outline-success' disabled={isGoodsAdded}>
  {isGoodsAdded ? "Adding Goods..." : "Add Goods"}
</button>
</form>
</div>
</div>
);
};

export default Upload;
