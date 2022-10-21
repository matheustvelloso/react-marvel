import { memo } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import Character from 'pages/Character';
import Comic from 'pages/Comic';
import Comics from 'pages/Comics';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/comics/:id" element={<Comic />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default memo(Routes);
