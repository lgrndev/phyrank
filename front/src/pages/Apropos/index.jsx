import '../../style/BasicStyle.css'

import styled from 'styled-components'
import tw from 'twin.macro'
import { Helmet } from 'react-helmet'

const Styledh1 = styled.h1`
    ${tw`
        text-3xl
    `}
`

const Styledh2 = styled.h2`
    ${tw`
        text-xl
    `}; 
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-style: normal;
`

const StyledBody = styled.div`
    ${tw`
        mr-40 ml-40 mt-20 flex flex-col gap-10
    `}
`

function Apropos () {
    return (
        <StyledBody>
            
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Helmet>
    
    <Styledh1 className='poppins-bold'>Mentions légales</Styledh1>

    <Styledh2>1. Présentation du site</Styledh2>
    <p> <strong>Propriétaire du site :</strong><br/>
    Nom : LANGRAND Lucas<br/>
    Adresse : 137 Avenue de la Grande Seiglière, Saint Bernard 01600<br/>
    Téléphone : +33 5 85 58 47 55<br/>
    Email : contact@phyrank.fr </p>

    <Styledh2>2. Conditions générales d'utilisation du site et des services proposés</Styledh2>
    <p>L’utilisation du site PhyRank implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site PhyRank sont donc invités à les consulter de manière régulière.</p>

    <Styledh2>3. Description des services fournis</Styledh2>
    <p>Le site PhyRank a pour objet de fournir une information concernant l’ensemble des activités de la plateforme. Le propriétaire du site s’efforce de fournir sur le site PhyRank des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>

    <Styledh2>4. Propriété intellectuelle et contrefaçons</Styledh2>
    <p>Le propriétaire du site détient les droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : PhyRank.</p>

    <Styledh2>5. Limitations de responsabilité</Styledh2>
    <p>Le propriétaire du site ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site PhyRank, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>

    <Styledh2>6. Gestion des données personnelles</Styledh2>
    <p>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobr/e 1995.</p>
    <p>À l’occasion de l’utilisation du site PhyRank, peuvent êtres recueillies : l’URL des liens par l’intermédiaire desquels l’utilisateur a accédé au site PhyRank, le fournisseur d’accès de l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur.</p>
    <p>En tout état de cause PhyRank ne collecte des informations personnelles relatives à l’utilisateur que pour le besoin de certains services proposés par le site PhyRank. L’utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur saisie. Il est alors précisé à l’utilisateur du site PhyRank l’obligation ou non de fournir ces informations.</p>
    <p>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p>
    <p>Aucune information personnelle de l’utilisateur du site PhyRank n’est publiée à l’insu de l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l’hypothèse du rachat de PhyRank et de ses droits permettrait la transmission des dites informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis-à-vis de l’utilisateur du site PhyRank.</p>

    <Styledh2>7. Liens hypertextes et cookies</Styledh2>
    <p>Le site PhyRank contient un certain nombr/e de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de PhyRank. Cependant, PhyRank n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
    <p>La navigation sur le site PhyRank est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
    <p>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</p>
    <ul>
        <li><strong>Sous Internet Explorer :</strong> onglet outil (pictogramme en forme de rouage en haut à droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</li>
        <li><strong>Sous Firefox :</strong> en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l’onglet Options. Cliquer sur l’onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l’historique. Enfin décochez-la pour désactiver les cookies.</li>
        <li><strong>Sous Safari :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.</li>
        <li><strong>Sous Chrome :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences. Dans l’onglet "Confidentialité", vous pouvez bloquer les cookies.</li>
    </ul>

    <Styledh2>8. Droit applicable et attribution de juridiction</Styledh2>
    <p>Tout litige en relation avec l’utilisation du site PhyRank est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>

    <Styledh2>9. Les principales lois concernées</Styledh2>
    <ul>
        <li>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux libertés.</li>
        <li>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.</li>
    </ul>

    <Styledh2>10. Lexique</Styledh2>
    <p><strong>Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.</p>
    <p><strong>Informations personnelles :</strong> « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>

    </StyledBody>
    )
}

export default Apropos