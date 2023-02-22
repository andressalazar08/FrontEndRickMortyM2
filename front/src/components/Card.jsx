export default function Card(props) {
   return (
      <div>

         <button onClick={props.onClose}>X</button>
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name} />
      </div>
   );
}


/*

OPCIÓN 2: DESESTRUCTURANDO PROPS
El props al ser un objeto puedo desestructurarlo

function Card({name,species,gender,image,onClose}}) {
   return (
      <div>

         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}




*/
