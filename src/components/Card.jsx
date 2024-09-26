import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card shadow p-2">
      <img className="rounded" src={book.image} alt="" />

      <div className="card-body">
        <h4 className="bg-white">{book.title}</h4>
        <h5 className="bg-white">{book.author}</h5>
        <p className="badge bg-danger">{book.category}</p>
      </div>

      <Link to={`/detail/${book.id}`} className="btn btn-primary">
        Detay Gör
      </Link>
    </div>
  );
};

export default Card;
