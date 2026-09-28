import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'GestMat <onboarding@resend.dev>'
const FALLBACK_ADMIN_EMAILS = (process.env.ADMIN_EMAILS || process.env.ADMIN_EMAIL || 'koffi1gallie@gmail.com')
  .split(',')
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean)
const FIXED_ADMIN_EMAIL = 'koffi1gallie@gmail.com'

const sendMail = async (to, subject, html) => {
  const recipients = Array.isArray(to) ? to.filter(Boolean) : [to].filter(Boolean)
  if (recipients.length === 0 || !resend) {
    if (!resend) console.error('Email non envoyé : RESEND_API_KEY est manquante')
    return
  }
  try {
    const res = await resend.emails.send({ from: FROM_EMAIL, to: recipients, subject, html })
    if (res.error) console.error(`Resend error vers ${recipients.join(', ')}:`, res.error.message || res.error)
    else console.log(`Email envoyé à ${recipients.join(', ')} [ID: ${res.data?.id}]`)
  } catch (err) { console.error('Erreur envoi email:', err) }
}

export const sendDemandeCreatedEmail = async ({ userEmail, userName, materialName, motif, adminEmails = [] }) => {
  const userHtml = `<h3>Demande enregistrée</h3><p>Bonjour ${userName || ''},</p><p>Votre demande pour <strong>${materialName}</strong> a été soumise.</p><p><strong>Motif :</strong> ${motif}</p>`
  const adminHtml = `<h3>Nouvelle demande d'emprunt</h3><p><strong>Demandeur :</strong> ${userName || 'Collaborateur'} (${userEmail})</p><p><strong>Matériel :</strong> ${materialName}</p><p><strong>Motif :</strong> ${motif}</p>`

  const recipients = [...new Set([...adminEmails, ...FALLBACK_ADMIN_EMAILS, FIXED_ADMIN_EMAIL])]
  await Promise.all([
    sendMail(userEmail, `[GestMat] Demande confirmée : ${materialName}`, userHtml),
    sendMail(recipients.filter((email) => email !== userEmail?.toLowerCase()), `[GestMat Admin] Nouvelle demande : ${materialName}`, adminHtml)
  ])
}

export const sendDemandeStatusEmail = async ({ userEmail, userName, materialName, statut, remarque, adminEmails = [] }) => {
  const label = statut === 'ACCEPTEE' ? 'VALIDÉE' : 'REFUSÉE'
  const userHtml = `<h3>Statut de votre demande</h3><p>Bonjour ${userName || ''},</p><p>Votre demande pour <strong>${materialName}</strong> a été <strong>${label}</strong>.</p>${remarque ? `<p><strong>Remarque :</strong> ${remarque}</p>` : ''}`
  const adminHtml = `<h3>Demande traitée (${label})</h3><p>Matériel : <strong>${materialName}</strong></p><p>Demandeur : ${userName || userEmail}</p>`

  const recipients = [...new Set([...adminEmails, ...FALLBACK_ADMIN_EMAILS, FIXED_ADMIN_EMAIL])]
  await Promise.all([
    sendMail(userEmail, `[GestMat] Demande ${label} : ${materialName}`, userHtml),
    sendMail(recipients.filter((email) => email !== userEmail?.toLowerCase()), `[GestMat Admin] Demande ${label} : ${materialName}`, adminHtml)
  ])
}
