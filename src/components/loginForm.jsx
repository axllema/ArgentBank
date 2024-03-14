// Importation de React
import React from 'react';
import Field from '../components/field.jsx';
import Button from '../components/field.jsx';
import '../scss/components/_loginForm.scss';


// Définition du composant LoginForm
// Ce composant reçoit plusieurs props : handleSubmit, errorMessage, setCredentials et credentials
function LoginForm({ handleSubmit, errorMessage, setCredentials, credentials }) {
    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <p className="error-login">{errorMessage}</p>}
            <Field 
                label="Username"
                type="text"
                content="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <Field 
                label="Password"
                type="password"
                content="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>

            <Button
                type="submit"
                className="sign-in-button"
                content="Sign In"
            />
        </form>
    );
}

export default LoginForm;
// Ce fichier définit un composant React appelé LoginForm qui affiche un formulaire de connexion.
 // Le formulaire contient des champs pour le nom d'utilisateur et le mot de passe, une case à cocher pour se souvenir de l'utilisateur,
 // et un bouton pour soumettre le formulaire.

 // Lorsque les valeurs des champs changent, l'état credentials est mis à jour avec les nouvelles valeurs.
 //Lorsque le formulaire est soumis, la fonction handleSubmit est appelée.
