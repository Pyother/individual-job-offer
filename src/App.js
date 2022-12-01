import FormInput from "./components/FormInput";
import "./App.css";

export default function App() {
    return (
        <form>
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
    );
}

