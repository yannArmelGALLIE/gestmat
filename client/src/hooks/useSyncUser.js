import { useEffect } from 'react'
import { useAuth, useUser } from '@clerk/clerk-react'

export const useSyncUser = () => {
  const { isSignedIn, getToken } = useAuth()
  const { user } = useUser()

  useEffect(() => {
    const syncWithBackend = async () => {
      if (isSignedIn && user) {
        try {
          const token = await getToken()
          if (!token) return

          const response = await fetch('https://gestmat-production-b620.up.railway.app/api/users/sync', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              email: user.primaryEmailAddress?.emailAddress,
              nom: user.lastName || '',
              prenom: user.firstName || ''
            })
          })

          const result = await response.json()

          if (result.success) {
            console.log('Synchronisation BDD réussie :', result.user)
          }
        } catch (error) {
          console.error('Erreur de synchronisation BDD :', error)
        }
      }
    }

    syncWithBackend()
  }, [isSignedIn, user, getToken])
}
