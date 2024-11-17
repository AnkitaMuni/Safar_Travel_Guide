import {useState, useEffect} from 'react'

const useFetch = (url)=>{
    const [data,setData] = useState([])
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(()=>{

        const fetchData = async()=>{
            setLoading(true)

            try{
                const res = await fetch(url)

                if (!res.ok) {
                    if (res.status === 404) {
                      setData([]);
                    } else {
                      setError("Failed to fetch");
                    }
                }

                const result = await res.json()
                console.log(result)
                if (result?.data) {
                    setData(result.data);
                }
                setLoading(false)

            } catch (err) {
                setError(err.message)
                setLoading(false)
            }

        }

        fetchData()

    }, [url])

    return {
        data,
        error,
        loading,
    }

}

export default useFetch