import {useState, useCallback, useEffect} from 'react';
import axios from 'axios';
import {axiosInstance} from "./api/instance";
import {showAlert} from "./utils";
export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const createChangeHandler = useCallback((name) => (event) => {
        const { value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }, []);

    const formUtilities = {};

    for (let field in initialValues) {
        formUtilities[field] = {
            name: field,
            value: values[field],
            onChange: createChangeHandler(field),
        };
    }


    return {
        values,
        ...formUtilities,
    };
};

export function useQuery(func, ...params) {
    const [data, setData] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            const response = await func(...params);
            setData(response);
            console.log(response);
        } catch (error) {
            setError(error);
            showAlert(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchData()
    }, [...params]);

    return [data, fetchData, {error, loading}];
}

