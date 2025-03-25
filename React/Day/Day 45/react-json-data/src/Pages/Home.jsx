import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
    const {data, isLoading, isFetched} = useQuery({
        queryKey: ['home'],
        queryFn: async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            return response.data;
        }
    });
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isFetched) {
        console.log(data);
    }
    return (
        <div>
            {isFetched && data.map(post => {
                    return (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    );
            })}
        </div>
    );
};

export default Home;
