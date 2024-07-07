import '../../style/BasicStyle.css';
import { classement } from '../../data/Classement.js';

function Classement() {
    // Trier le classement par XP décroissant
    const sortedClassement = [...classement].sort((a, b) => b.xp - a.xp);

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center w-screen">
                <h1 className="poppins-bold text-3xl m-8">Leaderboard</h1>
                <div className=" flex flex-col gap-4">
                    {sortedClassement && sortedClassement.length > 0 ? (
                        sortedClassement.map((user, index) => (
                            <div key={index} className="">
                                <div className="gap-16 flex flex-row justify-between items-center w-auto">

                                  <div className='text-xl poppins-bold'>{index+1} </div>
                                  <div className='flex flex-row gap-10 items-center'> 
                                  <img src={user.picture} alt={`${user.pseudo}'s avatar`} className=" size-12 invert" />
                                  <div className='flex flex-row gap-10 bg-blue-700 pl-3 pr-3  rounded-lg w-48 justify-between'> 
                                  <div className="">{user.pseudo}</div>
                                  <div className="poppins-bold text-lg">{user.xp}</div>
                                  </div>
                                  </div>
                                  
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Classement;
