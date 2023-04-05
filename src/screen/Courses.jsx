import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CoursesProducts } from "../data";
import { ShopContext } from "../context/ShopProvider";

function Courses() {
    const { id, name, price, imageSrc } = CoursesProducts;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartAmount = cartItems[id];
    return (
        <>
            <Navbar />
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-xl font-bold text-gray-900">Courses</h2>
                    <p className="text-slate-500">
                        Explore the best courses with the best price with world
                        class instructor{" "}
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                        {CoursesProducts.map((product) => (
                            <div key={product.id}>
                                <div className="relative">
                                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="relative mt-4">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.teacher}
                                        </p>
                                    </div>
                                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                                        />
                                        <p className="relative text-lg font-semibold text-white">
                                            {product.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href={product.href}
                                        className="relative flex items-center justify-center rounded-md border border-transparent bg-[#4766ff] py-2 px-8 text-sm font-medium text-white hover:bg-gray-200"
                                        onClick={() => addToCart(product.id)}
                                    >
                                        Add to bag
                                        {cartAmount > 0 && <>({cartAmount})</>}
                                        <span className="sr-only">
                                            {product.name}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Courses;
