import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Karima | Portfolio Professionnel & Prise de Rendez-vous',
  description:
    'Portfolio professionnel multilingue de Karima. Prise de rendez-vous en ligne, compétences professionnelles, parcours et CV au format canadien.',
  keywords: [
    'Karima',
    'Portfolio',
    'CV Canadien',
    'Prise de Rendez-vous',
    'Consultation',
    'Multilingue',
  ],
  authors: [{ name: 'Karima' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark" data-palette="amethyst-violet" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var p = localStorage.getItem('portfolio_palette');
                if (p) {
                  document.documentElement.setAttribute('data-palette', p);
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-surface-950 text-slate-100 antialiased selection:bg-purple-500 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
