const products = [
    {
        id: 1,
        name: "Vocal agility & Strength",
        teacher: "Cliford James",
        href: "#",
        imageSrc:
            "https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        imageAlt: "Vocal agility & Strength course",
        price: "$150",
    },
    {
        id: 2,
        name: "Music industry legal contracts",
        teacher: "Ramona Stoned",
        href: "#",
        imageSrc:
            "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$110",
    },
    {
        id: 3,
        name: "Piano lesson beginner to expert",
        teacher: "Jeremy Main",
        href: "#",
        imageSrc:
            "https://images.unsplash.com/photo-1552422530-9b41dc72286b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$100",
    },
    {
        id: 4,
        name: "Throat anatomy and mechanics",
        teacher: "Dr.Indira Layne",
        href: "#",
        imageSrc:
            "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        imageAlt:
            "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
        price: "$200",
    },
    // More products...
];

export default function PopularCourses() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl font-bold text-gray-900">
                    Popular Courses
                </h2>
                <p className="text-slate-500">
                    Get the best course with the best price with world class
                    instructor{" "}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
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
                                >
                                    Add to bag
                                    <span className="sr-only">
                                        , {product.name}
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
