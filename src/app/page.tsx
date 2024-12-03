'use client'

import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
    
  <div style={{ backgroundColor: "#2d2d2e" }}>
  <header
    style={{
      backgroundColor: "#6b7280",
      color: "white",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "20px",
    }}
  >
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* Logo Section */}
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          textDecoration: "none",
          marginBottom: "10px",
        }}
      >
        <Image
          src="/logo.jpg"
          alt="Sana Jameel Logo"
          width={48}
          height={48}
          style={{ width: "48px", height: "48px", borderRadius: "50%" }}
        />
        <span
          style={{
            marginLeft: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Sana Jameel
        </span>
      </a>

      {/* Navigation Section */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="/"
          style={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          About Us
        </a>
        <a
          href="/contact"
          style={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
        <a
          href="/privacypolicy"
          style={{
            color: "white",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Privacy Policy
        </a>
        
        
      </nav>

      
    </div>
  </header>
</div>
 {/* hero */}
 <section
  style={{
    color: '#d1d5db',
    fontFamily: 'Arial, sans-serif',
    padding: '60px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1a202c',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    {/* Image on the Left */}
    <div
      style={{
        width: '100%',
        maxWidth: '300px',
        marginBottom: '20px',
      }}
    >
      <img
        src="/dpimage.jpg"
        alt="hero"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '50%',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />
    </div>

    {/* Content Section */}
    <div
      style={{
        width: '100%',
        maxWidth: '600px',
        textAlign: 'left',
        margin: '20px 0',
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          fontWeight: 'bold',
          color: '#fbbf24',
          marginBottom: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '8px',
          borderRadius: '8px',
        }}
      >
        Expertise in HTML, CSS, JavaScript, TypeScript
      </h1>
      <h2
        style={{
          fontSize: '24px',
          fontWeight: '800',
          color: '#ffffff',
          backgroundColor: '#fbbf24',
          padding: '8px',
          borderRadius: '8px',
          marginBottom: '16px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        Web Developer | GIAIC Student Quarter 2
      </h2>
      <p
        style={{
          fontSize: '18px',
          lineHeight: '1.6',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '16px',
          borderRadius: '8px',
          color: '#ffffff',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        My name is Sana Jameel, and my portfolio is a representation of all
        that I’ve learned and accomplished as an Information Technology
        student.
      </p>
      <div
        style={{
          marginTop: '20px',
          textAlign: 'left',
        }}
      >
        <button
          style={{
            backgroundColor: '#1e40af',
            color: '#ffffff',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = '#1e3a8a')
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#1e40af')
          }
        >
          Subscribe Now
        </button>
      </div>
    </div>
  </div>
</section>


{/*Blog section */}
<section
  style={{
    background: 'linear-gradient(to right, #2d2d2d, #2d2d2d)',
    color: '#f1f1f1',
    padding: '6rem 0',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1.25rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
    }}
  >
    {/* Card 1 */}
    <div
      style={{
        background: '#1a1a1a',
        border: '1px solid #444',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        flex: '1 1 calc(100% - 1rem)', // Full width for small screens
        maxWidth: 'calc(33.333% - 1rem)', // One-third width for large screens
        padding: '1rem', // Extra padding for smaller screens
      }}
    >
      <Image
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        src="/calculator.jpg"
        alt="Calculator"
        height={200}
        width={200}
      />
      <div style={{ padding: '1rem' }}>
        <h1
          style={{
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
            textAlign: 'center', // Center text for small screens
          }}
        >
          Calculator
        </h1>
        <p
          style={{
            marginBottom: '0.75rem',
            color: '#d1d1d1',
            fontSize: '0.9rem', // Smaller font size for better responsiveness
            textAlign: 'center',
          }}
        >
          A simple CLI-based calculator for basic operations.
        </p>
        <a
          href="#"
          style={{
            color: '#4f83ff',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
          }}
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Card 2 */}
    <div
      style={{
        background: '#1a1a1a',
        border: '1px solid #444',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        flex: '1 1 calc(100% - 1rem)',
        maxWidth: 'calc(33.333% - 1rem)',
        padding: '1rem',
      }}
    >
      <Image
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        src="/currencycountdown.jpg"
        alt="Currency Converter"
        height={200}
        width={200}
      />
      <div style={{ padding: '1rem' }}>
        <h1
          style={{
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
            textAlign: 'center',
          }}
        >
          Currency Converter
        </h1>
        <p
          style={{
            marginBottom: '0.75rem',
            color: '#d1d1d1',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
        >
          Convert currencies using a simple CLI interface.
        </p>
        <a
          href="#"
          style={{
            color: '#4f83ff',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
          }}
        >
          Learn More
        </a>
      </div>
    </div>

    {/* Card 3 */}
    <div
      style={{
        background: '#1a1a1a',
        border: '1px solid #444',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        flex: '1 1 calc(100% - 1rem)',
        maxWidth: 'calc(33.333% - 1rem)',
        padding: '1rem',
      }}
    >
      <Image
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        src="/timerimage.jpg"
        alt="Countdown Timer"
        height={200}
        width={200}
      />
      <div style={{ padding: '1rem' }}>
        <h1
          style={{
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
            textAlign: 'center',
          }}
        >
          Countdown Timer
        </h1>
        <p
          style={{
            marginBottom: '0.75rem',
            color: '#d1d1d1',
            fontSize: '0.9rem',
            textAlign: 'center',
          }}
        >
          Set a timer easily with this CLI tool.
        </p>
        <a
          href="#"
          style={{
            color: '#4f83ff',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center',
          }}
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

{/* our Team */}
<div style={{
        
        
        background: 'linear-gradient(to right, #2d2d2d, #2d2d2d)',
        color: '#f1f1f1',
        padding: '6rem 0',
}
}>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-600" style={{ fontSize: "2rem", fontWeight: "500", color: "#F6E05E" }}>Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold text-gray-500" style={{ color: "#A0AEC0", fontSize: "1rem", fontWeight: "600", marginBottom: "20px" }}>
        Here is My zoom Live class Team Members.
      </p>
    </div>
    <div
      className="team-grid"
      style={{
        
        
        background: 'linear-gradient(to right, #2d2d2d, #2d2d2d)',
        color: '#f1f1f1',
        padding: '6rem 0',
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "16px",
        marginBottom: "24px",
        backgroundColor: "gray-400",
       
      }}
    >
      {/* Team Member 1 */}
      <div className="team-member" style={{
        display: "flex", 
        alignItems: "center", 
        border: "1px solid #E5E5E5", 
        padding: "16px", 
        borderRadius: "8px",
        backgroundColor: "#ffffff"
      }}>
        <img
          alt="team"
          className="team-image"
          src="/catoonimg.jpg"
          style={{
            width: "64px", 
            height: "64px", 
            backgroundColor: "#f7fafc", 
            objectFit: "cover", 
            borderRadius: "50%", 
            marginRight: "16px"
          }}
        />
        <div>
          <h2 className="team-name" style={{
            color: "#F6E05E", 
            fontSize: "18px", 
            fontWeight: "500"
          }}>Pashmeen Zia</h2>
          <p className="team-role" style={{
            color: "#A0AEC0", 
            fontSize: "14px"
          }}>UI Designer</p>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="team-member" style={{
        display: "flex", 
        alignItems: "center", 
        border: "1px solid #E5E5E5", 
        padding: "16px", 
        borderRadius: "8px",
        backgroundColor: "#ffffff"
      }}>
        <img
          alt="team"
          className="team-image"
          src="/boycartoon.jpg"
          style={{
            width: "64px", 
            height: "64px", 
            backgroundColor: "#f7fafc", 
            objectFit: "cover", 
            borderRadius: "50%", 
            marginRight: "16px"
          }}
        />
        <div>
          <h2 className="team-name" style={{
            color: "#F6E05E", 
            fontSize: "18px", 
            fontWeight: "500"
          }}>Abdullah Kashif</h2>
          <p className="team-role" style={{
            color: "#A0AEC0", 
            fontSize: "14px"
          }}>Developer</p>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="team-member" style={{
        display: "flex", 
        alignItems: "center", 
        border: "1px solid #E5E5E5", 
        padding: "16px", 
        borderRadius: "8px",
        backgroundColor: "#ffffff"
      }}>
        <img
          alt="team"
          className="team-image"
          src="/catoonimg.jpg"
          style={{
            width: "64px", 
            height: "64px", 
            backgroundColor: "#f7fafc", 
            objectFit: "cover", 
            borderRadius: "50%", 
            marginRight: "16px"
          }}
        />
        <div>
          <h2 className="team-name" style={{
            color: "#F6E05E", 
            fontSize: "18px", 
            fontWeight: "500"
          }}>Hafsa Kamali</h2>
          <p className="team-role" style={{
            color: "#A0AEC0", 
            fontSize: "14px"
          }}>Developer</p>
        </div>
      </div>

      {/* Team Member 4 */}
      <div className="team-member" style={{
        display: "flex", 
        alignItems: "center", 
        border: "1px solid #E5E5E5", 
        padding: "16px", 
        borderRadius: "8px",
        backgroundColor: "#ffffff"
      }}>
        <img
          alt="team"
          className="team-image"
          src="/boycartoon.jpg"
          style={{
            width: "64px", 
            height: "64px", 
            backgroundColor: "#f7fafc", 
            objectFit: "cover", 
            borderRadius: "50%", 
            marginRight: "16px"
          }}
        />
        <div>
          <h2 className="team-name" style={{
            color: "#F6E05E", 
            fontSize: "18px", 
            fontWeight: "500"
          }}>Uzair Khijli</h2>
          <p className="team-role" style={{
            color: "#A0AEC0", 
            fontSize: "14px"
          }}>DevOps</p>
        </div>
      </div>

      {/* Team Member 5 */}
      <div className="team-member" style={{
        display: "flex", 
        alignItems: "center", 
        border: "1px solid #E5E5E5", 
        padding: "16px", 
        borderRadius: "8px",
        backgroundColor: "#ffffff"
      }}>
        <img
          alt="team"
          className="team-image"
          src="/catoonimg.jpg"
          style={{
            width: "64px", 
            height: "64px", 
            backgroundColor: "#f7fafc", 
            objectFit: "cover", 
            borderRadius: "50%", 
            marginRight: "16px"
          }}
        />
        <div>
          <h2 className="team-name" style={{
            color: "#F6E05E", 
            fontSize: "18px", 
            fontWeight: "500"
          }}>Iqra Ikram</h2>
          <p className="team-role" style={{
            color: "#A0AEC0", 
            fontSize: "14px"
          }}>Software Engineer</p>
        </div>
      </div>

      {/* Team Member 6 */}
      <div className="team-member" style={{
        display: "flex", 
        alignItems: "center", 
        border: "1px solid #E5E5E5", 
        padding: "16px", 
        borderRadius: "8px",
        backgroundColor: "#ffffff"
      }}>
        <img
          alt="team"
          className="team-image"
          src="/catoonimg.jpg"
          style={{
            width: "64px", 
            height: "64px", 
            backgroundColor: "#f7fafc", 
            objectFit: "cover", 
            borderRadius: "50%", 
            marginRight: "16px"
          }}
        />
        <div>
          <h2 className="team-name" style={{
            color: "#F6E05E", 
            fontSize: "18px", 
            fontWeight: "500"
          }}>Rija Zeeshan</h2>
          <p className="team-role" style={{
            color: "#A0AEC0", 
            fontSize: "14px"
          }}>DevOps</p>
        </div>
      </div>

      {/* Team Member 7 */}
      <div className="team-member" style={{
        display: "flex", 
        alignItems: "center", 
        border: "1px solid #E5E5E5", 
        padding: "16px", 
        borderRadius: "8px",
        backgroundColor: "#ffffff"
      }}>
        <img
          alt="team"
          className="team-image"
          src="/catoonimg.jpg"
          style={{
            width: "64px", 
            height: "64px", 
            backgroundColor: "#f7fafc", 
            objectFit: "cover", 
            borderRadius: "50%", 
            marginRight: "16px"
          }}
        />
        <div>
          <h2 className="team-name" style={{
            color: "#F6E05E", 
            fontSize: "18px", 
            fontWeight: "500"
          }}>Areeba Khijli</h2>
          <p className="team-role" style={{
            color: "#A0AEC0", 
            fontSize: "14px"
          }}>Software Engineer</p>
        </div>
</div>
</div>

</div>
</section>
</div>


{/* contact us */}

<section className="relative text-gray-300 body-font">
  <div
    className="absolute inset-0 bg-gray-300"
    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#E5E7EB' }}
  >
    <iframe
      width="100%"
      height="100%"
      title="map"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      style={{
        width: '100%',
        height: '100%',
        border: 'none'
      }}
    />
  </div>
  <div
    className="container px-5 py-12 mx-auto flex bg-yellow-600"
    style={{
      display: 'flex',
      flexDirection: 'row',
      padding: '3rem 0',
      backgroundColor: '#F59E0B',
      justifyContent: 'center'
    }}
  >
    <div
      className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      style={{
        width: '100%',
        maxWidth: '500px',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: '2rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}
    >
      <h2
        className="text-gray-900 text-lg mb-1 font-medium title-font"
        style={{
          color: '#1F2937',
          fontSize: '24px',
          fontWeight: '500',
          marginBottom: '1rem'
        }}
      >
        Feedback
      </h2>
      <p
        className="leading-relaxed mb-5 text-gray-600"
        style={{
          fontSize: '16px',
          color: '#4B5563',
          marginBottom: '1rem'
        }}
      >
        Please fill out this form if you have any queries, complaints, or if you have any messages for us.
      </p>
      <div
        className="relative mb-4"
        style={{
          marginBottom: '1rem'
        }}
      >
        <label
          htmlFor="email"
          className="leading-7 text-sm text-gray-600"
          style={{
            fontSize: '14px',
            color: '#374151',
            marginBottom: '0.5rem',
            display: 'block'
          }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            padding: '10px',
            border: '1px solid #D1D5DB',
            fontSize: '16px',
            color: '#4B5563',
            outline: 'none'
          }}
        />
      </div>
      <div
        className="relative mb-4"
        style={{
          marginBottom: '1rem'
        }}
      >
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-600"
          style={{
            fontSize: '14px',
            color: '#374151',
            marginBottom: '0.5rem',
            display: 'block'
          }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            padding: '10px',
            border: '1px solid #D1D5DB',
            fontSize: '16px',
            color: '#4B5563',
            resize: 'none',
            height: '120px',
            outline: 'none'
          }}
        />
      </div>
      <button
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        style={{
          backgroundColor: '#4F46E5',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: '8px',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
      <p
        className="text-xs text-gray-500 mt-3"
        style={{
          fontSize: '12px',
          color: '#6B7280',
          marginTop: '1rem'
        }}
      >
        Read our Privacy policy for any issues.
      </p>
    </div>
  </div>
</section>
{/*footer*/}
<section>
    <div className=' py-6 text-center bg-accent bg-black'>
       <p className='text-white'> Sana Jameel |All rights reserved 2024.</p>
      
    </div>
</section>

  </div>
  )
}

