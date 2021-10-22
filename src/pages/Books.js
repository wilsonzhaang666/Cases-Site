import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { BookContext } from '../context/books';


const Books = () => {
    console.log(BookContext)

    const { books } = useContext(BookContext);
    console.log(books)
    if (!books.length) {
        return <h3>No Books Available</h3>
    }

    return (
        <section className="books">
            {books
            // .filter(book=>book.category==="iphone11")
            .map(({ image: image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`cases/${id}`} className="btn book-link">details</Link>
                </article>
            ))}
            
        </section>
    )
}

export default Books
