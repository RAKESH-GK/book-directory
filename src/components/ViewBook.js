import React from 'react'

export default function ViewBook(props) {
    return (
        <div className="view_book">
            {
                props.API_data.map((data) => {
                    return (
                        <div className="row main_row">
                                <h5><span className="book_name">Book Title : {data.book_name}</span><span className="buttons">
                                    <i className='far fa-edit' onClick={() => { props.setData(data) }}></i>
                                    <i className='far fa-trash-alt' onClick={() => { props.deleteData(data._id) }}></i>
                                </span></h5>
                                <div className="row sub_row">
                                    <div className="col-3">
                                        <label htmlFor=""><h6>Author</h6></label>
                                        <br /><div className="data">{data.author_name}</div>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor=""><h6>Book Type</h6></label>
                                        <br /><div className="data">{data.book_type}</div>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor=""><h6>No of pages</h6></label>
                                        <br /><div className="data">{data.no_of_pages}</div>
                                    </div>
                                    <div className="col-3">
                                        <label htmlFor=""><h6>Ratings</h6></label>
                                        <br /><div className="data">{data.ratings}</div>
                                    </div>
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
