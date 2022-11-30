import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from '../Components/Header/Header';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap";


function App() {

  const Client = lazy(() => import('../Pages/ClientsPage/Client'))
  const Libraryes = lazy(() => import('../Pages/LibraryPage/Libraryes'))
  const Book = lazy(() => import('../Pages/Book/Book'))
  const Author = lazy(() => import('../Pages/Author/Author'))
  const Query = lazy(() => import('../Pages/Query/Query'))

  const CDinamic = lazy(() => import('../Pages/Dinamic/CDinamic'))
  const LDinamic = lazy(() => import('../Pages/Dinamic/LDinamic'))
  const BDinamic = lazy(() => import('../Pages/Dinamic/BDinamic'))
  const ADinamic = lazy(() => import('../Pages/Dinamic/ADinamic'))

      return (
      <Suspense>
          <div className="App"> 
          <Navbar/>
          </div>
          <Routes>
              <Route exact path="/" element={<Libraryes />} />
              <Route exact path="/library" element={<Libraryes />} />
              <Route exact path="/library/:id" element={<LDinamic />} />
              <Route exact path="/client" element={<Client />} />
              <Route exact path="/client/:id" element={<CDinamic />} />
              <Route exact path="/book" element={<Book />} />
              <Route exact path="/book/:id" element={<BDinamic />} />
              <Route exact path="/author" element={<Author />} />
              <Route exact path="/author/:id" element={<ADinamic />} /> 
              <Route exact path="/query" element={<Query />} />
            </Routes>
      </Suspense>
  );
}

export default App;
