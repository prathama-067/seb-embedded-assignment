import React, { useRef, useEffect, useState } from 'react'

declare type Options ={
        method: string;
        headers: {
            'Content-Type': string;
        };
        referrerPolicy: string;
}

const initialOptions = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
        'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
};

/**
 * @function useFetch
 * @description React Hook to call apis on load with Fetch .
 *       componentMounted flag to avoid memory leak
 * @param {string} url
 * @param {Object} options
 * @returns {Object} { response, error, loading }
 * @example resopnse = useFetch('<url>')
 */
export default function useFetch(url: RequestInfo | URL , options = initialOptions) {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        let componentMounted = true;
        const fetchData = async () => {
            
            try {
                setLoading(true)
                const res = await fetch(url, options)
                const json = await res.json()
                if(componentMounted){
                    setResponse(json)
                }
            } catch (err : any) {
                setLoading(false)
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
        return () => {
            componentMounted = false;
        }
    }, [])
    return { response, error, loading }
}