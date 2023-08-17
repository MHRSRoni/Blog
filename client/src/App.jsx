import SignupPage from './components/page/SignupPage';
import LoginPage from './components/page/LoginPage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import CreateBlogPage from './components/page/CreateBlogPage';
import BlogListPage from './components/page/BlogListPage';
import BlogPage from './components/page/BlogPage';
import { ToastContainer } from 'react-toastify';
import Test from './components/page/Test';
import UpdateBlogPage from './components/page/UpdateBlogPage';

function App() {
  

  return (
    <>

    {/* for toast  */}
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<Test />}  />
          <Route path='/signup' element={<SignupPage />}   />
          <Route path='/login' element={<LoginPage />}   />
          <Route path='/create-blog' element={<CreateBlogPage />} />
          <Route path='/blog' element={<BlogListPage />}  />
          <Route  path="/blog/:id" element={<BlogPage />}  />
          <Route  path="/blog/update/:id" element={<UpdateBlogPage />}  />

        </Routes>
      
      
      </BrowserRouter>
      
    </>
  );
}

export default App;
