import React from 'react'

export default function MaterialStockInputs({ formData, onChange }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="field-group">
        <label htmlFor="quantiteTotale">Quantité totale *</label>
        <input
          id="quantiteTotale"
          name="quantiteTotale"
          type="number"
          min="1"
          value={formData.quantiteTotale}
          onChange={onChange}
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="quantiteDispo">Quantité disponible *</label>
        <input
          id="quantiteDispo"
          name="quantiteDispo"
          type="number"
          min="0"
          value={formData.quantiteDispo}
          onChange={onChange}
          required
        />
      </div>
    </div>
  )
}
