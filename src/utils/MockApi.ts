import mockData from "../store/data.json";

interface mockApiGame {
  id: number;
  gameProvider: string;
  category: string;
  name: string;
  image: string;
  favorite: boolean;
}

interface DataResponse {
  data: mockApiGame[];
}
const fetchData = (): Promise<DataResponse> => {
  return new Promise((resolve, reject) => {
    // Simulate loading state
    const loadingTimeout = setTimeout(() => {
      clearTimeout(loadingTimeout);
      resolve({ data: mockData.gameInfo });
    }, 1000); // Simulate a 1 second fetch time
  });
};

export default fetchData;
