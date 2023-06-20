export default function FormInputs({ formData, handleChange }) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
        </div>


        <div className="form-group" style={{ marginBottom: "10px", marginTop: "10px" }}>
          <label htmlFor="ownerImage" style={{ marginBottom: "5px" }}>Profile photo:</label>
          <div className="custom-file">     
              <div class="mb-3">
               
               <input  type="file" class="form-control" id="image"  name="image" value={formData.image} onChange={handleChange}/>  
                </div>

          </div>
        </div>
      </form>
    );
  }