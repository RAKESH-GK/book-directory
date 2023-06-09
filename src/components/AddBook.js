import React from 'react';

export default function AddBook(props) {

  return (
    <div>
      <div className="add_book">
                <br />
                <form onSubmit={props.onSubmit} action=''>
                    <div className="mb-3">
                        <label className="form-label">Book Title</label>
                        <input type="text" className="form-control" value={props.book_name} onChange={(e) => props.setBook_name(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Author Name</label>
                        <input type="text" className="form-control" value={props.author_name} onChange={(e) => props.setAuthor_name(e.target.value)} />
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
