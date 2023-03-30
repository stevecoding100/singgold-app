import {
    ArrowDownIcon,
    ArrowUpIcon,
    BookOpenIcon,
    ComputerDesktopIcon,
    GlobeAltIcon,
    UserGroupIcon,
} from "@heroicons/react/20/solid";
import {
    CursorArrowRaysIcon,
    EnvelopeOpenIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

const stats = [
    {
        id: 1,
        name: "Expert Mentors",
        stat: "100+",
        icon: ComputerDesktopIcon,
        changeType: "increase",
    },
    {
        id: 2,
        name: "Student Globally",
        stat: "300K",
        icon: UserGroupIcon,
        changeType: "increase",
    },
    {
        id: 3,
        name: "Total Courses",
        stat: "200+",
        icon: BookOpenIcon,
        changeType: "decrease",
    },
];
// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 px-24

export default function Stats() {
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mt-8 px-22">
            {stats.map((item) => (
                <div
                    key={item.id}
                    className="h-48 w-lg flex sm:flex-col items-center justify-center p-12 border-transparent"
                >
                    {/* Icons */}
                    <div className="flex items-center">
                        <item.icon
                            className="h-12 w-12 p-2 mt-2 text-white rounded-md bg-[#4766ff] "
                            aria-hidden="true"
                        />
                        {/* Stats Numbers */}
                        <div className="flex flex-col">
                            <p className="text-4xl font-semibold text-darkblue ml-8 ">
                                {item.stat}
                            </p>
                            {/* Stats Name  */}
                            <p className="ml-8 truncate text-md font-medium text-slate-500">
                                {item.name}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
