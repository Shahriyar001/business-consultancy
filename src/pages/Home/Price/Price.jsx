const Price = () => {
  return (
    <div className="">
      <h1 className=" text-center text-5xl my-10 mx-7 ">
        Pricing made for collaborative support.{" "}
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="card mx-7 w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" text-3xl">Freebie</h2>
            <p className="text-xl">
              Ideal for individuals who need quick access to basic features.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-inactive disabled text-5xl">$0</button>
              <p className="text-xl">20,000+ of PNG & SVG graphics</p>
              <p className="text-xl">Access to 100 million stock images</p>
              <p className="text-xl">Upload custom icons and fonts</p>
              <p className="text-xl">Unlimited Sharing</p>
              <p className="text-xl">Upload graphics & video in up to 4k</p>
              <p className="text-xl">Unlimited Projects</p>
              <p className="text-xl">Instant Access to our design system</p>
              <p className="text-xl">Create teams to collaborate on designs</p>
            </div>
          </div>
        </div>
        <div className="card bg-cyan-950 w-96 shadow-xl">
          <div className="card-body">
            <h2 className=" text-3xl">Freebie</h2>
            <p className="text-xl">
              Ideal for individuals who need quick access to basic features.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-inactive disabled text-5xl">
                $20
              </button>
              <p className="text-xl">20,000+ of PNG & SVG graphics</p>
              <p className="text-xl">Access to 100 million stock images</p>
              <p className="text-xl">Upload custom icons and fonts</p>
              <p className="text-xl">Unlimited Sharing</p>
              <p className="text-xl">Upload graphics & video in up to 4k</p>
              <p className="text-xl">Unlimited Projects</p>
              <p className="text-xl">Instant Access to our design system</p>
              <p className="text-xl">Create teams to collaborate on designs</p>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" text-3xl">Freebie</h2>
            <p className="text-xl">
              Ideal for individuals who need quick access to basic features.
            </p>
            <div className="card-actions justify-start">
              <button className="btn btn-inactive disabled text-5xl">
                $50
              </button>
              <p className="text-xl">20,000+ of PNG & SVG graphics</p>
              <p className="text-xl">Access to 100 million stock images</p>
              <p className="text-xl">Upload custom icons and fonts</p>
              <p className="text-xl">Unlimited Sharing</p>
              <p className="text-xl">Upload graphics & video in up to 4k</p>
              <p className="text-xl">Unlimited Projects</p>
              <p className="text-xl">Instant Access to our design system</p>
              <p className="text-xl">Create teams to collaborate on designs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
