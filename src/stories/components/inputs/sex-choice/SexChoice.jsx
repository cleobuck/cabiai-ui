import React from 'react'
import "./SexChoice.scss";

import PropTypes from "prop-types";

import Neutral from "./assets/iel.svg"
import Male from "./assets/male.svg"
import Female from "./assets/female.svg"

import NeutralActive from "./assets/iel-active.svg"
import MaleActive from "./assets/male-active.svg"
import FemaleActive from "./assets/female-active.svg"



export default function SexChoice({type, active}) {
  return active? 
  
  <button className={`sex-choice-button ${active ? "-active": ""}`}> 
 
{type === 0 && <> <img src={NeutralActive} alt="indifférent actif" /> Indifférent </> }
{type === 1 && <> <img src={FemaleActive} alt="femme actif" /> Femme </>}
{type === 2 && <> <img src={MaleActive} alt="homme actif" /> Homme </>}
</button> 
:
<button className="sex-choice-button"> 
{type === 0 && <> <img src={Neutral} alt="indifférent inactif" /> Indifférent </>}
{type === 1 && <>  <img src={Female} alt="femme inactif" /> Femme </>}
{type === 2 && <> <img src={Male} alt="homme inactif" />Homme </>}
</button>

    }

SexChoice.propTypes = {
  type: PropTypes.number,
  active: PropTypes.bool
}


