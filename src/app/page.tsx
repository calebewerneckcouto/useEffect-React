
"use client"

import { useEffect, useState } from "react";

const Page = () => {

  const [name,setName] = useState('Calebe');
  const [ age,setAge]= useState(36);

   useEffect(() =>{
      alert("Rodou o useEffect")
   },[age]);


  return(
  <div className="">
       
       <p>Meu nome é {name} e eu tenho {age} anos.</p>
       <hr />
       <button className="border border-blue-400 m-3 p-3" onClick={() => setName("Livia")}>Mudar Nome</button>
       <button className="border border-blue-400 m-3 p-3" onClick={() => setAge(40)}>Mudar idade</button>
    
    </div>
);
};

export default Page;
