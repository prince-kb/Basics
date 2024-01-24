import React ,{useState}from "react";

function NoteItem(props) {
  const { note } = props;
  const changeDate = (x) => {
    return new Date(x).toGMTString();
  };

  return (
      <div className="col-md-3 my-2">
        <div className="card m-auto">
          <div className="card-body">
            <h2 className="card-title">{note.title}</h2>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {changeDate(note.date)}
            </h6>
            <p className="card-text">{note.notes}</p>
          </div>
        </div>

        
      </div>
  );
}

export default NoteItem;
