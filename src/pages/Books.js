import React, { useContext,useState } from 'react'
import { Link } from "react-router-dom";
import { BookContext } from '../context/books';

const Books = () => {
    console.log(BookContext)
    const [Category, setCategory] = useState("iphone11");
    const [field, setField] =  useState("iphone11");

    const { books } = useContext(BookContext);
    const handleInputChange = (event) => {
        setField(event.target.value);
        setCategory(event.target.value);

      };
    // general input change handler
      const handleSubmit = (event) => {
        event.preventDefault();
    
        
      };
    console.log(books)
    if (!books.length) {
        return <h3>No Books Available</h3>
    }
    
    return (
        <div>
      <form onSubmit={handleSubmit}>
      <div className="form-group row">
        <div className="col-md-4">
          <label htmlFor="phonetype" className="control-label">Your Phone Type</label>
          <select id="phonetype"   onChange={handleInputChange} >
               <option value="iphone11">iphone11</option>
             <option value="iphone11pro">iphone11 pro</option>
                 <option value="iphone11promax">iphone11 pro Max</option>
               <option value="iphone12">iphone12</option>                            
                 <option value="iphone12mini">iphone12 mini</option>                            
                <option value="iphone12pro">iphone12 pro</option>                            
                 <option value="iphone12promax">iphone12 pro Max</option>                            
                 <option value="iphone13">iphone13</option>                            
                 <option value="iphone13mini">iphone13 mini</option>                            
                <option value="iphone13pro">iphone13 pro</option>                            
                <option value="iphone13promax">iphone13 pro Max</option>       
            </select>

        </div>
      </div>
      
    </form>
        <section className="books">
            {books
            .filter(book=>book.category===Category)
            .map(({ image: image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`cases/${id}`} className="btn book-link">details</Link>
                </article>
            ))}
            
        </section>
        </div>
    )
}

export default Books
