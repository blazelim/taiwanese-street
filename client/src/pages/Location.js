import React from 'react';

const Location = () => {
  document.title = 'Fried Snacks Diner - Location';
  const addressStyle = {
    flex: 1,
    fontSize: "1.1rem",
    marginRight: "1rem"
  };

  const iframeStyle = {
    flex: 2,
    width: "100%",
    height: "30vw"
  };

  return (
    <div className="container">
      <div style={{ display: 'flex' }} className="my-1">
        <div style={addressStyle}>
          <h2>Story</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quo sit voluptatibus repudiandae tempore iste perspiciatis rerum, quaerat sunt pariatur nihil aliquid nostrum praesentium? Velit minus quia laborum doloremque aliquid itaque tenetur saepe quas molestias voluptatem, esse est eum deleniti illo aut accusantium
          </p>
          <address>
            <h3>
              777 Gambling Blvd <br />
              Los Angeles, CA, 99999<br />
            </h3>
            P: 777.YUM.SNAC (<a href="tel:+1 777-986-7622">777.986.7622</a>)<br />
            E: <a href="mailto:info@friedsnacksdiner.io">info@friedsnacksdiner.io</a>
          </address>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d954.7919544119459!2d-118.2426957182893!3d34.053346042137484!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1626824922800!5m2!1sen!2sus" frameborder="0" allowfullscreen style={iframeStyle}>
        </iframe>
      </div>
    </div>
  )
}

export default Location;
