const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://themejunction.net/wp/nasiha/wp-content/uploads/2023/05/slider-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-white text-5xl font-bold">
            We are Best Business <br />
            Consultancy Firm
          </h1>
          <p className="my-5 text-white">
            Consulting for small & medium sized business <br />
            professional, fast & affordable
          </p>
          <button className="btn text-white btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
