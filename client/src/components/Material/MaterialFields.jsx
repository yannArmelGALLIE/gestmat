import React from 'react'
import MaterialTextInputs from './MaterialTextInputs'
import MaterialStockInputs from './MaterialStockInputs'

export default function MaterialFields({ formData, onChange }) {
  return (
    <div className="material-fields-container space-y-2">
      <MaterialTextInputs formData={formData} onChange={onChange} />
      <MaterialStockInputs formData={formData} onChange={onChange} />
    </div>
  )
}
