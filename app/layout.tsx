import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Parthik Prajapati — Software Engineer', description: 'Software Engineer building intelligent applications, reliable backend systems, and thoughtful digital experiences.' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
