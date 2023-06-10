import React from 'react'

export default function ViewBook(props) {
    return (
        <div className="view_book">
            {
                props.API_data.map((data) => { 
                    let view='';
                    if(data.web_link===""){
                        view="none";
                    }
                    return (

                        <div className="row main_row">
                            <h5><span className="book_name">Book Title : {data.book_name}</span><span className="buttons">
                                <a href={data.web_link} class='text-small' style={{ display: view }}><i className='far fa-eye'></i> Read Book</a>
                                <i className='far fa-edit' onClick={() => { props.setData(data) }}></i>
                                <i className='far fa-trash-alt' onClick={() => { props.deleteData(data._id) }}></i>
                            </span></h5>
                            <div className="row sub_row">
                                <div className="col-3">
                                    <label htmlFor=""><h6>Author</h6></label>
                                    <br /><div className="data">{`${(data.author_name) !== "" ? data.author_name : "----"}`}</div>
                                </div>
                                <div className="col-3">
                                    <label htmlFor=""><h6>Book Type</h6></label>
                                    <br /><div className="data">{`${(data.book_type) !== "" ? data.book_type : "----"}`}</div>
                                </div>
                                <div className="col-3">
                                    <label htmlFor=""><h6>No of pages</h6></label>
                                    <br /><div className="data">{`${(data.no_of_pages) !== null ? data.no_of_pages : "----"}`}</div>
                                </div>
                                <div className="col-3">
                                    <label htmlFor=""><h6>Ratings </h6> </label>
                                    <br /><div className="data">{`${(data.ratings) !== null ? data.ratings : "----"}`}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
