import React from 'react'
import "../index.css"

const Contact = () => {
  return (
    <div className="cards">
      <div className="container">
        <h1>CONTACT FORM</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="username">Username</label>
            <br />
            <input
              name="username"
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <br />
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <br />
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact