function Pricing() {
    return (
      <section>
      <div className="container">
      <p>At our website, we offer a variety of pricing options to suit the needs of all of our clients. Whether you are looking for a monthly membership, a punch card, or a single class pass, we have an option that will work for you. Our monthly membership gives you unlimited access to our state-of-the-art gym and all of our group fitness classes. Our punch card allows you to purchase a set number of visits at a discounted rate, giving you the flexibility to come to the gym on your own schedule. And our single class pass is perfect for those who want to try a new workout or who may not have the time for a full membership. </p>
      <div className="pricing-container">
        <h2>Pricing</h2>
        <div className="pricing-options">
          <div className="basic-plan">
            <h3>Basic</h3>
            <p>$19.99/month</p>
            <ul>
              <li>Access to all amenities</li>
              <li>Unlimited classes</li>
              <li>1 personal training session per month</li>
            </ul>
            <button>Sign Up</button>
          </div>
          <div className="premium-plan">
            <h3>Premium</h3>
            <p>$29.99/month</p>
            <ul>
              <li>Access to all amenities</li>
              <li>Unlimited classes</li>
              <li>3 personal training sessions per month</li>
              <li>10% off all retail items</li>
            </ul>
            <button>Sign Up</button>
          </div>
          <div className="vip-plan">
            <h3>VIP</h3>
            <p>$39.99/month</p>
            <ul>
              <li>Access to all amenities</li>
              <li>Unlimited classes</li>
              <li>5 personal training sessions per month</li>
              <li>20% off all retail items</li>
              <li>VIP Lounge Access</li>
            </ul>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <p>All of our pricing options are competitively priced and come with no long-term commitments or hidden fees. So whether you are just starting your fitness journey or are a seasoned gym-goer, we have a pricing option that will work for you.</p>
      </div>
      </section>
    );
  }
  export default Pricing;