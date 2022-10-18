import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";

import { ListStyled, ListItem, Image, Information, Name, Price, Description, EmptyList } from "./list.style";

interface ListaProps {
  teachers: Teacher[],
}

const Lista = (props: ListaProps) => {
  return(
    <div>
      {props.teachers.length > 0 ? (
            <ListStyled>
            {props.teachers.map(teacher => (
              <ListItem key={teacher.id}>
      
              <Image src={teacher.image}></Image>
              <Information> 
                <Name>{teacher.name}</Name>
                <Price>{teacher.price.toLocaleString('pt-BR', {maximumFractionDigits: 2, style: 'currency', currency: 'BRL'})}</Price>
                <Description>{teacher.description}</Description>
                <Button sx={{ width: '70%'}}>Schedule class with </Button>
              </Information>
              
            </ListItem>
            ))}
      
          </ListStyled>
      ) : (
          <EmptyList>Nothing was found</EmptyList>
      )}
    </div>
  )

}

export default Lista;