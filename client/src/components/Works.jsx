import React, { useState } from 'react';
import axios from 'axios';

const Works = () => {
    // Define state variables for form data
    const [formData, setFormData] = useState({
        title: '',
        media: '',
        size: '',
        price: '',
        description: '',
        // img: []
    });

    // Function to handle changes in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle file input changes
    const handleFileChange = (e) => {
        const allImages = Array.from(e.target.files).map((file) => ({
            url: URL.createObjectURL(file),
            file: file,
        }));
        setFormData([...fileData, ...allImages]);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            console.log(formData)
            axios
                .post('http://localhost:3000/', formData);

            console.log('Server response:', formData);

            // Add code to handle server response here
        } catch (error) {

        }
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="title">Welcome</div>
            <div className="subtitle">Let's add projects</div>
            <div className="input-container ic1">
                <input id="title" className="input" type="text" name="title" onChange={handleChange} />
                <div className="cut"></div>
                <label htmlFor="title" className="placeholder">Title</label>
            </div>
            <div className="input-container ic2">
                <input id="media" className="input" type="text" name="media" onChange={handleChange} />
                <div className="cut"></div>
                <label htmlFor="media" className="placeholder">Media</label>
            </div>
            <div className="input-container ic2">
                <input id="size" className="input" type="text" name="size" onChange={handleChange} />
                <div className="cut"></div>
                <label htmlFor="size" className="placeholder">Size</label>
            </div>
            <div className="input-container ic2">
                <input id="price" className="input" type="text" name="price" onChange={handleChange} />
                <div className="cut"></div>
                <label htmlFor="price" className="placeholder">Price</label>
            </div>
            <div className="input-container ic2">
                <textarea id="description" className="input" name="description" onChange={handleChange} />
                <div className="cut"></div>
                <label htmlFor="description" className="placeholder">Description</label>
            </div>
            <div className="input-container ic2">
                <input id="img" className="input" type="file" name="img" onChange={handleFileChange} />
                <div className="cut"></div>
                <label htmlFor="img" className="placeholder">Image</label>
            </div>

            <button type="submit" className="submit" >Add Project</button>

        </form>
    );
};

export default Works;
