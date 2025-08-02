import ProductsCard from "../components/ProductsCard";

function Products() {
  const books = [
    {
      id: 1,
      title: "The Four Agreements",
      author: "by Don Miguel Ruiz",
      img: "https://maliks.com/wp-content/uploads/2025/01/9781878424310.jpg",
    },
    {
      id: 2,
      title: "The Power of Positive Thinking",
      author: "by Norman Vincent Peale",
      img: "https://maliks.com/wp-content/uploads/2025/01/9780091906382.jpg",
    },
    {
      id: 3,
      title: "Surrounded by Vampires",
      author: "by Thomas Erikson",
      img: "https://maliks.com/wp-content/uploads/2025/01/9781785043994.jpg",
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad ",
      author: "by Robert Kiyosaki and Sharon Lechter",
      img: "https://maliks.com/wp-content/uploads/2024/09/9781612681139.jpg",
    },
    {
      id: 5,
      title: "Eat That Frog",
      author: "Book by Brian Tracy",
      img: "https://maliks.com/wp-content/uploads/2025/01/9781626569416.jpg",
    },
    {
      id: 6,
      title: "Eat That Frog",
      author: "Book by Brian Tracy",
      img: "https://maliks.com/wp-content/uploads/2025/01/9781626569416.jpg",
    },
  ];

  return (
    <div className=" flex w-full min-h-screen flex-wrap  gap-6 p-6">
      <h1 className="title">All Books</h1>
      <div className="flex w-full min-h-screen lg:justify-start justify-center flex-wrap  gap-6 ">
        {books.map((book) => (
          <ProductsCard
            key={book.id}
            title={book.title}
            author={book.author}
            img={book.img}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
