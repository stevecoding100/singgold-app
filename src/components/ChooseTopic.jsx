import React from "react";
import { topics } from "../data";

export default function ChooseTopic() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto  py-12 sm:py-24 lg:max-w-none lg:py-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Choose Your Topic
                    </h2>
                    <p className="text-slate-500">
                        Select the topic you are interested in and we will show
                        you related courses.
                    </p>
                </div>
                <div className="space-y-4  lg:w-full lg:grid lg:grid-cols-4  lg:gap-x-6 lg:space-y-0 gap-4 py-8 sm:grid-cols-2">
                    {topics.map((topic) => (
                        <div key={topic.id} className="group relative">
                            <h3 className="text-xl font-regular border-b-yellow-500 hover:border-hidden  text-slate-600 border-2  hover:bg-[#4766ff] hover:text-graywhite rounded-lg text-center p-4">
                                <a href={topic.href}>{topic.title}</a>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// border-b-[#7a9eff]
