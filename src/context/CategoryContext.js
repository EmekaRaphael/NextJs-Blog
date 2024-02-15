'use client'
import { createContext, useState} from 'react';

export const categoryContext = createContext();

export const CategoryProvider = ({children}) => {
    const [category, setCategory] = useState('');
    const changeCategory = (cat) => {
        setCategory(cat);
    };
    
    return (
        <categoryContext.Provider value={{category, changeCategory}}>
            {children}
        </categoryContext.Provider>
    )
}