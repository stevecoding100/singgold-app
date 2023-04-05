import { ShopContext } from "../context/ShopProvider";
import React, { useContext } from "react";

import {
    QuestionMarkCircleIcon,
    XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
function CartItem(product) {
    const { id, name, price, imageSrc, imageAlt } = product.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(ShopContext);
    return (
        <div>
            <li key={id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                            <div className="flex justify-between">
                                <h3 className="text-lg ">
                                    <a className="font-medium text-gray-700 hover:text-gray-800">
                                        {name}
                                    </a>
                                </h3>
                            </div>

                            <p className="mt-1 text-sm font-medium text-gray-900">
                                ${price}
                            </p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                            <div className="absolute right-0 top-0">
                                <button
                                    type="button"
                                    className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">Remove</span>
                                    <XMarkIconMini
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        onClick={() => removeFromCart(id)}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default CartItem;
