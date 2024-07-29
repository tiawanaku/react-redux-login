// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/authSlice';
import Login from './components/Login';
import HomeMercedario from './components/HomeMercedario';
import HomeIngavi from './components/HomeIngavi'; // Importa el componente HomeIngavi

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const role = useSelector((state) => state.auth.role); // Selecciona el rol del estado

  let HomeComponent;

  // Decide qué componente renderizar en función del rol del usuario
  if (role === 'ingavi') {
    HomeComponent = HomeIngavi;
  } else {
    HomeComponent = HomeMercedario;
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <HomeComponent /> {/* Renderiza el componente basado en el rol */}
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
