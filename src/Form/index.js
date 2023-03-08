import "./style.css";

const Form = (props) => (
  <>
    <section>
      <div className="header">
        <h1 className="header__banner">Lista Zadań</h1>
      </div>
    </section>
    <form className="flex">       
      <input className="flex__item--input" maxLength="80" required pattern="^(?![\s])(?=.*[A-Za-z])[A-Za-z\s]*$"
        placeholder="Co jest do zrobienia?" />
      <button className="flex__item--button">Dodaj Zadanie</button>
    </form> 
  </>
);

export default Form;