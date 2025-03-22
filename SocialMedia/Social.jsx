import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:3000/product/register");
                setProducts(response.data); 
            } catch (err) {
                setError("Error fetching data");
                console.error("Fetch Error:", err.message);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h1>Product List</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <pre>{JSON.stringify(products, null, 2)}</pre> 
            <table border="1">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Owner Name</th>
                        <th>Roll No</th>
                        <th>Owner Email</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.CompanyName || product.companyname}</td>
                            <td>{product.ownerName || product.ownername}</td>
                            <td>{product.rollno}</td>
                            <td>{product.OwnerEmail || product.owneremail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Social = () => {
    return (
        <div>
            <h2>Social Component</h2>
            <ProductList /> 
        </div>
    );
};

export default Social;
