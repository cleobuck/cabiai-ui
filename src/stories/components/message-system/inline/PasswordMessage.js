import React from "react";

export default function PasswordMessage() {
	return (
		<>
			Tes mots de passe ne correpondent pas. Vérifie que tu as bien saisi tes
			mots de passe
			<span className="password-error-show"> Afficher les mots de passe </span>
		</>
	);
}
