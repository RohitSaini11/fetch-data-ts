import { useEffect, useState } from 'react';
import './App.css';
import Tabs from './Tabs';
import Table from './Table';

function App() {

  const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
  const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

  const [url,setUrl] = useState<string>(USERS_URL);
  const [data,setData] = useState<Object[]>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [fetchErr,setFetchErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async ()=>{
      try {
          setIsLoading(true);
          const response = await fetch(url);
          if(!response.ok) throw Error('Unable to fetch data!');
          const result = await response.json();
          console.log(result);
          setData(result);
          setFetchErr(null);
      } 
      catch(error: any) {
          setFetchErr(error.message);
      } 
      finally{
        setIsLoading(false);
      }
    }
    
    fetchData();
  },[url])

  return (
    <div className="App">
      <Tabs users={USERS_URL} posts={POSTS_URL} comments={COMMENTS_URL} url={url} setUrl={setUrl}/>

      {isLoading && <p className="loader">Loading....</p> }
      {fetchErr && !isLoading && <p className="loader" style={{color:'red'}}>ERROR : {fetchErr} </p> }
      
      {!isLoading && !fetchErr && <Table data={data} />}

    </div>
  );
}

export default App;
