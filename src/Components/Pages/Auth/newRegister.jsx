import React, { useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { useRegister } from '../../../Hooks/useRegister';
import { Link } from 'react-router-dom';
import Loading from './buildingBlocks';
import './waves.css';

const newRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoading, error } = useRegister();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(firstName, lastName, userName, companyName, password);
  };
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="h-screen bg-blue-500 z-40">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-2xl lg:max-w-xl relative top-4">
            <h1 className="text-3xl font-semibold font-poppins text-center text-blue-700">
              Créer Votre Compte
            </h1>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Prénom:
                </label>
                <input
                  required
                  placeholder="Votre Prénom Ici:"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="firstName"
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Nom:
                </label>
                <input
                  required
                  placeholder="Votre Nom Ici:"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="lastName"
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Nom D'utilisateur:
                </label>
                <input
                  required
                  placeholder="Votre Nom D'utilisateur Ici:"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  name="userName"
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Nom De La Société:
                </label>
                <input
                  required
                  placeholder="Le Nom De Votre Société Ici:"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  name="Company Name"
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800 font-poppins">
                  Mot De Passe:
                </label>
                <input
                  required
                  placeholder="Votre Mot de passe Ici:"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  className="font-poppins block w-full px-4 py-2 mt-2 text-blue-700 bg-white border border-2 border-blue-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full font-poppins px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Créer Votre Compte
                </button>
              </div>
              <div className="font-poppins">
                Vous avez déja un compte? Connectez-vous
                <Link to="/login">
                  <span className="font-poppins text-blue-900 m-2 font-bold underline">
                    Ici!
                  </span>
                </Link>
              </div>
              {error && (
                <Alert severity="error">
                  <AlertTitle>Erreur</AlertTitle>
                  {error}
                  <strong> - Veuillez y jeter un oeil</strong>
                </Alert>
              )}
            </form>
          </div>
          <footer>
            <div>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="0"
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
              </svg>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default newRegister;
