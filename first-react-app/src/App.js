import logo from './logo.svg';
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
      <div className="blog-card" key={item.id}>
        <h3>{item.title} - {item.id}</h3>
        <p>{item.description}</p>
      </div>
    )
  });


  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
