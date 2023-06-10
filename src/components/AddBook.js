import React from 'react';

export default function AddBook(props) {

  return (
    <div>
      <div className="add_book">
                <br />
                <form onSubmit={props.onSubmit} action=''>
                    <div className="mb-3">
                        <label className="form-label">Book Title</label>
                        <input type="text" className="form-control" value={props.book_name} onChange={(e) => props.setBook_name(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Author Name</label>
                        <input type="text" className="form-control" value={props.author_name} onChange={(e) => props.setAuthor_name(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Book Type</label>
                        <input type="text" className="form-control" value={props.book_type} onChange={(e) => props.setBook_type(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Number Of Pages</label>
                        <input type="number" className="form-control" value={props.no_of_pages} onChange={(e) => props.setNo_of_pages(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ratings</label>
                        <input type="number" className="form-control" value={props.ratings} onChange={(e) => props.setRatings(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Web Link</label>
                        <input type="link" className="form-control" value={props.web_link} onChange={(e) => props.setWeb_link(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-success" value="Add Book" id='add' />
                        <input type="button" className="btn btn-success" value="Update Book" id='update' style={{ 'display': 'none' }} onClick={() => { props.updateData() }} />
                    </div>
                </form>
            </div>
    </div>
  )
}
