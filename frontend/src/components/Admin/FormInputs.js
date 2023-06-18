export default function FormInputs({ formData, handleChange }) {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="ownerFName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="ownerFName"
            name="ownerFName"
            value={formData.ownerFName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ownerLName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="ownerLName"
            name="ownerLName"
            value={formData.ownerLName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ownerPhNumber">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="ownerPhNumber"
            name="ownerPhNumber"
            pattern="[0-9]{8}"
            title="Please enter exactly 8 numbers."
            value={formData.ownerPhNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "10px", marginTop: "10px" }}>
          <label htmlFor="ownerImage" style={{ marginBottom: "5px" }}>Profile photo:</label>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="ownerImage"
              name="ownerImage"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="ownerLocation">Your location</label>
          <input
            type="text"
            className="form-control"
            id="ownerLocation"
            name="ownerLocation"
            value={formData.ownerLocation}
            onChange={handleChange}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="ownerDescription">Your Description:</label>
          <textarea
            className="form-control"
            id="ownerDescription"
            name="ownerDescription"
            style={{ height: "150px", resize: "none" }}
            value={formData.ownerDescription}
            onChange={handleChange}
          />
        </div>
      </form>
    );
  }