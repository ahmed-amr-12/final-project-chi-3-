
import { Card, CardContent } from "./ui/Card";

function StatCard({ title, value, icon, danger }) {
  return (
    <Card className="bg-white dark:bg-[#0b1220] text-black dark:text-white transition-colors duration-300">
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
            <h2 className="text-xl font-bold text-black dark:text-white">
              {value}
            </h2>
          </div>

          <div
            className={`p-3 rounded-xl ${
              danger
                ? "bg-red-500/20 text-red-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default StatCard;
