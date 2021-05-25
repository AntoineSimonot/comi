import React, { useState } from "react";
import "./ContentOfFormation.scss";

const ContentOfFormation = (props) => {
  let { setTrigger, title } = props;

  const [content, setContent] = useState([
    {
      title: "Lutte contre le blanchiment et le financement du Terrorisme.",
      type: "text",
      content: [
        "L’assurance habitation est obligatoire pour les locataires, y compris les locataires de logements meublés, et les co-propriétaires (propriétaires d’un lot dans une copropriété). L’obligation d’assurance pour les co-propriétaires se limite à la garantie responsabilité civile envers la copropriété, les voisins et tiers ainsi que les éventuels locataires.",
        "L’assurance habitation permet de protéger le patrimoine familial. La plupart des assureurs proposent des assurances multirisques habitation (MRH). Ce type de contrat couvre principalement les dommages aux biens, la responsabilité civile de l’assuré et la responsabilité civile « vie privée ».",
        "Le contrat multirisques habitation (MRH) couvre les dommages qui pourraient affecter les biens de l’assuré : incendie, dégât des eaux, gel des canalisations, catastrophe naturelle et tempête, cambriolage et vandalisme, bris de glace. En principe, les espèces, titres et valeurs, les biens professionnels et les véhicules ne sont pas garantis par le contrat MRH. Les objets de valeurs sont garantis en fonction des contrats.",
        "- Locaux à usage d’habitation (maison ou appartement) - Clôtures et murs de soutènement - La quote-part des parties communes si vous êtes copropriétaires - Les dépendances (principalement construites en dur) - Les garages et les caves - Aménagements immobiliers - Vérandas (si déclarée lors de la souscription)",
        "- Bâtiments en cours de construction - Plantations, végétaux - Installations d’éclairage ou de loisirs - Canalisations extérieures - Abris de jardin",
        "Cette garantie permet d'indemniser vos voisins et les tiers victimes de dommages dont vous seriez responsable (dégât des eaux, incendie prenant naissance à l'intérieur de votre domicile et causant à autrui des dommages).",
        "- Une société d’assurances - Un agent général d’assurance - Un courtier - Une banque",
        "N’hésitez pas à vous adresser à plusieurs agents afin de comparer leurs propositions car les tarifs fixés par les compagnies d'assurance sont libres. Ils peuvent donc varier d'une compagnie à l'autre. La proposition d'assurance doit obligatoirement comprendre une fiche d'information sur les prix et les garanties, ainsi qu'un exemplaire et ses annexes ou une notice d'information détaillée.",
        "- Les limites de garanties - Les conditions de déclenchement de la garantie pour les contrats de responsabilité (déclenchement par le fait dommageable ou par réclamation) - La loi applicable et les instances à saisir en cas de litige",
        "Si le contrat d'assurance vous convient, vous devez le signer et le renvoyer à l'assureur. Il vous transmettra une attestation qui prouve l'existence du contrat.",
        "Le montant de votre cotisation ou prime d’assurance est fixé par votre assureur à la souscription du contrat. Il est généralement calculé en fonction du formulaire de déclaration de risques que vous avez rempli pour demander à votre à votre assureur de couvrir votre logement.",
        "- Le lieu de résidence - La valeur du logement et des biens assurés - La superficie du logement - Votre statut (locataire ou propriétaire) - Le montant des franchises (plus le montant de la cotisation est bas et plus le montant des franchises est élevé) - Les taxes sur les produits d’assurances reversées par les assureurs au Trésor public et qui sont répercutées dans le tarif du contrat (taxe fiscale de 30 % et « taxe terrorisme » de 5,90 € par contrat prélevée pour financer le Fonds de garantie des victimes des actes de terrorisme et d'autres infractions).",
        "Oui. si votre contrat contient une clause de révision, votre assureur peut augmenter chaque année le montant de votre prime d’assurance. Vous pouvez refuser cette augmentation en procédant à la résiliation de votre contrat d’assurance pour augmentation de la prime, dans les 15 jours suivant la réception de l’avis d’échéance. Votre assureur peut aussi réévaluer votre cotisation via le mécanisme de l’indexation. La hausse des primes et des garanties est liée à la progression d’un indice représentatif de la hausse des prix dans un domaine (par exemple l'indice de référence de la Fédération française du bâtiment FFB). Si vous avez signé un contrat indexé, le montant de l’indice doit figurer sur votre avis d’échéance.",
        "- Le paiement en une seule fois lors de l’échéance (date d’anniversaire du contrat) - Le paiement en plusieurs fois au cours de l’année si votre contrat prévoir un fractionnement de cotisation (mensuellement, trimestriellement ou semestriellement). Chacune de ces échéances de paiement intermédiaires est une échéance secondaire.",
        "Vous disposez d’un délai de 10 jours à compter de la date d’échéance indiquée dans votre contrat pour vous acquitter de votre prime d’assurance. Si ce délai est dépassé, votre assureur vous adressera une lettre de mise en demeure en AR. 30 jours après l’expiration de ce délai, votre contrat d’assurance habitation sera suspendu pour non paiement de votre cotisation.",
        "Vous pouvez résilier votre contrat d'assurance avant son échéance. Vous devez adresser votre demande à votre assureur par lettre recommandée avec avis de réception (AR) dans les cas prévus aux conditions générales de votre contrat."
      ]
    },
  ]);

  console.log(content);

  return (
    <div className="contentOfFormation-Body">
      <div className="title">
        <img
          onClick={() => props.setTrigger(false)}
          src="./img/mail/back.png"
          alt=""
          srcset=""
        />
        <p>{title}</p>
      </div>
      <div className="bodyContent">
          <div className="content">

          </div>
      </div>
    </div>
  );
};

export default ContentOfFormation;
