import NavBarItem from "./NabBarItem";

const NavBar = () => {
    return ( 
        <div className="flex lg:bg-amber-400 p-4 lg:text-lg justify-center font-bold items-center gap-6">
            <NavBarItem title="Trending" param="fetchTrending" />
            <NavBarItem title ="Top Rated" param="fetchTopRated" />
        </div>
     );
}
 
export default NavBar;