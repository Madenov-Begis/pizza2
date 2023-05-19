import { Pagination } from '@mui/material'
import React from 'react'

function PaginatioN({ setCurrentPage }) {
  return (
    <div className="pagination">
      <Pagination
        count={4}
        color="primary"
        size="large"
        onChange={(e, page) => {setCurrentPage(page)}}
      />
    </div>
  )
}

export default PaginatioN
