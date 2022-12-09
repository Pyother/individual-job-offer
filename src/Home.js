import './App.css';

window.addEventListener('scroll', function() {
    const scroolElement = this.document.getElementById("header-container");
    this.document.getElementById("header-1").style = "position: sticky; top: 50%; transform: translateY(0, -50%);";
});

export default function Home() {
    return (
        <div className="homepage">
            <div className="header-container">
                <div className="title-wrapper-1">
                    <h1 id='header-1'>Kalkulator</h1>
                </div>
                <div className="title-wrapper-2">
                    
                </div>
            </div>
            <div className="content-container">

            </div>
        </div>
    );
}


