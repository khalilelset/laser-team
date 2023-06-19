export default function FormInputsPR({ formData, handleChange }) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="productTitle">Product Title</label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            name="productTitle"
            value={formData.productTitle}
            onChange={handleChange}
          />
        </div>



    <div className="form-group" style={{ marginBottom: "20px" }}>
   <label htmlFor="productDescription">Your Description:</label>
   <textarea
     className="form-control"
     id="productDescription"
     name="productDescription"
     style={{ height: "150px", resize: "none" }}
     value={formData.productDescription}
     onChange={handleChange}
   />
 </div>
 <div className="form-group" style={{ marginBottom: "20px" }}>
 <select
   name="productCategory"
   id="productCategory"
   className="select input-form-area mt-3 px-2"
   value={formData.productCategory}
   onChange={handleChange}
 >
   <option value="Pride">Pride</option>
   <option value="Cloth">Cloth</option>
   <option value="Soap">Soap</option>
   <option value="Wood">Wood</option>
   <option value="Accessory">Accessory</option>
   <option value="Art">Art</option>
 </select></div>

        
        <div className="form-group">
          <label htmlFor="price">price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productAvailableQuantity">product Available Quantity</label>
          <input
            type="number"
            className="form-control"
            id="productAvailableQuantity"
            name="productAvailableQuantity"
            value={formData.productAvailableQuantity}
            onChange={handleChange}
          />
        </div>
      </form>
    );
  }