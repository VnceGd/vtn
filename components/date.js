import { parseISO, format } from 'date-fns'

export default function DateRange({ dateRangeString }) {
  const dateStrings = dateRangeString.split(' ')
  const firstDateString = dateStrings[0]
  const secondDateString = dateStrings[1]

  if (!secondDateString)
    return <Date dateString={firstDateString}/>

  const firstDate = parseISO(firstDateString)
  const secondDate = parseISO(secondDateString)

  return <p><time dateTime={firstDateString}>{format(firstDate, 'LLL yyyy')}</time> - <time dateTime={secondDateString}>{format(secondDate, 'LLL yyyy')}</time></p>
}

export function Date({ dateString }) {
  const date = parseISO(dateString)
  return <p><time dateTime={dateString}>{format(date, 'LLL yyyy')}</time></p>
}
