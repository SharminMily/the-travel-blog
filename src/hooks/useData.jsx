import { useEffect, useState } from "react";

const useData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://travel-blog-server.vercel.app/allData')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, [])
    return [data, loading]
}
export default useData;