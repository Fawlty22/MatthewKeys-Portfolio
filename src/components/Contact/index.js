import React from 'react';

export default function Contact() {
    return (
        <section>
          <h1>Contact me</h1>
          <form className='flex'>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name"  />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" />
            </div>
            {/* {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )} */}
            <button type="submit">Submit</button>
          </form>
        </section>
      );
}
