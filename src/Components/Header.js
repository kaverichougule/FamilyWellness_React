import "./Header.css"
function Header(){
    return (
        <header className="header">
            <div className="head">
                <h1>Family Wellness</h1>
                <p>MASSAGE THERAPY</p>
            </div>
            <nav>
                <a href="#" className="hoverEff active">Home</a>
                <a href="#" className="hoverEff">About</a>
                <a href="#" className="hoverEff">Services</a>
                <a href="#" className="hoverEff">FAQ</a>
                <a href="#" className="hoverEff">Contact</a>
            </nav>
        </header>
    );
}
export default Header;