import { useQuery } from "react-query";
import axios from "axios";

export default function Test() {
  const { isLoading } = useQuery({
    queryKey: "test",
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_BACKEND_URL}/WeatherForecast`,
        headers: {
          "Access-Control-Allow-Origin": `${import.meta.env.VITE_FRONTEND_URL}`,
        },
      });

      const data = response.data;

      return data;
    },
  });

  if (isLoading) {
    return <div>isloading</div>;
  }

  return <div>Test</div>;
}
