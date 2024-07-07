function Login () {
    return (
        <div className="m-20 flex flex-row items-center justify-center gap-20 flex-wrap">
            <div className=" flex flex-col items-center justify-center border-2 border-blue-500 p-8 rounded-xl ">
                <div className="poppins-bold text-4xl pb-8 text-white">Connexion</div>
                <label for="username" className=" text-lg">Nom d'utilisateur</label>
                <input type="text" id="username" name="username" minlength="4" maxlength="8" className="text-black p-2 rounded-full mt-2 mb-8"></input>
                <label for="password" className=" text-lg">Mot de passe</label>
                <input type="password" id="password" name="password" maxlength="16" className="text-black p-2 rounded-full mt-2 mb-8"></input>
                <button className="bg-blue-600 pl-6 pr-6 p-2 rounded-full hover:bg-blue-500 transition-all">Se connecter</button>
            </div>
            <div className="poppins-bold">
                Ou
            </div>
            <div className=" flex flex-col items-center justify-center border-2 border-blue-500 p-8 rounded-xl w-80">
                <div className="poppins-bold text-4xl pb-8 text-white">Inscription</div>
                <label for="username" className=" text-lg">Nom d'utilisateur</label>
                <input type="text" id="username" name="username" minlength="4" maxlength="8" className="text-black p-2 rounded-full mt-2 mb-8"></input>
                <label for="email" className=" text-lg">Adresse E-mail</label>
                <input type="mail" id="email" name="email" className="text-black p-2 rounded-full mt-2 mb-8"></input>
                <label for="password" className=" text-lg">Mot de passe</label>
                <input type="password" id="password" name="password" maxlength="16" className="text-black p-2 rounded-full mt-2 mb-8"></input>
                <button className="bg-blue-600 pl-6 pr-6 p-2 rounded-full hover:bg-blue-500 transition-all">S'inscrire</button>
            </div>
        </div>
    )
}


export default Login