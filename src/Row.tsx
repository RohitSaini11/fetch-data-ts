import React from 'react'

type RowProps = {
    item:Object
}

const Row = ({item}:RowProps) => {
  return (
    <tr>
        {Object.entries(item).map( ([key,value]) =>{
            return (
                <td key={key}>
                    {JSON.stringify(value)}
                </td>)    
            }
        )}
    </tr>
  )
}

export default Row