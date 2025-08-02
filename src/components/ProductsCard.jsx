import { Link } from "react-router-dom";

function ProductsCard({ title, author, img, id }) {
  return (
    <Link
      to={`/products/${id}`}
      className="rounded-lg shadow-md  flex w-[250px] flex-col hover:shadow-lg transition"
    >
      <div className="w-full h-[200px] mt-2">
        <img src={img} alt={title} className="w-full h-full object-contain" />
      </div>
      
      <div className="p-4 text-start flex flex-col gap-1">
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
        <p className="text-xs text-gray-600">{author}</p>
        <p className="text-sm text-slate-700 font-bold ">$14.99</p>
      </div>
        
    </Link>
  );
}

export default ProductsCard;
