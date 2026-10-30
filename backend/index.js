import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import contactRouter from './routes/contact.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '.env') })
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Security: Body Size Limits
app.use(express.json({ limit: '50kb' }))
app.use(express.urlencoded({ extended: true, limit: '50kb' }))

// Security: CORS Configuration
const isOriginAllowed = (origin) => {
  // Allow requests with no origin (like mobile apps, curl, or same-domain proxy/rewrites)
  if (!origin) return true
  // Allow local development ports
  if (origin.includes('localhost') || origin.includes('127.0.0.1')) return true
  // Allow all Vercel domains (production & preview branch deployments)
  if (origin.endsWith('.vercel.app')) return true
  // Allow explicitly configured client URL or Vercel URL
  if (process.env.CLIENT_URL && origin === process.env.CLIENT_URL) return true
  if (process.env.VERCEL_URL && origin === `https://${process.env.VERCEL_URL}`) return true
  if (process.env.NODE_ENV !== 'production') return true
  return false
}

app.use(
  cors({
    origin: (origin, callback) => {
      if (isOriginAllowed(origin)) {
        callback(null, true)
      } else {
        callback(new Error('CORS policy violation: Origin not allowed.'))
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

// Security: Rate Limiter (5 requests per IP per hour for contact API)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Max 10 submissions per IP per hour
  message: {
    success: false,
    message: 'Too many inquiries submitted from this IP. Please try again in an hour.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// Health Check Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: '🚀 Barun Mishra Portfolio Backend API is running successfully!',
    endpoints: {
      health: '/api/health',
      contact: 'POST /api/contact',
    },
    timestamp: new Date().toISOString(),
  })
})

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Barun Mishra Portfolio API is running',
    timestamp: new Date().toISOString(),
  })
})

// Contact Endpoint with Rate Limiter
app.use('/api', contactLimiter, contactRouter)

// Error Handler Middleware
app.use((err, req, res, next) => {
  console.error('[Global Server Error]', err.stack)
  res.status(500).json({
    success: false,
    message: 'Internal server error occurred.',
  })
})

// Export default Express app for Vercel Serverless / Multi-Service deployment
export default app

// Only start HTTP listener for standalone / local development
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio Express Backend listening on http://localhost:${PORT}`)
  })
}
