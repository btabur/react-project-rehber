import { useState } from "react";
import "./List.css";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div className="list">
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
     <div className="name-phone-text">
      <span>Name</span>
      <span>Phone</span>
     </div>

      <ul>
        {filtered.length>0 ?
        filtered.map((contact, index) => (
          <li key={index}>
            <div className="name-phone-text">
              <span>
              {contact.fullName}
              </span>
              <span>
              {contact.phoneNumber}
              </span>
           
            </div>
          
            </li>
        )): <p>Empty List</p>}
      </ul>
    </div>
  );
}

export default List;
