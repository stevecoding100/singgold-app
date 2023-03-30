import Stats from "./Stats";

const offers = [
    {
        name: "Download the app",
        description: "Get an exclusive $5 off code",
        href: "#",
    },
    {
        name: "30 days satisfaction",
        description: "Not satisfied, get refund",
        href: "#",
    },
    {
        name: "Sign up for our newsletter",
        description: "15% off your first order",
        href: "#",
    },
];

export default function Header() {
    return (
        <div className="bg-white">
            <div className="flex flex-col border-b border-gray-200 lg:border-0">
                <nav aria-label="Offers" className="order-last lg:order-first">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <ul
                            role="list"
                            className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
                        >
                            {offers.map((offer) => (
                                <li key={offer.name} className="flex flex-col">
                                    <a
                                        href={offer.href}
                                        className="relative flex flex-1 flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
                                    >
                                        <p className="text-sm text-gray-500">
                                            {offer.name}
                                        </p>
                                        <p className="font-semibold text-gray-900">
                                            {offer.description}
                                        </p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="absolute hidden h-full w-1/2 lg:block"
                    />
                    <div className="relative bg-gray-100  lg:bg-transparent">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid  lg:grid-cols-2 lg:px-8">
                            <div className="mx-auto max-w-2xl py-24 lg:max-w-none  lg:py-64">
                                <div className="lg:pr-16">
                                    <h1 className="text-4xl font-bold tracking-tight  text-gray-900 sm:text-5xl xl:text-6xl">
                                        Become The{" "}
                                        <span className="text-yellow-500">
                                            Professional Singer
                                        </span>{" "}
                                        Of Your Dreams
                                    </h1>
                                    <p className="mt-4 text-xl text-gray-600">
                                        Become the best singer, entrepreneur,
                                        and artist today. With our dedicated and
                                        high quality courses. Get the skills you
                                        need today with our certified and
                                        trainned professionals.
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="inline-block mr-2 rounded-md border-2 border-transparent bg-[#4766ff] hover:bg-gold  py-3 px-8 font-medium text-graywhite hover:text-slate-700"
                                        >
                                            Explore Courses
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-block rounded-md border-2 border-transparent  hover:bg-[#4766ff] hover:border-hidden py-3 px-8 font-medium text-slate-700 hover:text-white"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute lg:top-0 lg:right-0 lg:h-[60%] lg:w-[52%] md:h-full md:w-full sm:h-full sm:w-full p-8 mt-12">
                        <img
                            src="https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80"
                            alt=""
                            className=" object-cover object-center rounded-[50%] shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <Stats />
        </div>
    );
}
