const Card = () => {
  return (
    <div className="card w-8/12 bg-base-100 shadow-2xl p-4">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Knowledge Cafe How to get your first job as a self- taught programmer
        </h2>
        <p>#beginners #programming</p>
        <p className="text-primary underline">Mark as read</p>
      </div>
    </div>
  );
};

export default Card;
