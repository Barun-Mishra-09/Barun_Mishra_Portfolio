import express from 'express'
import xss from 'xss'
import { sendProjectInquiry } from '../services/emailService.js'

const router = express.Router()

// Sanitize helper
const sanitizeInput = (str) => {
  if (typeof str !== 'string') return ''
  return xss(str.trim())
}

// Simple email regex validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

router.post('/contact', async (req, res) => {
  try {
    const { name, email, company, projectType, budget, projectDetails, website } = req.body

    // 1. Invisible Honeypot Security Check (Anti-Bot)
    if (website && website.trim() !== '') {
      console.warn('[Security Notice] Honeypot field filled by suspected bot. Rejecting silently.')
      return res.status(200).json({
        success: true,
        message: 'Inquiry received successfully',
      })
    }

    // 2. Input Sanitization & String Trimming
    const cleanName = sanitizeInput(name)
    const cleanEmail = sanitizeInput(email)
    const cleanCompany = sanitizeInput(company)
    const cleanProjectType = sanitizeInput(projectType)
    const cleanBudget = sanitizeInput(budget)
    const cleanDetails = sanitizeInput(projectDetails)

    // 3. Length Validations
    if (cleanName.length > 100) {
      return res.status(400).json({ success: false, message: 'Name cannot exceed 100 characters.' })
    }
    if (cleanEmail.length > 254) {
      return res.status(400).json({ success: false, message: 'Email cannot exceed 254 characters.' })
    }
    if (cleanCompany.length > 150) {
      return res.status(400).json({ success: false, message: 'Company name cannot exceed 150 characters.' })
    }
    if (cleanDetails.length > 5000) {
      return res.status(400).json({ success: false, message: 'Project details cannot exceed 5000 characters.' })
    }

    // 4. Required Field Validations
    if (!cleanName) {
      return res.status(400).json({ success: false, message: 'Please enter your name.' })
    }
    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' })
    }
    if (!cleanDetails) {
      return res.status(400).json({ success: false, message: 'Please provide details about your project.' })
    }

    // 5. Trigger Email Dispatch
    await sendProjectInquiry({
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      projectType: cleanProjectType,
      budget: cleanBudget,
      projectDetails: cleanDetails,
    })

    console.log(`[Contact System] Successfully processed inquiry from ${cleanName} (${cleanEmail})`)

    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully',
    })
  } catch (error) {
    console.error('[Contact Controller Error]', error)
    return res.status(500).json({
      success: false,
      message: 'We couldn\'t send your inquiry right now. Please try again or email me directly.',
    })
  }
})

export default router
