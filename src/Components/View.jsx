import React, { useState } from 'react'
import Card from './Card'
import styles from "./View.module.css"

export const getFormFields = (e) => {
  const fields = Object.fromEntries(new window.FormData(e.target));
  return fields;
};

var cont = 0

const View = () => {
  
  const [cards, setCards] = useState([]);

  const handleSubmit = (e)=> {
    e.preventDefault();
    const formFields = getFormFields(e);
    if(formFields.titulo === "" || formFields.descripcion === ""){return};
    setCards([...cards, {...formFields, cardKey:cont}]);
    cont++;
    e.target.reset();
  };

  const borrarElemento = (index)=>{
      const draft = cards.filter(card=>card.cardKey !== index);
      setCards(draft);
  }

  return (
    
    <div>
        <h1>ToDo List</h1>
        <form className={styles.container} onSubmit={handleSubmit} >
          <input type="text" name="titulo" placeholder='por hacer...'/> <br />
          <input type="text" name="descripcion" placeholder='descripción' /> <br />
          <button type="submit" value="Guardar">Guardar</button>
        </form>
        {
          cards.map((actualCard)=>{ 

            return <div> 
                      <Card 
                            cardKey={actualCard.cardKey}
                            titulo={actualCard.titulo} 
                            descripcion={actualCard.descripcion}
                            btnText="✕"
                            btnFunction = {()=> borrarElemento(actualCard.cardKey)}
                      />
                  </div>
          })
        }
        {console.log(cards)}
    </div>
  )
}

export default View