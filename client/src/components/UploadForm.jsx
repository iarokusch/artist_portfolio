import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [media, setMedia] = useState('');
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setMessage('Please select an image file');
            return;
        }

        setUploading(true);
        setMessage('');

        const formData = new FormData();
        formData.append('image', file);
        formData.append('title', title);
        formData.append('media', media);
        formData.append('size', size);
        formData.append('price', price);
        formData.append('description', description);

        try {
            const response = await axios.post('http://localhost:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                setMessage('Image and project details uploaded successfully');
            } else {
                setMessage('Upload failed');
            }
        } catch (error) {
            setMessage('Error uploading');
            console.error('Error uploading:', error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <h1>Upload Image and Project Details</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Media"
                    value={media}
                    onChange={(e) => setMedia(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UploadForm;
