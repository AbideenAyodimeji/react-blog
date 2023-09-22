import { Link } from 'react-router-dom'
import './index.css'

const Bloglist = ({ blogs, title }) => {
  // const blog = props.blogs
  // const title = props.title

  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className=''>
          <Link className='blog-preview' to={`/blogs/${blog.id}`}>
            <div className='left'>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Bloglist
