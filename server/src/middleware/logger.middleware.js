export const requestLogger = (req, res, next) => {
  const start = Date.now()
  const time = new Date().toLocaleTimeString('fr-FR')

  console.log(`\n➡️  [${time}] ${req.method} ${req.originalUrl}`)
  if (req.headers.authorization) {
    console.log(`   🔑 Auth:`, req.headers.authorization.substring(0, 20) + '...')
  }
  if (['POST', 'PUT', 'PATCH'].includes(req.method) && req.body) {
    console.log(`   📦 Body:`, JSON.stringify(req.body))
  }

  res.on('finish', () => {
    const duration = Date.now() - start
    const icon = res.statusCode >= 400 ? '❌' : '✅'
    console.log(`${icon} [${time}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`)
  })

  next()
}
