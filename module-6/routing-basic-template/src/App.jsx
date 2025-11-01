import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="app_main">
        <AllRoutes />
      </main>
    </div>
  );
};

export default App;
