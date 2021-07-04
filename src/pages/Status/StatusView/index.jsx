import { Container} from "./styles";
import {TableStatus} from '../../../components/TableStatus';
import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import Swal from 'sweetalert2';

import { BsPlusCircle} from "react-icons/bs";

import StatusCreate from '../StatusCreate';
import StatusUpdate from '../StatusUpdate';

export default function StatusView(){

  const [status, setStatus] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
    async function loadStatus(){
      
      const response = await api.get(`/status`);
      
        setStatus(response.data)
    }

    loadStatus();
  },[])


  const handleEdit = id => {
    const [item] = status.filter(item => item.id === id);
    setSelectedStatus(item);
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

        api.delete(`/status/${id}`);
        
        setStatus(status.filter(item => item.id !== id));
      }
    });
  };
  
  
    return ( 
      <Container>
        {!isAdding && !isEditing && (
          <>
            <TableStatus
              status={status}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setSelectedStatus={setSelectedStatus}
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
            <StatusCreate
              status={status}
              setStatus={setStatus}
              setIsAdding={setIsAdding}
            />
          )
        }
        {isEditing && (
            <StatusUpdate
              status={status}
              selectedStatus={selectedStatus}
              setStatus={setStatus}
              setIsEditing={setIsEditing}
            />
          )
        }
        </Container>
    )

}