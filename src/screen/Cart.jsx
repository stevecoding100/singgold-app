import React, { useContext } from "react";
import { PopularProducts } from "../data";
import { ShopContext } from "../context/ShopProvider";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import {
    QuestionMarkCircleIcon,
    XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const relatedProducts = [
    {
        id: 1,
        name: "Throat anatomy and mechanics",
        teacher: "Dr.Indira Layne",
        href: "#",
        imageSrc:
            "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        imageAlt: "Throat anatomy and mechanics course.",
        price: "$200",
    },
    // More products...
];

const ShippingFees = [
    {
        shipping: 5.0,
        tax: 6,
    },
];

export default function Cart() {
    const {
        cartItems,
        getTotalCartAmount,
        addToCart,
        removeFromCart,
        updateCartItemCount,
    } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="bg-white">
            <Navbar />
            {/* Main content */}
            <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Shopping Cart
                </h1>

                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section
                        aria-labelledby="cart-heading"
                        className="lg:col-span-7"
                    >
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        <ul
                            role="list"
                            className="divide-y divide-gray-200 border-b border-t border-gray-200"
                        >
                            {PopularProducts.map((product, productIdx) => {
                                if (cartItems[product.id] !== 0) {
                                    return <CartItem data={product} />;
                                }
                            })}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                    >
                        <h2
                            id="summary-heading"
                            className="text-lg font-medium text-gray-900"
                        >
                            Order summary
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">
                                    Subtotal
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">
                                    ${totalAmount}
                                </dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Shipping estimate</span>
                                    <a
                                        href="#"
                                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">
                                            Learn more about how shipping is
                                            calculated
                                        </span>
                                        <QuestionMarkCircleIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">
                                    {totalAmount > 0 ? `$5.00` : `$0`}
                                </dd>
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex text-sm text-gray-600">
                                    <span>Tax estimate</span>
                                    <a
                                        href="#"
                                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                                    >
                                        <span className="sr-only">
                                            Learn more about how tax is
                                            calculated
                                        </span>
                                        <QuestionMarkCircleIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </a>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">
                                    {totalAmount > 0 ? `$8.32` : `$0`}
                                </dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-gray-900">
                                    Order total
                                </dt>

                                <dd className="text-base font-medium text-gray-900">
                                    $
                                    {`${totalAmount}` > 0
                                        ? `${totalAmount + 5 + 8.32}`
                                        : 0}
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-6">
                            <button
                                onClick={() => navigate("/")}
                                type="submit"
                                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                            >
                                Checkout
                            </button>
                        </div>
                    </section>
                </form>

                {/* Related products */}

                <section aria-labelledby="related-heading" className="mt-24">
                    <h2
                        id="related-heading"
                        className="text-lg font-medium text-gray-900"
                    >
                        You may also like&hellip;
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {relatedProducts.map((relatedProduct) => (
                            <div
                                key={relatedProduct.id}
                                className="group relative"
                            >
                                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={relatedProduct.imageSrc}
                                        alt={relatedProduct.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={relatedProduct.href}>
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute inset-0"
                                                />
                                                {relatedProduct.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {relatedProduct.color}
                                        </p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        {relatedProduct.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* NewsLetter Start */}
            <div className="bg-white py-16 sm:py-24 lg:py-32">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
                    <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
                        <h2 className="inline sm:block lg:inline xl:block">
                            Want courses news and updates?
                        </h2>{" "}
                        <p className="inline sm:block lg:inline xl:block">
                            Sign up for our newsletter.
                        </p>
                    </div>
                    <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                        <div className="flex gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-gray-900">
                            We care about your data. Read our{" "}
                            <a
                                href="#"
                                className="font-semibold text-indigo-600 hover:text-indigo-500"
                            >
                                privacy&nbsp;policy
                            </a>
                            .
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
