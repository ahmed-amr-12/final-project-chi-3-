import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Suppliers from "./pages/Suppliers";
import Settings from "./pages/Settings";
import Pos from "./pages/Pos";
import Search from "./pages/Search";
import Reports from "./pages/Reports";
import Notification from "./pages/Notification";
import Users from "./pages/Users";
import DailyTransactions from "./pages/DailyTransactions";
import Login from "./pages/Login";

function ProtectedRoute({
  children,
}) {
  const token =
    localStorage.getItem(
      "token"
    );

  return token ? (
    children
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
        <Routes>
          {/* LOGIN PAGE */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* PROTECTED ROUTES */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Dashboard />
                      }
                    />

                    <Route
                      path="/sales"
                      element={
                        <Sales />
                      }
                    />

                    <Route
                      path="/suppliers"
                      element={
                        <Suppliers />
                      }
                    />

                    <Route
                      path="/settings"
                      element={
                        <Settings />
                      }
                    />

                    <Route
                      path="/pos"
                      element={
                        <Pos />
                      }
                    />

                    <Route
                      path="/inventory"
                      element={
                        <Inventory />
                      }
                    />

                    <Route
                      path="/search"
                      element={
                        <Search />
                      }
                    />

                    <Route
                      path="/reports"
                      element={
                        <Reports />
                      }
                    />

                    <Route
                      path="/notification"
                      element={
                        <Notification />
                      }
                    />

                    <Route
                      path="/users"
                      element={
                        <Users />
                      }
                    />

                    <Route
                      path="/daily-transactions"
                      element={
                        <DailyTransactions />
                      }
                    />
                  </Routes>
                </MainLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;