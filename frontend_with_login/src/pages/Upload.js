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
      navigate("/ourstore");
    }, 2000);
  };

  return (
    
     <div className="px-4 my-12">
        <section style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h2 className="mb-8 text-3xl font-bold">Add Goods to the LuxeMART</h2>
          
        </section>

        <div style={{ display: 'flex', justifyContent: 'left', marginTop: '30px' }}>
          <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0)' }}>
            <form onSubmit={handleGoodsSubmit} className="rounded-lg bg-gray-100 p-6" style={{ textAlign: 'left' }}>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-4">
                  <label htmlFor="goodsImageURL" className="block text-gray-700 font-bold mb-2">
                    Goods Image URL
                  </label>
                  <input
                    id="goodsImageURL"
                    name="goodsImageURL"
                    placeholder="Goods image URL"
                    required
                    type="text"
                    value={goodsImageURL}
                    onChange={(e) => setGoodsImageURL(e.target.value)}
                    className="rounded border-gray-400 border px-3 py-2 w-full"
                    style={{marginLeft:'10px'}}
                  />
                </div>
                <div className="w-full lg:w-1/2 px-4 mb-4" >
                  <label htmlFor="inputState" className="block text-gray-700 font-bold mb-2">
                    Goods Category
                  </label>
                  <select
                    id="inputState"
                    name="selectedCategory"
                    className="w-full rounded border-gray-400 border px-3 py-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{marginLeft:'20px'}}
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Fresh fruits">Fresh fruits</option>
                    <option value="Water and drinks">Water and drinks</option>
                  </select>
                </div>
                <div className="w-full lg:w-1/2 px-4 mb-4">
                  <label htmlFor="goodsPrice" className="block text-gray-700 font-bold mb-2">
                    Goods Price
                  </label>
                  <input
                    id="goodsPrice"
                    name="goodsPrice"
                    placeholder="Goods price"
                    required
                    type="text"
                    value={goodsPrice}
                    onChange={(e) => setGoodsPrice(e.target.value)}
                    className="rounded border-gray-400 border px-3 py-2 w-full"
                    style={{marginLeft:'40px'}}
                  />
                </div>
                <div className="w-full lg:w-1/2 px-4 mb-4">
                  <label htmlFor="goodsDiscount" className="block text-gray-700 font-bold mb-2">
                    Goods Discount
                  </label>
                  <input
                    id="goodsDiscount"
                    name="goodsDiscount"
                    placeholder="Goods discount"
                    required
                    type="text"
                    value={goodsDiscount}
                    onChange={(e) => setGoodsDiscount(e.target.value)}
                    className="rounded border-gray-400 border px-3 py-2 w-full"
                    style={{marginLeft:'20px'}}
                  />
                </div>
              </div>

              {isGoodsAdded && (
                <div className="text-green-600 font-bold mt-2">
                  Goods added successfully! Redirecting to shop...
                </div>
              )}

              <button
                style={{ marginTop: "40px" }}
                type="submit"
                className="btn btn-outline-success"
                disabled={isGoodsAdded}
              >
                {isGoodsAdded ? "Adding Goods..." : "Add Goods"}
              </button>
            </form>
          </div>
        </div>
      </div>
  
  );
};

export default Upload;
