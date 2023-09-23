import { useQuery } from "react-query";
import axios from "axios";

export default function Test() {
  const { data, error, isLoading } = useQuery({
    queryKey: "test",
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:5001/WeatherForecast",
      });

      console.log(response)

      const data = response.data;

      return data;
    },
  });

  if (isLoading) {
    return <div>isloading</div>;
  }

  console.log(data);
  console.log(error);
  return <div>Test</div>;
}
