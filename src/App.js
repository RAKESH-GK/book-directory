import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AddBook from './components/AddBook';
import ViewBook from './components/ViewBook';

export default function Home() {
    const [book_name, setBook_name] = useState('');
    const [author_name, setAuthor_name] = useState('');
    const [id, setBook_id] = useState('');
    const [API_data, setAPI_data] = useState([]);
    const [load, re_load] = useState(true);

    useEffect(() => {
        if (load) {
            axios.get(`https://6481ae1529fa1c5c5031de07.mockapi.io/fake_book`)
                .then((response) => {
                    setAPI_data(response.data);
                })
            re_load(false);
        }
    }, [load])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post(`https://6481ae1529fa1c5c5031de07.mockapi.io/fake_book`, {
            book_name,
            author_name
        })
        setBook_name('');
        setAuthor_name('');
        re_load(true);
    }

    const setData = (data) => {
        setBook_name(data.book_name);
        setAuthor_name(data.author_name);
        setBook_id(data.id);
        document.getElementById('update').style.display = 'block';
        document.getElementById('add').style.display = 'none';
    }

    const updateData = async () => {
        await axios.put(`https://6481ae1529fa1c5c5031de07.mockapi.io/fake_book/${id}`, {
            book_name,
            author_name
        }).then(() => {
        })
        setBook_name('');
        setAuthor_name('');
        document.getElementById('update').style.display = 'none';
        document.getElementById('add').style.display = 'block';
        re_load(true);
    }

    const deleteData = async (id) => {
        await axios.delete(`https://6481ae1529fa1c5c5031de07.mockapi.io/fake_book/${id}`)
            .then(() => {
            })
        re_load(true);
    }
    return (
        <div className="container home">
            <AddBook updateData={updateData} onSubmit={onSubmit} book_name={book_name} author_name={author_name} setBook_name={setBook_name} setAuthor_name={setAuthor_name} />
            <ViewBook API_data={API_data} setData={setData} deleteData={deleteData} />
        </div>
    )
}
