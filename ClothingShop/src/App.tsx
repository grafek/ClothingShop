import { QueryClientProvider, QueryClient } from "react-query";
import Test from "./components/Test";

function App() {
  const qc = new QueryClient();

  return (
    <QueryClientProvider client={qc}>
      <Test />
    </QueryClientProvider>
  );
}

export default App;
