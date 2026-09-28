import { useState, useEffect, useCallback } from 'react'
import { useAuth, useUser } from '@clerk/clerk-react'

export const useUserProfile = () => {
  const { isSignedIn, getToken } = useAuth()
  const { user: clerkUser } = useUser()
  const [profile, setProfile] = useState(null)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchProfile = useCallback(async () => {
    if (!isSignedIn) return setLoading(false)
    try {
      const token = await getToken()
      if (!token) return
      const body = {
        email: clerkUser?.primaryEmailAddress?.emailAddress,
        nom: clerkUser?.lastName || '',
        prenom: clerkUser?.firstName || ''
      }
      const res = await fetch('http://localhost:5000/api/users/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      if (data.success && data.user) {
        setProfile(data.user)
        setRole(data.user.role || 'USER')
      }
    } catch {
      setRole('USER')
    } finally {
      setLoading(false)
    }
  }, [isSignedIn, clerkUser, getToken])

  useEffect(() => { fetchProfile() }, [fetchProfile])

  return { role, profile, loading, refetch: fetchProfile }
}
