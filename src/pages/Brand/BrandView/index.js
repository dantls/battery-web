import { Container} from "./styles";
import {TableBrand} from '../../../components/TableBrand';
import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import Swal from 'sweetalert2';

import { BsPlusCircle} from "react-icons/bs";

import BrandCreate from '../BrandCreate';
import BrandUpdate from '../BrandUpdate';

export default function BrandView(){

  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
    async function loadBrands(){
      
      const response = await api.get(`/brands`);
      
        setBrands(response.data)
    }

    loadBrands();
  },[])


  const handleEdit = id => {
    const [brand] = brands.filter(brand => brand.id === id);
    setSelectedBrand(brand);
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

        api.delete(`/brands/${id}`);
        
        setBrands(brands.filter(brand => brand.id !== id));
      }
    });
  };
  
  
    return ( 
      <Container>
        {!isAdding && !isEditing && (
          <>
            <TableBrand 
              brands={brands}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              setSelectedBrand={setSelectedBrand}
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
            <BrandCreate
              brands={brands}
              setBrands={setBrands}
              setIsAdding={setIsAdding}
            />
          )
        }
        {isEditing && (
            <BrandUpdate
              brands={brands}
              selectedBrand={selectedBrand}
              setBrands={setBrands}
              setIsEditing={setIsEditing}
            />
          )
        }


          
        </Container>
    )

}