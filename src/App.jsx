import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import { Navbar } from './components/navBar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <MainLayout>
              <Navbar />
              <main>
                <Hero />
                <Services />
                <About />
              </main>
              <Footer />
            </MainLayout>
          )}
        />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;