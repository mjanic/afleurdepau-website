import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Aboutuspage({ searchInput, isSearchOpen, toggleSearch, cartArray, 
    handleSearchInput, clearSearchInput, addToCart, removeFromCart,
    setCartArray, user, updateUser, isLogedIn, handleLogIn, logOutUser}) {
        return(
            <div>
                <Navbar
                    searchInput={searchInput}
                    isSearchOpen={isSearchOpen}
                    toggleSearch={toggleSearch}
                    handleSearchInput={handleSearchInput}
                    clearSearchInput={clearSearchInput}
                    cartArray={cartArray}
                    removeFromCart={removeFromCart}
                    setCartArray={setCartArray}
                    user={user}
                    updateUser={updateUser}
                    isLogedIn={isLogedIn}
                    handleLogIn={handleLogIn}
                    logOutUser={logOutUser}
                />
                <div className="about-us-container">
                    <div className="about-us-text">
                        <p>Il nous ai tous déjà arrivé d'offrir des fleurs. Que ce soit pour un événement ou juste pour se faire plaisir ou faire plaisir à un proche. Les fleurs nous entourent, nous les aimons pour leurs odeurs, leurs couleurs, et leur forme.</p>

                        <p>Rare sont les foyers sans bougies. Utiles pour parfumer notre intérieur, donner une ambiance agréable ou tous simplement pour sauver une soirée sans électricité.</p>

                        <p>Ces deux éléments nous entourent au quotidien et nous pouvons les trouver partout. Mais pourquoi pas les combiner pour en faire un cadeau unique. Les fleurs sont disponibles chez les fleuristes, les bougies dans les magasins de déco et bien d'autres. Mais rare propose des bougies fleuries, naturelle bonne pour nous et notre environnement.</p>

                        <p>A fleur de Pau à décidé d'associer ces deux éléments du quotidien pour vous faire plaisir sans avoir à choisir.</p>

                        
                        <p>A fleur de Pau c est avant tout :</p>
                        <ol>
                            <li>Des bougies fleuries faites main</li>

                            <li>Des modèles uniques</li>

                            <li>De la cire végétale 100% soja renouvelable et biodégradable</li>

                            <li>Des parfums français garantis sans CMR ( substances Cancérogènes, Mutagènes et Reprotoxiques)</li>
                        </ol>
                    </div>
                    <img src="../assets1/cibi-work.jpg" alt="cibi working" />
                    
                </div>
                <Footer/>
            </div>
    )
}
export default Aboutuspage;    