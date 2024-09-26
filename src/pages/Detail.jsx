import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Detail = () => {
  const [book, setBook] = useState(null); // Başlangıç değeri null
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => setBook(res.data)) // setBooks yerine setBook
      .catch((err) => console.log("Veri gelmedi"));
  }, [id]); // id bağımlılık olarak eklendi

  if (!book) {
    return <Loader />; // Veri yüklenene kadar gösterilecek durum
  }

  return (
    <div className="row my-5 p-5">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img
          className="rounded img-fluid shadow"
          style={{ maxWidth: "400px" }}
          src={book.image} // src dinamik olarak book.image'den alınacak
          alt={book.title} // Alt etiketi için book.title kullanılıyor
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
        <h1>{book.title}</h1>

        <div className="my-4">
          <BookInfo title="Yazar" value={book.author} />
          <BookInfo title="Yıl" value={book.year} />
          <BookInfo title="Sayfa Sayısı" value={book.page} />
          <BookInfo title="Ücret" value={book.price + "₺"} />
          <BookInfo title="Açıklama" value={book.description} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

const BookInfo = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-success me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};
