import React from 'react'

export default function RequesterCell({ initials, initialsBg, initialsColor, userName, userEmail }) {
  return (
    <td className="py-4 px-5">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full ${initialsBg} ${initialsColor} flex items-center justify-center font-title-sm font-bold`}>
          {initials}
        </div>
        <div>
          <div className="text-title-sm font-title-sm text-on-surface">{userName}</div>
          <div className="text-body-sm font-body-sm text-on-surface-variant font-code">{userEmail}</div>
        </div>
      </div>
    </td>
  )
}
