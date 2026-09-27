import React from 'react'

export default function MaterialFields({ formData, onChange }) {
  return (
    <div className="material-fields-container">
      <div className="field-group">
        <label htmlFor="nom">Nom du matériel</label>
        <input
          id="nom"
          name="nom"
          type="text"
          placeholder="Ex: Dell Latitude 5420"
          value={formData.nom}
          onChange={onChange}
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="categorie">Catégorie</label>
        <input
          id="categorie"
          name="categorie"
          type="text"
          placeholder="Ex: Ordinateur portable"
          value={formData.categorie}
          onChange={onChange}
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="numeroSerie">Numéro de série</label>
        <input
          id="numeroSerie"
          name="numeroSerie"
          type="text"
          placeholder="Ex: SN-98234-X"
          value={formData.numeroSerie}
          onChange={onChange}
          required
        />
      </div>
    </div>
  )
}
