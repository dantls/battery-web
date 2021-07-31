
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { ptBR } from 'date-fns/locale';

export function formatDateElapsed(date){
  const elapsed = formatDistanceToNow(
    date,
    {
      locale: ptBR,
    }
  )
  return (
    elapsed
  )
}