import React from 'react';

const About = () => {
  document.title = 'Fried Snacks Diner - About';
  const bgImgStyle = {
    background: "url('../../images/about-us.jpg') center center no-repeat",
    height: '100%',
    filter: "blur(.125rem)",
    height: "28rem"
  };

  const textStyle = {
    zIndex: 2,
    fontWeight: "bold",
    fontSize: "5rem",
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: ".3rem 3rem",
    textAlign: "center",
    backgroundColor: "rgba(226, 138, 38, .35)",
    borderRadius: "1.5rem"
  };

  return (
    <div className="container my-2">
      <div style={{ position: "relative" }}>
        <div style={bgImgStyle}></div>
        <div>
          <h1 style={textStyle}>About Us</h1>
        </div>
      </div>
      <div className="my-1">
        <p style={{ width: "50%", margin: "0 auto", fontSize: "1.6rem", textAlign: "center" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quo sit voluptatibus repudiandae tempore iste perspiciatis rerum, quaerat sunt pariatur nihil aliquid nostrum praesentium? Velit minus quia laborum doloremque aliquid itaque tenetur saepe quas molestias voluptatem, esse est eum deleniti illo aut accusantium Temporibus hic non neque quod dolore tenetur cum nesciunt ut, possimus numquam officia architecto fugiat voluptate eligendi provident
        </p>

      </div>
    </div>
  )
}

export default About;
