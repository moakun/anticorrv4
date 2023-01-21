import React from 'react';
import Hero from '../../Assets/SogeaHero.jpg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Body() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="w-full relative">
        <div className="w-full h-full bg-blue-800 top-0 left-0 absolute opacity-20"></div>
        <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
          <div className="flex flex-col justify-center items-center bg-blue-600 p-20 rounded bg-opacity-50 shadow-inner">
            <div className="text-4xl font-bold text-white font-poppins relative bottom-10">
              Formation Anti-Corruption
            </div>
            <div className="text-lg text-white font-poppins relative bottom-2">
              Sogea Satom bénin
            </div>

            <button
              onClick={handleClickOpen}
              className="bg-white font-poppins p-2 rounded hover:text-blue-600 hover:bg-white transition ease-in delay-20 relative top-5"
            >
              Commencer
            </button>
          </div>
        </div>
        <img src={Hero} alt="heroImage" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-poppins relative top-2 font-bold text-xl m-5">
          Guide D'utilisation
        </h1>
        <div>
          <ul className="font-poppins flex flex-col justify-center items-center border-2 border-black rounded p-5 mt-5 mb-5">
            <li className="m-2">1. Créer Votre Compte</li>
            <li className="m-2">2. Connectez-Vous à votre compte</li>
            <li className="m-2">3. Faire la Formation</li>
            <li className="m-2">4. Faire le Test</li>
            <li className="m-2">
              5. Après avoir réussi le test veuillez Télécharger votre
              Attestation
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Commencer La formation Anti-Corruption?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Vous êtes sur le point de commencer la formation Anti-Corruption.
              Si vous selectionez "OUI", la video commencera automatiquement.
              Veuillez être prêt pour faire la formation! Êtes-vous sûr de
              vouloir continuer?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              <span className="font-poppins text-red-900">Non</span>
            </Button>
            <Link to="/course">
              <Button autoFocus>
                <span className="font-poppins">Oui</span>
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Body;
