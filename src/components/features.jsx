import React from 'react'; 
import '../scss/components/_features.scss';
import '../scss/style.scss'

// Définition du composant Features
function Features({ featuresList }) {
    return (
        <section className="features">
            {featuresList.map((feat) => (
                <div className="feature-item" key={feat.id}>
                    <img src={feat.icon} alt="chat icon" className="feature-icon" width="100" height="auto"/>
                    <h3 className="feature-item-title">{feat.title}</h3>
                    <p>{feat.text}</p>
                </div>
            ))}
        </section>
    );
}

export default Features;

// Ce composant prend en entrée une prop featuresList, qui est un tableau d'objets.
    // Chaque objet représente une caractéristique (ou "feature") et contient les propriétés id, icon, title et text.