export default function FormInputsPR({ formData, handleChange }) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="craftTitle">Craft Title</label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            name="craftTitle"
            value={formData.craftTitle}
            onChange={handleChange}
          />
        </div>



    <div className="form-group" style={{ marginBottom: "20px" }}>
   <label htmlFor="craftDescription">Your Description of your craft:</label>
   <textarea
     className="form-control"
     id="craftDescription"
     name="craftDescription"
     style={{ height: "150px", resize: "none" }}
     value={formData.craftDescription}
     onChange={handleChange}
   />
 </div>
      </form>
    );
  }