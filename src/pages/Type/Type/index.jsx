import { Container} from "./styles";
import {TableType} from '../../../components/TableType';
import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import Swal from 'sweetalert2';

import { BsPlusCircle} from "react-icons/bs";

import TypeCreate from '../TypeCreate';
import TypeUpdate from '../TypeUpdate';

export default function Type(){

  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
    async function loadTypes(){
      
      const response = await api.get(`/types`);
      
        setTypes(response.data)
    }

    loadTypes();
  },[])


  const handleEdit = id => {
    const [type] = types.filter(type => type.id === id);
    setSelectedType(type);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Você tem certeza?',
      text: "Você não poderá reverter essa ação!",
      showCancelButton: true,
      confirmButtonText: 'Sim, delete!',
      cancelButtonText: 'Não, não delete!'
    }).then(result => {
      if (result.value) {
        Swal.fire({
          icon: 'success',
          title: 'Deletado!',
          text: `Deletado com sucesso.`,
          showConfirmButton: false,
          timer: 1500
        });

        api.delete(`/types/${id}`);
        
        setTypes(types.filter(type => type.id !== id));
      }
    });
  };
  
  
    return ( 
      <Container>
        {!isAdding && !isEditing && (
          <>
            <TableType
              types={types}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setSelectedType={setSelectedType}
            />
            <button onClick={() => setIsAdding(true)}>
              <BsPlusCircle
                size="25"
                color="black"
              />
            </button> 
          </> 
          )
        }
        {isAdding && (
            <TypeCreate
              types={types}
              setTypes={setTypes}
              setIsAdding={setIsAdding}
            />
          )
        }
        {isEditing && (
            <TypeUpdate
              types={types}
              selectedType={selectedType}
              setTypes={setTypes}
              setIsEditing={setIsEditing}
            />
          )
        }
     
        </Container>
    )

}