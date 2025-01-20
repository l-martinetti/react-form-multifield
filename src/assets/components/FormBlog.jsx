const blogTitles = [];


import { useState } from 'react'

const FormBlog = () => {

    const [titles, setTitles] = useState(blogTitles);
    const [newTitle, setNewTitle] = useState('')

    const handlerSubmit = (e) => {
        e.preventDefault();

        const newBlogTitles = [newTitle, ...titles];
        setTitles(newBlogTitles)

        setNewTitle('')
    };

    const handlerRemoveTitle = (index) => {
        const newBlogTitle = titles.filter(title => titles.indexOf(title) !== index)

        setTitles(newBlogTitle)
    }

    return (
        <div className="container my-5">
            <form action="#" onSubmit={handlerSubmit}>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        placeholder="Title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        type="text"
                    />
                    <button
                        className="btn btn-primary"
                        type='submit'>
                        Invia
                    </button>
                </div>
            </form>

            <ul className='list-group'>
                {titles.map((title, index) => (
                    <li key={index} className='list-group-item d-flex justify-content-between'>
                        <span>{title}</span>
                        <i
                            className="fa-regular fa-trash-can"
                            onClick={() => handlerRemoveTitle(index)}
                        ></i>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FormBlog