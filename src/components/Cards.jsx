import Card from './Card';

 function Cards(props) {
   const { characters } = props; //Aqui hizo destructuring
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
                  onClose={char.onClose}
                  >

                  </Card>
               );
            })
         }


      </div>
   );
}
export default Cards;