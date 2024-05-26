// ORIGINAL
// import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: {
//     template: '%s | Dyslexia Toolkit',
//     default: 'Dyslexia Toolkit',
//   },
//   description: 'Dyslexia Toolkit',
//   metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>{children}</body>
//     </html>
//   );
// }

//

// DASHBOARD
// import SideNav from '@/app/ui/dashboard/sidenav';

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//       <div className="w-full flex-none md:w-64">
//         <SideNav />
//       </div>
//       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//     </div>
//   );
// }

// HYBRID
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import SideNav from '@/app/ui/dashboard/sidenav';

export const metadata: Metadata = {
  title: {
    template: '%s | Dyslexia Toolkit',
    default: 'Dyslexia Toolkit',
  },
  description: 'Dyslexia Toolkit',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
