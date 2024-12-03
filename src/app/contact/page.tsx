import React from 'react'

const Contact = () => {
  return (
    <div>
        <section
  style={{
    padding: '40px 20px',
    backgroundColor: '#1a202c',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  }}
>
  {/* Contact Section */}
  <div
    style={{
      maxWidth: '800px',
      margin: '0 auto',
    }}
  >
    <h1
      style={{
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#fbbf24',
      }}
    >
      Contact Me
    </h1>

    {/* Contact Form */}
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Name Input */}
      <label htmlFor="name" style={{ fontWeight: 'bold' }}>
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      />

      {/* Email Input */}
      <label htmlFor="email" style={{ fontWeight: 'bold' }}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      />

      {/* Message Textarea */}
      <label htmlFor="messageTextArea" style={{ fontWeight: 'bold' }}>
        Message:
      </label>
      <textarea
        id="messageTextArea"
        name="messageTextArea"
        placeholder="Write your message"
        rows={5} // Updated with correct number type
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          resize: 'none',
          width: '100%',
        }}
      ></textarea>

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#fbbf24',
          color: '#1a202c',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          width: '100%',
        }}
      >
        Submit
      </button>
    </form>
  </div>
</section>
      
    </div>
  )
}

export default Contact
