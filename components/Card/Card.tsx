import { JSX } from "react";
import { CardProps } from "./interface";

export default function Card({
    title,
    description,
    price,
}: CardProps): JSX.Element {
    return (
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-amber-300 hover:border-amber-700 transition duration-200">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-lg mb-2">{price}</p>
          <p>{description}</p>
        </div>
    );
}