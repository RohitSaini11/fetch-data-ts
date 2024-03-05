import React from 'react'

import Row from './Row'

//TODO : give a proper type to {data}
type TableProps={
    data:Object[]
}

const Table = ({data}:TableProps) => {
  return (
    <table>
        <tbody>
            {data.map( (item:any) =>
                <Row item={item} key={item.id} />
            )}
        </tbody>
    </table>
  )
}

export default Table