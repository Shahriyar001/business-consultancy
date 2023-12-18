const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://themejunction.net/wp/nasiha/wp-content/uploads/2023/05/about-2.jpg"
          className="max-w-m rounded-lg shadow-2xl"
        />
        <div className="w-1/2 ps-4 mx-5">
          <p className="text-red-600">Who-We-Are</p>
          <h1 className="text-5xl font-bold">
            We address your most critical business priorities.
          </h1>
          <p className="py-6 ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Duarum enim vitarum nobis erunt instituta capienda. Hoc etsi
            multimodis reprehendi potest, tamen accipio, quod dant. Quod cum
            ille dixisset et satis disputatum videretur,
          </p>
          <button className="btn text-white btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
