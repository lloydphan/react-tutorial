import BlogCard from './components/blogcard';
import './App.css';

function App() {

  const blogObj = [{
    id : 1,
    title : 'Blog Title 1',
    description : 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem, Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem '
  },
  {
    id : 2,
    title : 'Blog Title 2',
    description : 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem, Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem '
  },
  {
    id : 3,
    title : 'Blog Title 3',
    description : 'Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem, Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem Lorem Ipsum Dolor Lorem '
  }
  ]

  const blogCards = blogObj.map((item, pos) => {
    return (
      <BlogCard className='Blog' key={pos} title={item.title} description={item.description} id={item.id} />
    )
  });


  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
