import { Link } from 'react-router-dom'
import '../../style/BasicStyle.css'

function Footer () {
    return (
        <div className='ml-40 mr-40 mt-20 mb-8'>
            <div className="h-0.5 w-auto bg-zinc-800  mt-8 mb-4"></div>
            <div className='flex flex-row justify-between mt-8'>
                <div className='text-zinc-300 flex flex-row gap-10 text-sm'>
                    <Link to="/">Accueil</Link>
                    <Link to="/exercices">Exercices</Link>
                    <Link to="/apropos">A propos</Link>
                    <Link to="/classement">Classement</Link>
                </div>

                <div className='text-zinc-400 text-sm'>
                    © 2024 PhyRank. Tous droits reservés.
                </div>
            </div>
        </div>
    )
}

export default Footer