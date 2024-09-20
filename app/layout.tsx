import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard |',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-acme.vercel.app'),
  authors: [{name: 'Alberto Pérez', url:'https://www.linkedin.com/in/albertoperezbautista/'}],
  keywords: ['Next.js 14', 'Acme', 'Dashboard', 'nextjs.org/learn', 'Server Actions'],
  openGraph: {
    title: 'Nextjs Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    url: 'https://nextjs-dashboard-acme.vercel.app',
    type: 'website',
  },
  twitter: {
    site: '@acme',
    description:'The official Next.js Learn Dashboard built with App Router.',
    title:'Acme Dashboard by albertoperezbautista',
    creator:'albertoperezbautista',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}