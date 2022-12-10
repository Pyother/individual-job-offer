import './App.css';

window.addEventListener('scroll', function() {
    const scroolElement = this.document.getElementById("header-container");
    this.document.getElementById("header-1").style = "position: sticky; top: 20vh; transform: translateY(0, -50%);";
});

export default function Home() {
    return (
        <div className="homepage">
            <div className="context-container">
                <h1 id='header-1'>Kalkulator indywidualnej propozycji zatrudnienia</h1>
            </div>
            <div className="header-container">
                    
            </div> 
            <div className="footer-container" >

            </div>
        
        </div>
    );
}


