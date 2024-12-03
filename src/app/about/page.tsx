



import React from 'react'

const About = () => {
  return (
    <div>
        <section
  style={{
    padding: '40px 20px',
    backgroundColor: '#1a202c',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  }}
>
  <div
    style={{
      maxWidth: '800px',
      margin: '0 auto',
    }}
  >
    {/* Image Section */}
    <div
      style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        src="/dpimage.jpg" // Replace this with your image link
        alt="Sana Jameel"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      />
    </div>

    {/* Name Section */}
    <h1
      style={{
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#fbbf24',
      }}
    >
      Noor Fatima
    </h1>

    {/* About Content */}
    <p
      style={{
        fontSize: '18px',
        lineHeight: '1.6',
        marginBottom: '20px',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      My name is Sana Jameel, and I am an Information Technology student with a passion for web development. I specialize in creating visually appealing, responsive websites using HTML, CSS, JavaScript, and TypeScript. My portfolio represents all that I’ve learned and achieved in my journey so far.
    </p>

    {/* Skills Section */}
    <h2
      style={{
        fontSize: '22px',
        fontWeight: '600',
        marginBottom: '10px',
        color: '#ffffff',
      }}
    >
      Skills
    </h2>
    <ul
      style={{
        listStyleType: 'none',
        padding: '0',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '10px',
      }}
    >
      <li
        style={{
          backgroundColor: '#fbbf24',
          color: '#1a202c',
          padding: '10px',
          borderRadius: '8px',
          fontWeight: 'bold',
        }}
      >
        HTML
      </li>
      <li
        style={{
          backgroundColor: '#fbbf24',
          color: '#1a202c',
          padding: '10px',
          borderRadius: '8px',
          fontWeight: 'bold',
        }}
      >
        CSS
      </li>
      <li
        style={{
          backgroundColor: '#fbbf24',
          color: '#1a202c',
          padding: '10px',
          borderRadius: '8px',
          fontWeight: 'bold',
        }}
      >
        JavaScript
      </li>
      <li
        style={{
          backgroundColor: '#fbbf24',
          color: '#1a202c',
          padding: '10px',
          borderRadius: '8px',
          fontWeight: 'bold',
        }}
      >
        TypeScript
      </li>
    </ul>
  </div>
</section>
      
    </div>
  )
}

export default About

