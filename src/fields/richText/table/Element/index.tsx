import React from 'react'

import './index.scss'

const baseClass = 'rich-text-table'

const TableElement: React.FC<{
  attributes: any
  element: any
  children: React.ReactNode
}> = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'table':
      return (
        <table>
          <tbody {...attributes}>{children}</tbody>
        </table>
      )
    case 'table-row':
      return <tr {...attributes}>{children}</tr>
    case 'table-cell':
      return <td {...attributes}>{children}</td>
    default:
      return <p {...attributes}>{children}</p>
  }
}
export default TableElement
