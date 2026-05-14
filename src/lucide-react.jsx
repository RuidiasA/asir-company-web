
const IconBase = ({ children, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
)

export const ArrowRight = (props) => <IconBase {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></IconBase>
export const BadgeCheck = (props) => <IconBase {...props}><path d="M16.3 9.4 7.9 17.8 4 13.9" /><path d="M3.8 9A3 3 0 0 1 7 5.8a3 3 0 0 0 5.9 0A3 3 0 0 1 16 9a3 3 0 0 0 3.2 3 3 3 0 0 1-3 3.2 3 3 0 0 0-5.2 2.2 3 3 0 0 1-3-3.2A3 3 0 0 1 3.8 9Z" /></IconBase>
export const Building2 = (props) => <IconBase {...props}><path d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18" /><path d="M6 12h12" /><path d="M9 7h.01" /><path d="M15 7h.01" /><path d="M9 16h.01" /><path d="M15 16h.01" /></IconBase>
export const ClipboardPenLine = (props) => <IconBase {...props}><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M9 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /><path d="M16 5h2a2 2 0 0 1 2 2v3" /><path d="m12 15 5-5 2 2-5 5-3 1z" /></IconBase>
export const Cog = (props) => <IconBase {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.4 1z" /></IconBase>
export const Fan = (props) => <IconBase {...props}><circle cx="12" cy="12" r="2" /><path d="M12 4a3.5 3.5 0 0 1 3.5 3.5C15.5 10 12 12 12 12s-3.5-2-3.5-4.5A3.5 3.5 0 0 1 12 4Z" /><path d="M20 12a3.5 3.5 0 0 1-3.5 3.5C14 15.5 12 12 12 12s2-3.5 4.5-3.5A3.5 3.5 0 0 1 20 12Z" /><path d="M12 20a3.5 3.5 0 0 1-3.5-3.5C8.5 14 12 12 12 12s3.5 2 3.5 4.5A3.5 3.5 0 0 1 12 20Z" /></IconBase>
export const Play = (props) => <IconBase {...props}><polygon points="8 5 19 12 8 19 8 5" /></IconBase>
export const ShieldCheck = (props) => <IconBase {...props}><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3z" /><path d="m9 12 2 2 4-4" /></IconBase>
export const Snowflake = (props) => <IconBase {...props}><path d="m12 2 0 20" /><path d="m4.93 6 14.14 12" /><path d="m19.07 6-14.14 12" /><path d="m2 12 20 0" /></IconBase>
export const Users = (props) => <IconBase {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></IconBase>
export const Waves = (props) => <IconBase {...props}><path d="M2 6c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" /><path d="M2 12c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" /><path d="M2 18c2.5 0 2.5 2 5 2s2.5-2 5-2 2.5 2 5 2 2.5-2 5-2" /></IconBase>
export const Wrench = (props) => <IconBase {...props}><path d="M21.7 7.3a6 6 0 0 1-8 8l-8 8a2 2 0 1 1-2.8-2.8l8-8a6 6 0 0 1 8-8l-3 3 2 2 3-3z" /></IconBase>
export const Zap = (props) => <IconBase {...props}><path d="M13 2 3 14h7l-1 8 10-12h-7z" /></IconBase>
export const MessageCircle = (props) => <IconBase {...props}><path d="m21 11.5a8.5 8.5 0 1 1-4.5-7.5" /><path d="M22 2 11 13" /></IconBase>
