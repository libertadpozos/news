import { useEffect, useState } from 'react';
import '../styles/App.css';

function App() {
  const [ data, setData ] = useState();
  const [ loading, setLoading ]= useState(true);

  useEffect(() => {
    async function getData() {
      const request = fetch('http:///0.0.0.0:8000/v1/news');
      const response = await request;
      const parsed = await response.json();
      setLoading(false);
      console.log(parsed);
      setData(parsed);
    }
    getData();
  }, []);

  return (
    <>
    {loading ? <p>Loading</p>
    : 
    <div>
      <h1>Liberty News</h1>
      <ul>
        {data.articles.map((article, index)=>{
          return(<li key={index}>{article.author}</li>)
        })}
      </ul>
    </div>}
    </>
  );
}

export default App;
