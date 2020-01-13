import React from "react";

const Form = ({ client, onChange, onSubmit, button, title }) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    address,
    city,
    state,
    zip_code
  } = client;

  return (
    <div className="mb-5 mt-5">
      <h1>{title}</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-control-label" htmlFor="inputFirstName">
            First Name
          </label>
          <input
            type="text"
            value={first_name}
            onChange={onChange}
            name="first_name"
            className="form-control"
            id="inputInvalid"
          ></input>
          {/* <div className="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div> */}
        </div>
        <div className="form-group">
          <label className="form-control-label" htmlFor="inputLastName">
            Last Name
          </label>
          <input
            type="text"
            value={last_name}
            onChange={onChange}
            name="last_name"
            className="form-control"
            id="inputInvalid"
          ></input>
          {/* <div className="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div> */}
        </div>
        <div className="form-group">
          <label className="form-control-label" htmlFor="inputEmail">
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={onChange}
            name="email"
            className="form-control"
            id="inputInvalid"
          ></input>
          {/* <div className="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div> */}
        </div>
        <div className="form-group">
          <label className="form-control-label" htmlFor="inputPhone">
            Phone
          </label>
          <input
            type="text"
            value={phone}
            onChange={onChange}
            name="phone"
            className="form-control"
            id="inputInvalid"
          ></input>
          {/* <div className="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div> */}
        </div>
        <div className="form-group">
          <label className="form-control-label" htmlFor="inputAddress">
            Address
          </label>
          <input
            type="text"
            value={address}
            onChange={onChange}
            name="address"
            className="form-control"
            id="inputInvalid"
          ></input>
          {/* <div className="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div> */}
        </div>
        <div className="form-group">
          <label className="form-control-label" htmlFor="inputCity">
            City
          </label>
          <input
            type="text"
            value={city}
            onChange={onChange}
            name="city"
            className="form-control"
            id="inputInvalid"
          ></input>
          {/* <div className="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div> */}
        </div>
        <div className="form-group">
          <label className="form-control-label" htmlFor="inputState">
            State
          </label>
          <input
            type="text"
            value={state}
            onChange={onChange}
            name="state"
            className="form-control"
            id="inputInvalid"
          ></input>
          {/* <div className="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div> */}
        </div>
        <div className="form-group">
          <label className="form-control-label" htmlFor="inputZipCode">
            Zip Code
          </label>
          <input
            type="text"
            value={zip_code}
            onChange={onChange}
            name="zip_code"
            className="form-control"
            id="inputInvalid"
          ></input>
          {/* <div className="invalid-feedback">
            Sorry, that username's taken. Try another?
          </div> */}
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {button}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
