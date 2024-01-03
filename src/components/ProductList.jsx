import React, { useEffect, useState } from 'react';

export default function ProductList({searchText}) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {
        let link = '';
        setLoading(true);
        if (searchText) {
            link = `https://dummyjson.com/products/search?q=${searchText}`;
        } else {
            link = `https://dummyjson.com/products?limit=10&skip=${page}`;
        }
        fetch(link)
        .then(res => res.json())
        .then((data) => {
            setData(data);
            setLoading(false);
            setPage(page);
        })
    }, [page, searchText]);

    if(loading){
        return (
            <h3>loading....</h3>
        )
    }

    if(!loading){
        return (
            <div className="product-list">
                <button className={page === 0 ? 'disabledButton' : ''} style={{color: 'tomato', fontWeight: 'bold'}} onClick={() => {setPage((page) => Math.max(page - 10, 0))}}> Previous Page</button>
                <button className={page === 90 ? 'disabledButton' : ''} style={{color: 'green', fontWeight: 'bold'}} onClick={() => {setPage((page) => page + 10)}}> Next Page</button>
                <h3>Name | Price</h3>
                <ul>{data.products.map(product => <li key={product.id}> {product.title} | {product.price}</li>)}</ul>
            </div>
        )
    }
}