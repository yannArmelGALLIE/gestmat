import React from 'react'

export default function MaterialTextInputs({ formData, onChange }) {
  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onloadend = () => onChange({ target: { name: 'imageUrl', value: reader.result } })
    reader.readAsDataURL(file)
  }

  return (
    <>
      <div className="field-group">
        <label htmlFor="nom">Nom du matériel *</label>
        <input id="nom" name="nom" type="text" placeholder="Ex: Dell Inspiron 15" value={formData.nom} onChange={onChange} required />
      </div>

      <div className="field-group">
        <label htmlFor="categorie">Catégorie *</label>
        <input id="categorie" name="categorie" type="text" placeholder="Ex: Ordinateur portable" value={formData.categorie} onChange={onChange} required />
      </div>

      <div className="field-group">
        <label htmlFor="description">Description</label>
        <input id="description" name="description" type="text" placeholder="Ex: 16 Go RAM, 512 Go SSD" value={formData.description} onChange={onChange} />
      </div>

      <div className="field-group">
        <label htmlFor="imageFile">Photo du matériel (PC)</label>
        <input id="imageFile" type="file" accept="image/*" onChange={handleFile} className="p-1 border rounded text-body-sm w-full" />
        {formData.imageUrl && (
          <div className="mt-1 flex items-center gap-2">
            <img src={formData.imageUrl} alt="Aperçu" className="w-10 h-10 object-cover rounded border" />
            <span className="text-body-sm text-secondary">Image chargée</span>
          </div>
        )}
      </div>
    </>
  )
}
