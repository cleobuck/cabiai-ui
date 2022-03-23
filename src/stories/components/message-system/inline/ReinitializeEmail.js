import React from "react";

export default function ReinitializeEmail({ email }) {
	return (
		<>
			Un lien pour réinitialiser ton mot de passe a été envoyé par e-mail à{" "}
			{email}. Si tu ne reçois pas, vérifie l’adresse email saisie.
		</>
	);
}
