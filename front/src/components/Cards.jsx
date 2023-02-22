import Card from './Card';

 function Cards(props) {
   const { characters } = props; //Aqui hizo destructuring, characters es un array de objetos
   return (
      <div>

         {
            characters.map((char, index)=>{
               return (
                  <Card
                  key={index}
                  name={char.name}
                  species={char.species}
                  gender={char.gender}
                  image={char.image}
                  onClose={()=>window.alert('Emulamos que se cierra la card desde el componente mapeado')}
                  />


               );
            })
         }


      </div>
   );
}
export default Cards;