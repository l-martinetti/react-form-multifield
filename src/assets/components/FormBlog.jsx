import { useState } from 'react'

const categories = [
    'romanzo',
    'saggio breve',
    'trattato'
]

const tags = [
    'fantasy',
    'horror',
    'thriller'
]

const FormBlog = () => {

    const initialFormData = {
        title: '',
        imgUrl: '',
        content: '',
        category: '',
        tags: [],
        published: false
    }

    const [formData, setFormData] = useState(initialFormData);
    const [posts, setPosts] = useState([]);

    const handleInputs = (e) => {
        let value = e.target.value

        if (e.target.name === 'category') value = categories[index]

        if (e.target.type === 'checkbox') value = e.target.checked

        const newFormData = {
            ...formData,
            [e.target.name]: value
        }

        setFormData(newFormData)
    }

    const handleTags = (e) => {
        let { tags, ...others } = formData;

        tags.includes(e.target.value) ? tags = tags.filter(tag => tag !== e.target.value) : tags = [...tags, e.target.value]

        setFormData({
            tags,
            ...others
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setPosts([
            ...posts,
            { id: self.crypto.randomUUID(), ...formData }
        ])
    }

    const handleRemovePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return (
        <div className="container my-5 px-4">
            <h2 className='mb-4'>Articoli</h2>
            <div>
                <form className='border px-4 mb-5' onSubmit={handleSubmit}>
                    <h3 className='my-4'>Nuovo Post</h3>
                    <div>
                        <label htmlFor='title' className='form-label'>
                            <h5>Titolo</h5>
                        </label>
                        <input
                            className="form-control mt-1 mb-2"
                            placeholder="Titolo"
                            type="text"
                            id='title'
                            name='title'
                            value={formData.title}
                            onChange={handleInputs}
                        />
                    </div>
                    <div>
                        <label htmlFor='image' className='form-label'>
                            <h5>Immagine</h5>
                        </label>
                        <input
                            className="form-control mt-1 mb-2"
                            placeholder="Immagine"
                            type="text"
                            id='image'
                            name='imgUrl'
                            value={formData.imgUrl}
                            onChange={handleInputs}
                        />
                    </div>
                    <div>
                        <label htmlFor='content' className='form-label'>
                            <h5>Contenuto</h5>
                        </label>
                        <textarea
                            className="form-control mt-1 mb-2"
                            placeholder="Contenuto"
                            rows='4'
                            id='content'
                            name='content'
                            value={formData.content}
                            onChange={handleInputs}
                        />
                    </div>
                    <select className="form-select my-3">
                        <option selected>Categoria</option>
                        {categories.map((category, index) => (
                            <option key={index} value={index}>{category}</option>
                        ))}
                    </select>
                    <div className='my-3'>
                        <label className='form-label'>Tags</label>
                        {tags.map((tag, index) => (
                            <div key={`tag${index}`} className="form-check">
                                <input
                                    className='form-check-input'
                                    type="checkbox"
                                    id={`tag${index}`}
                                    value={tag}
                                    onChange={handleTags}
                                />
                                <label className='form-label' htmlFor={`tag${index}`}>{tag}</label>
                            </div>
                        ))}
                    </div>

                    <div className="form-check">
                        <input
                            type="checkbox"
                            className='form-check-input'
                            id='published'
                            name='published'
                            checked={formData.published}
                            onChange={handleInputs}
                        />
                        <label className='form-check-label' htmlFor="published">Pubblicato</label>
                    </div>
                    <button
                        className="btn btn-primary my-4"
                        type='submit'>
                        Invia
                    </button>
                </form>

                <div className='border px-3 py-3'>
                    <h4>Lista Post</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Immagine</th>
                                <th scope="col">Titolo</th>
                                <th scope="col">Contenuto</th>
                                <th scope="col">Categeoria</th>
                                <th scope="col">Tags</th>
                                <th scope="col">Pubblicato</th>
                                <th scope="col">Azioni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <tr key={post.id}>
                                    <th scope="row">
                                        <img src={post.imgUrl} alt={post.title} />
                                    </th>
                                    <td>{post.title}</td>
                                    <td>{post.content}</td>
                                    <td>{post.category}</td>
                                    <td>{post.tags.join(',')}</td>
                                    <td>{post.published ? 'Si' : 'No'}</td>
                                    <td>
                                        <button
                                            className='btn btn-warning'
                                            onClick={() => handleRemovePost(post.id)}
                                        >
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FormBlog