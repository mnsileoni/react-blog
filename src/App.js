import {React} from 'react';
import Layout from './Layout';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout
          // search={search}
          // setSearch={setSearch}
        />}>
          <Route index element={<Home/>} />
          <Route path="post">
            <Route index element={<NewPost/>}/>
            <Route path="/post/:id" element={<PostPage/>}/>
          </Route>
          <Route path="/edit/:id" element={<EditPost />}/>
          <Route path="about" element={<About />}/>
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
