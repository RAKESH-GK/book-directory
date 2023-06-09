import React from 'react'

export default function ViewBook(props) {
  return (
    <div className="view_book">
                {
                    props.API_data.map((data) => {
                        return (
                            <div className="row main_row">
                                <div className="book_image"></div>
                                <div className="book_details">
                                    <h5><span className="book_name">{data.book_name}</span><span className="buttons">
                                        <i className='far fa-edit' onClick={() => { props.setData(data) }}></i>
                                        <i className='far fa-trash-alt'onClick={() => { props.deleteData(data.id) }}></i>
                                    </span></h5>
                                    <div className="row sub_row">
                                        <div className="col-4">
                                            <label htmlFor=""><h6>Book Type</h6></label>
                                            <br /><div className="data">story</div>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor=""><h6>No of pages</h6></label>
                                            <br /><div className="data">289</div>
                                        </div>
                                        <div className="col-4">
                                            <label htmlFor=""><h6>Ratings</h6></label>
                                            <br /><div className="data">* * * * *</div>
                                        </div>
                                    </div>
                                    <h6>Author: {data.author_name} </h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
  )
}
