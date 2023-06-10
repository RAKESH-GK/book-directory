import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import AddBook from './components/AddBook';
import ViewBook from './components/ViewBook';

export default function Home() {
    const [book_name, setBook_name] = useState('');
    const [author_name, setAuthor_name] = useState('');
    const [id, setBook_id] = useState('');
    const [book_type, setBook_type] = useState('');
    const [no_of_pages, setNo_of_pages] = useState('');
    const [ratings, setRatings] = useState('');
    const [web_link, setWeb_link] = useState('');
    const [API_data, setAPI_data] = useState([]);
    const [load, re_load] = useState(true);

    useEffect(() => {
        if (load) {
            axios.get(`http://localhost:5000/`).then( (response)=> {
                setAPI_data(response.data.data);
            })
        }
        re_load(false);
    }, [load]);


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/add_book', { book_name, author_name,book_type,no_of_pages,ratings,web_link });
        setBook_name('');
        setAuthor_name('');
        setBook_type('');
        setNo_of_pages('');
        setRatings('');
        setWeb_link('');
        re_load(true);
    }

    const setData = (data) => {
        setBook_name(data.book_name);
        setAuthor_name(data.author_name);
        setBook_type(data.book_type);
        setNo_of_pages(data.no_of_pages);
        setRatings(data.ratings);
        setWeb_link(data.web_link);
        setBook_id(data._id);
        document.getElementById('update').style.display = 'block';
        document.getElementById('add').style.display = 'none';
        re_load(true);
    }

    const updateData = async () => {
        await axios.put(`http://localhost:5000/update_book/${id}`,{
            book_name, author_name,book_type,no_of_pages,ratings,web_link
        });
        setBook_name('');
        setAuthor_name('');
        setBook_type('');
        setNo_of_pages('');
        setRatings('');
        setWeb_link('');
        document.getElementById('update').style.display = 'none';
        document.getElementById('add').style.display = 'block';
        re_load(true);
    }

    const deleteData = async(id) => {
        await axios.delete(`http://localhost:5000/delete_book/${id}`);
        re_load(true);
    }
    return (
        <div className="container home">
            <AddBook updateData={updateData} onSubmit={onSubmit} book_name={book_name} author_name={author_name} book_type={book_type} no_of_pages={no_of_pages} ratings={ratings} setBook_type={setBook_type} setNo_of_pages={setNo_of_pages} setRatings={setRatings} setBook_name={setBook_name} setAuthor_name={setAuthor_name} web_link={web_link} setWeb_link={setWeb_link}  />
            <ViewBook API_data={API_data} setData={setData} deleteData={deleteData} />
        </div>
    )
}
