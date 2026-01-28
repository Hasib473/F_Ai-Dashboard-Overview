import {
  Phone,
  Bot,
  Repeat,
  Calendar,
  XCircle,
  Clock,
} from "lucide-react";

const stats = [
  {
    title: "Total Calls Today",
    value: "127",
    change: "+12%",
    icon: Phone,
    iconBg: "bg-sky-500",
    changeColor: "text-green-400",
  },
  {
    title: "AI-Handled Calls",
    value: "98",
    change: "+77%",
    icon: Bot,
    iconBg: "bg-pink-500",
    changeColor: "text-green-400",
  },
  {
    title: "Warm Transfer",
    value: "23",
    change: "+18%",
    icon: Repeat,
    iconBg: "bg-orange-500",
    changeColor: "text-green-400",
  },
  {
    title: "Appointments Booked",
    value: "34",
    change: "+8%",
    icon: Calendar,
    iconBg: "bg-emerald-500",
    changeColor: "text-green-400",
  },
  {
    title: "Missed/Failed Calls",
    value: "6",
    change: "-3%",
    icon: XCircle,
    iconBg: "bg-red-500",
    changeColor: "text-red-400",
    active: true,
  },
  {
    title: "Avg Call Duration",
    value: "3:42",
    change: "+15%",
    icon: Clock,
    iconBg: "bg-indigo-500",
    changeColor: "text-green-400",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {stats.map((item, i) => (
        <div
          key={i}
         className="relative bg-[rgba(17,27,60,1)] p-6 rounded-xl border border-white/10 shadow-lg text-white"
        >
          {/* Icon */}
          <div
            className={`absolute top-6 right-6 w-11 h-11 rounded-xl flex items-center justify-center ${item.iconBg}`}
          >
            <item.icon size={20} className="text-white" />
          </div>

          {/* Text */}
          <p className="text-sm text-slate-400">{item.title}</p>

          <h2 className="text-[32px] font-normal mt-2">
            {item.value}
          </h2>

          <p className={`text-sm mt-1 ${item.changeColor}`}>
            {item.change}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
