import React, { useEffect, useState } from 'react';

export default function SearchBar({searchText, setSearchText}) {
    const [input, setInput] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchText(input)
        }, 1000);

        return () => clearTimeout(timer)
    }, [input]);

    return (
        <div className="search-bar">
            <input type="text"
            placeholder="Search..."
            value={input} onChange={e => setInput(e.target.value)}/>
        </div>
    )
}