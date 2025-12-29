import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const useRedirection = (path, delay) => {
    const { setCarga } = useContext(GlobalContext);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(path);
            setCarga(true);
        }, delay);
    });
};

export default useRedirection;