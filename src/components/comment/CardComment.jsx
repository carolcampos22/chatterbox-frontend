import React from 'react'
import { ContainerCardComment } from './StylesCardComment'

const CardComment = ({creatorComment, message}) => {
  
  return (
    
      <ContainerCardComment>
      <p>Enviado por: @{creatorComment}</p>
      <h3>{message}</h3>
      
    </ContainerCardComment>
    
  )
}

export default CardComment