import { Container} from "./styles";
import {TableBrand} from '../../../components/TableBrand';
import { useEffect, useState } from "react";
import { api } from '../../../services/api';


export default function BrandDashboard(){

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

  };
  
    return ( 
      <Container>
        {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}




        <TableBrand 
           brands={brands}
           handleEdit={handleEdit}
           setSelectedBrand={setSelectedBrand}
        />
      </Container>
    )

}