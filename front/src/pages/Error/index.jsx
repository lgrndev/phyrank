import ErrorImg from '../../assets/error.png'
import { Link } from 'react-router-dom'

function Error () {
    return (
        <div className="text-center  p-20 flex flex-col justify-center items-center gap-10">
            <div className='poppins-bold text-4xl'>Page non trouvée</div>
            <img src={ErrorImg} alt='Error' className='size-40'></img>
            <Link to='/' className='bg-blue-600 p-4 pr-6 pl-6 rounded-full hover:bg-blue-500 hover:-translate-y-1 transition-all active:translate-y-1'>Retourner à l'accueil</Link>
        </div>
    )
}

export default Error