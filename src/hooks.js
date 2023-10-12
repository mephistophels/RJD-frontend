import {useState, useCallback, useEffect} from 'react';
import axios from 'axios';
import {axiosInstance} from "./api/instance";
import {showAlert} from "./utils";
export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const createChangeHandler = useCallback((name) => (event) => {
        const value = event.target?.value || event;
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
            defaultValue: initialValues[field],
        };
    }


    return {
        values,
        ...formUtilities,
    };
};

// export const useForm = (initialValues) => {
//     const [values, setValues] = useState(() => {
//         // Read the initial state from the URL on component mount
//         const params = new URLSearchParams(window.location.search);
//         let stateFromUrl = {};
//         for (let key of params.keys()) {
//             stateFromUrl[key] = params.get(key);
//         }
//         return { ...initialValues, ...stateFromUrl };
//     });
//
//     const createChangeHandler = useCallback((name) => (event) => {
//         const value = event.target?.value || event;
//         setValues(prevValues => {
//             const newState = {
//                 ...prevValues,
//                 [name]: value
//             };
//
//             // Convert the state to a query string
//             const params = new URLSearchParams(newState);
//
//             // Update the URL without causing a page reload
//             window.history.pushState(null, '', '?' + params.toString());
//
//             return newState;
//         });
//     }, []);
//
//     const formUtilities = {};
//
//     for (let field in initialValues) {
//         formUtilities[field] = {
//             name: field,
//             value: values[field],
//             onChange: createChangeHandler(field),
//         };
//     }
//
//     return {
//         values,
//         ...formUtilities,
//     };
// };

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

export const useFileLoad = () => {
    const [img, setImg] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [drag, setDrag] = useState(false);
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        setImgUrl(fileReader.result);
    }

    const handle = e => {
        e.preventDefault();
        const file = e.target.files[0];
        setImg(file);
        fileReader.readAsDataURL(file);
    }

    const handleFile = file => {
        setImg(file);
        fileReader.readAsDataURL(file);
    }

    return {
        imgUrl,
        handle,
        handleFile
    }

}