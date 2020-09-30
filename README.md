

Le liens pour faire le debut de l'application : https://www.ie-concept.fr/utiliser-expressjs-avec-electron/

# Important 

si vous voulez coder sur le localhost:3000 alors dans le package.json mettre dans script "start": "node ./main-without-electron.js" sinon "start": "electron ."


# Veille framework ElectronJs :

En terme de développement, une application Electron est par essence une application Node.js. Le point de départ est un package.json qui est identique à celui d’un module de Node.js.


Les applications Electron sont développées en JavaScript en utilisant les mêmes principes et méthodes que celles que l'on trouve dans le développement avec Node.js. Toutes les API et fonctionnalités que l'on trouve dans Electron sont accessibles par le module electron, qui peut être requis comme tout autre module Node.js :

const electron = require('electron')


# électron c'est quoi  ?
Electron est une librairie open source développé par GitHub pour créer des applications bureau multi-platform (mac Windows linux) développer avec des techno web HTML, CSS et JavaScript. Electron se base sur le natigateur libre Chromium et sur NodeJS.<br>

Exemple de logiciel de bureau : VSC Twitch sont développer avec électron<br>

Avantages :
<ul>
<li>installation rapide</li>
<li>languages web (html, css, js)</li>
<li>même fonctionnalité que le web</li>
<li>fonctionnalité deja faites par la communauté </li>
<li>framework js utilisable angular vue next</li>

</ul>


Inconvénients : ?<br>


# technos pour utiliser électron

VCS, Node js,Git

# Sources :
<ul>
<li>docu electrons</li>

</ul>

# installation : 

 Clonez le dépôt Quick Start
$ git clone https://github.com/electron/electron-quick-start

 Allez dans le dépôt
$ cd electron-quick-start

 Installez les dépendances et lancez l'app
$ npm install && npm start


##################################################

# dictionnaire de données au format .md 

<h1>user</h1>
<table>
    <thead>
    <th>nom</th>
    <th>type</th>
    <th>description</th>
    </thead>
    <tbody>
    <tr>
        <td>entreprise</td>
        <td>texte()</td>
        <td>nom de l'entreprise</td>
    </tr>
    <tr>
        <td>nom</td>
        <td>texte(15)</td>
        <td>nom de l'individu</td>
    </tr>
    <tr>
        <td>prenom</td>
        <td>texte(15)</td>
        <td>prenom de l'individu</td>
    </tr>
    <tr>
        <td>fonction</td>
        <td>text(20)</td>
        <td>fonction exercé</td>
    </tr>
    <tr>
        <td>klm-parcouru</td>
        <td>integer</td>
        <td>somme kilometre parcouru pour cette utilisateur</td>
    </tr>
    </tbody>
</table>

<h1>véhicules</h1>
<table>
    <thead>
    <th>nom</th>
    <th>type</th>
    <th>description</th>
    </thead>
    <tbody>
    <tr>
        <td>marque</td>
        <td>texte()</td>
        <td>marque du vehicles</td>
    </tr>
    <tr>
        <td>modele</td>
        <td>texte(15)</td>
        <td>Modèle du véhicules</td>
    </tr>
    <tr>
        <td>puissance</td>
        <td>integer</td>
        <td>puissance de la voiture en ch</td>
    </tr>
    <tr>
        <td>annee</td>
        <td>date</td>
        <td>année de la mise en circulation du véhicules</td>
    </tr>
    <tr>
        <td>immatriculation</td>
        <td>varchar</td>
        <td>immatriculation du véhicules</td>
    </tr>
    <tr>
        <td>status</td>
        <td>integer</td>
        <td>1= dispo 2= non dispo</td>
    </tr>
    <tr>
        <td>kilometrage_total</td>
        <td>integer</td>
        <td>le kilometrage du véhicules apres derniere utilisations</td>
    </tr>
    </tbody>
</table>

<h1>suivi</h1>
<table>
    <thead>
    <th>nom</th>
    <th>type</th>
    <th>description</th>
    </thead>
    <tbody>
    <tr>
        <td>user_id</td>
        <td>interger</td>
        <td>user id</td>
    </tr>
    <tr>
        <td>vehicules_id</td>
        <td>integer</td>
        <td>id du vehicules</td>
    </tr>
    <tr>
        <td>compteur_depart</td>
        <td>integer</td>
        <td>relevé de compteur au départ</td>
    </tr>
    <tr>
        <td>compteur_arrive</td>
        <td>integer</td>
        <td>relevé de compteur au retour</td>
    </tr>
    <tr>
        <td>kilometres_parcourus</td>
        <td>integer</td>
        <td>kilomètres parcourus</td>
    </tr>
    <tr>
        <td>montant_indemnité</td>
        <td>integer</td>
        <td>montant des indemnités</td>
    </tr>
    </tbody>
</table>


<h1>trajet</h1>
<table>
    <thead>
    <th>nom</th>
    <th>type</th>
    <th>description</th>
    </thead>
    <tbody>
    <tr>
        <td>lieu_depart</td>
        <td>texte()</td>
        <td>lieu de depart </td>
    </tr>
    <tr>
        <td>lieu_arrivee</td>
        <td>texte()</td>
        <td>lieu d'arrivée </td>
    </tr>
    <tr>
        <td>objet_deplacement</td>
        <td>texte</td>
        <td>choix :Client, Projet, Réunion </td>
    </tr>
    </tbody>
</table>







