import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div
      className="flex min-h-screen bg-white dark:bg-[#0b1220] text-black dark:text-white transition-colors duration-300"
      dir="rtl"
    >
      <Sidebar />

      <div className="flex flex-col flex-1 bg-white dark:bg-[#0b1220] transition-colors duration-300">
        <Navbar />

        <main className="flex-1 p-6 bg-white dark:bg-[#0b1220] transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;