import { Helmet } from 'react-helmet';
import '../../style/BasicStyle.css';
import { Link } from 'react-router-dom';
import fleche from '../../assets/fleche.png'

function Home () {
    return (
        <div className=' lg:ml-40 lg:mr-40 lg:mt-20 md:ml-20 md:mr-20 md:mt-10 ml-8 mr-8 mt-4'>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Helmet>
            <div className="p-8 text-center text-5xl poppins-bold lg:text-left">Le défi physique ultime avec classement intégré !</div>
            <div className='flex lg:flex-row justify-between flex-col items-center lg:items-start'>
            <p className='text-zinc-400 w-2/3 sm:p-8 pt-8 pb-8'>
  👋 Bienvenue sur <span className='text-white'>Phyrank</span> 🚀, votre destination incontournable pour perfectionner vos compétences en physique tout en vous mesurant aux autres passionnés. <br/>Explorez nos exercices stimulants, grimpez dans le classement 🔝, et laissez-vous inspirer par la science qui nous entoure 🌌. Prêt à relever le défi ? Rejoignez-nous dès maintenant sur <span className='text-white'>Phyrank</span> 🌟 !
</p>

<div className='flex flex-col gap-4'>
<Link to='/classement' className='bg-blue-600 p-4 pr-6 pl-6 rounded-full h-fit mr-10 hover:bg-blue-500 transition-all active:bg-blue-700 w-48 text-center'>Voir le classement</Link>

<img src={fleche} alt='fleche' className='w-32 h-32 -rotate-90 invert opacity-80 -ml-16 hidden lg:block'/>
</div>
</div>



        <div className='w-auto h-0.5 bg-gradient-to-r to-zinc-600 from-blue-500 mt-10'></div>


        <div>
            <div className='p-8 poppins-semibold text-xl'>Quelques statistiques</div>
            <div className='pl-8 pr-8 text-zinc-400'>Voici une liste des quelques statistiques du site</div>

            <div className='flex flex-col sm:flex-row p-8 gap-8 sm:gap-0'>
                <div className='w-auto h-40 sm:w-96 sm:h-96 border rounded-xl border-zinc-700 p-4 flex flex-col justify-center items-center relative'>
                    <div className='w-1 h-1 sm:w-3 sm:h-3 bg-red-500 rounded-full absolute sm:top-4 sm:right-4 right-2 top-2 animate-ping duration-1000'></div>
                    <div className='text-2xl font-bold text-center'>Nombre de connectés</div>
                    <div className='text-sm text-zinc-600'>(en direct)</div>
                    <div className='poppins-bold text-3xl text-blue-500 mt-10'>20</div>
                </div>
                <div className='flex flex-col sm:justify-between gap-8 sm:gap-0 sm:ml-20 sm:w-4/6 w-auto'>
                <div className='w-auto h-40 border rounded-xl border-zinc-700 p-4 flex flex-col justify-center items-center'>
                    <div className='text-2xl font-bold text-center'>Exercices résolus</div>
                    <div className='poppins-bold text-3xl text-blue-500 mt-10'>2520</div>
                </div>
                <div className='w-auto h-40 border rounded-xl border-zinc-700 p-4 flex flex-col justify-center items-center'>
                    <div className='text-2xl font-bold text-center'>Utilisateurs inscrits</div>
                    <div className='poppins-bold text-3xl text-blue-500 mt-10'>78</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Home