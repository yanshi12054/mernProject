import "./SearchNav.css";



export default function SearchNav() {
    return (
        <nav className="search_nav">
            <i className="fa-solid fa-bars-staggered" onClick={() => document.querySelector("#small_screen").style.display = "block"}></i>

            <div id="search_input_container">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search" id="search_input" />
            </div>
            <div id="profile_container">
                <i className="fa-solid fa-clock-rotate-left"></i>

                <div id="profileImg">
                </div>
            </div>
        </nav>
    )
}