import { Container} from "./styles";
import {TableModelo} from '../../../components/TableModelo';
import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import Swal from 'sweetalert2';

import { BsPlusCircle} from "react-icons/bs";

import ModeloCreate from '../ModeloCreate';
import ModeloUpdate from '../ModeloUpdate';

export default function ModeloView(){

  const [modelos, setModelos] = useState([]);
  const [selectedModelo, setSelectedModelo] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
    async function loadModelos(){
      
      const response = await api.get(`/models`);
      
        setModelos(response.data)
    }

    loadModelos();
  },[])

  const handleEdit = id => {
    const [modelo] = modelos.filter(modelo => modelo.id === id);
    setSelectedModelo(modelo);
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

        api.delete(`/models/${id}`);
        
        setModelos(modelos.filter(modelo => modelo.id !== id));
      }
    });
  };
  
  
    return ( 
      <Container>
        {!isAdding && !isEditing && (
          <>
            <TableModelo
              modelos={modelos}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setSelectedModelo={setSelectedModelo}
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
            <ModeloCreate
              modelos={modelos}
              setModelos={setModelos}
              setIsAdding={setIsAdding}
            />
          )
        }
        {isEditing && (
            <ModeloUpdate
              modelos={modelos}
              selectedModelo={selectedModelo}
              setModelos={setModelos}
              setIsEditing={setIsEditing}
            />
          )
        }


          
        </Container>
    )

}