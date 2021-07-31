
export function formatDate(date){
  return (
    new Date(date).toLocaleString('pt-BR',{ 
      day:"2-digit",
      month:"2-digit",
      year:"numeric",
      hour: 'numeric',
      minute: '2-digit' })
  )
}