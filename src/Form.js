import FormInput from "./components/FormInput";
import "./App.css";

export default function Form() {
    return (
        <div className="myform">
            <form action="" method="get">
                <h2>Formularz</h2>
                <FormInput placeholder="Pracodawca"/>
                <FormInput placeholder="System wynagradzania"/> 
                <FormInput placeholder="Imię"/>
                <FormInput placeholder="Nazwisko"/>
                <FormInput placeholder="Płeć"/>
                <FormInput placeholder="Stawka"/>
                <FormInput placeholder="Data zatrudnienia"/>
                <FormInput placeholder="Dodatek funkcyjny"/>
                <FormInput placeholder="Imię rekrutera"/>
                <FormInput placeholder="Nazwisko rekrutera"/>
                <FormInput placeholder="E-mail rekrutera"/>
            </form>
        </div>
    );
}

