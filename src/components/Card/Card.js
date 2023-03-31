import blogger from "../../images/blogger-1.jpg";
const Card = () => {
  const date = new Date("2023-03-30");
  const today = new Date();
  const dateDifferenceInMs = today - date;
  const countDays = Math.floor(dateDifferenceInMs / (1000 * 60 * 60 * 24));

  return (
    <div className="card w-7/12 bg-base-100 shadow-2xl p-4 mt-4">
      <figure className="mt-4">
        <img
          className="rounded-2xl"
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex">
          <img className="w-24 rounded-full mr-4" src={blogger} alt="blogger" />
          <div>
            <h1 className="text-xl font-bold">Mr. Raju</h1>
            <p className="text-sm">
              {date.toDateString()} ({countDays} day
              {countDays > 1 ? <span>s</span> : ""} ago )
            </p>
          </div>
          <p className="text-sm text-right">05 min to read</p>
        </div>
        <h2 className="card-title">
          Knowledge Cafe How to get your first job as a self- taught programmer
        </h2>
        <p>#beginners #programming</p>
        <p className="text-primary underline">Mark as read</p>
      </div>
      <hr />
    </div>
  );
};

export default Card;
