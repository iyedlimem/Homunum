import { Suspense, useState, lazy, useEffect } from 'react'

import './App.css'




import { HashRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { fetchArticles } from './hooks/blog';



const Home = lazy(() => {
  return Promise.all([
    import("./pages/Home"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});

const Simulator = lazy(() => {
  return Promise.all([
    import("./pages/Simulator"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});
const Guide = lazy(() => {
  return Promise.all([
    import("./pages/Guide"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});
const Blog = lazy(() => {
  return Promise.all([
    import("./pages/Blog"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});

const ArticleFull = lazy(() => {
  return Promise.all([
    import("./pages/ArticleFull"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});

function App() {

  return (


    <HashRouter>


      <Suspense fallback={<p> loading ..</p>}>
        <div className='layout'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/Simulator' element={<Simulator />} />
            <Route path='/Guide' element={<Guide />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path="/article/:id" element={<ArticleFull />} />
          </Routes>
        </div>
      </Suspense>


    </HashRouter>
  )
}

export default App
