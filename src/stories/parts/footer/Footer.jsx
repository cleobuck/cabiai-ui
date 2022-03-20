import React from 'react'
import Facebook from "./assets/Facebook.svg";
import Discord from "./assets/Discord.svg";
import Instagram from "./assets/Instagram.svg";
export default function Footer() {
  return (
    <footer>

<nav> 
        <ul> 

            <li>A propos

                <ul>
                    <li>Qui sommes-nous ?</li>
                    </ul>

            </li>
            <li>Fonctionnement du site
                <ul> 
                    <li>Publier une annonce</li>
                    <li>Consulter les annonces</li>
                    <li>Voir les destinations</li>
                    <li>Découvrir vos avantages</li>
                </ul>
            </li>
            <li>Assistance

                <ul>
                    <li>FAQ</li>
                    <li>Qu’est-ce que le covoyage ?</li>
                    <li>Guide du covoyage</li>
                    <li>Signaler un problème ?</li>
                </ul>
            </li>
            <li>Contact

                <ul>
                    <li>Nous contacter</li>
                    <li>Travailler ensemble</li>
                   
                </ul>
            </li>


        </ul>
        </nav>
<nav>

    <ul> 
        <li><img src={Facebook} alt="click-facebook"/></li>
        <li><img src={Instagram} alt="click-facebook"/></li>
        <li><img src={Discord} alt="click-facebook"/></li>
      
        </ul> 

     <small> &copy;Cabiai 2021 </small>  
     <nav> 
         <ul><li>Confidentialité • </li>
         <li>Mention légales • </li>
         <li>Plan du site </li></ul>
     </nav>

</nav>
    </footer>
  )
}
