export const MOCK_AUTOMATION_STATS = [
  { label: 'Active Workflows', value: '12', change: '+20% vs last month', color: 'blue' },
  { label: 'Leads Processed', value: '842', change: '+32% vs last month', color: 'purple' },
  { label: 'Time Saved', value: '28.5 hrs', change: '+45% vs last month', color: 'emerald' },
  { label: 'Automation Success Rate', value: '96.2%', change: '+4% vs last month', color: 'teal' },
]

export const MOCK_TRIGGERS = [
  { id: 't1', title: 'New Lead', desc: 'When a new lead is captured', icon: 'UserCheck', color: 'blue' },
  { id: 't2', title: 'Chat Message', desc: 'When a user sends a message', icon: 'MessageSquare', color: 'purple' },
  { id: 't3', title: 'Form Submission', desc: 'When a form is submitted', icon: 'FileText', color: 'amber' },
  { id: 't4', title: 'Appointment Booked', desc: 'When a meeting is scheduled', icon: 'Calendar', color: 'emerald' },
  { id: 't5', title: 'Tag Added', desc: 'When a tag is added to a lead', icon: 'Tag', color: 'indigo' },
  { id: 't6', title: 'Inactivity', desc: 'When a user is inactive', icon: 'Clock', color: 'rose' },
  { id: 't7', title: 'Keyword Match', desc: 'When a specific keyword is used', icon: 'Sparkles', color: 'sky' },
]

export const MOCK_ACTIONS = [
  { id: 'a1', title: 'Send Message', desc: 'Send automated message', icon: 'MessageCircle', color: 'emerald' },
  { id: 'a2', title: 'Add Tag', desc: 'Add tag to lead', icon: 'Tag', color: 'amber' },
  { id: 'a3', title: 'Assign to Team', desc: 'Assign to team member', icon: 'Users', color: 'blue' },
  { id: 'a4', title: 'Send Email', desc: 'Send email notification', icon: 'Mail', color: 'orange' },
]

export const MOCK_RECENT_RUNS = [
  { id: 'r1', title: 'Workflow completed', time: '2 minutes ago', status: 'success' },
  { id: 'r2', title: 'Lead assigned to Sarah', time: '12 minutes ago', status: 'success' },
  { id: 'r3', title: 'Condition not met', time: '28 minutes ago', status: 'warning' },
  { id: 'r4', title: 'Email sent successfully', time: '1 hour ago', status: 'success' },
  { id: 'r5', title: 'Tag added: Demo Interested', time: '2 hours ago', status: 'success' },
]

export const MOCK_TEMPLATES = [
  {
    id: 'tpl1',
    title: 'New Lead Follow-up',
    desc: 'Automatically follow up with new leads from chatbot or website.',
    trigger: 'New Lead',
    nodeCount: 4,
    badge: 'Popular',
  },
  {
    id: 'tpl2',
    title: 'Appointment Reminder',
    desc: 'Send automated reminders before scheduled meetings.',
    trigger: 'Appointment Booked',
    nodeCount: 3,
    badge: 'Scheduling',
  },
  {
    id: 'tpl3',
    title: 'Lead Qualification',
    desc: 'Tag and route leads based on intent and behavior.',
    trigger: 'Chat Message',
    nodeCount: 5,
    badge: 'CRM Sync',
  },
  {
    id: 'tpl4',
    title: 'Re-engagement Campaign',
    desc: 'Reach out to inactive leads automatically.',
    trigger: 'Inactivity',
    nodeCount: 4,
    badge: 'Outreach',
  },
]
