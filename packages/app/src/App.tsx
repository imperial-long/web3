import Home from "./pages/home";
import { QueryClientProvider, QueryClient } from "react-query";
import "./index.css";

const query = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={query}>
      <div className='App'>
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
