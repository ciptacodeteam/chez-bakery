import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

// Navigation kamu
const navigation = [
    { name: 'Home', href: '/' },
    { name: "Chez's Menu", href: '/menus' },
    { name: 'Location', href: 'https://share.google/le4eFOa8gvFFW4y0j' },
    { name: 'Social Media', href: 'https://www.instagram.com/chezbakery_id/' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Login', href: '/sign-in' },
];

async function generateSitemap() {
    const siteUrl = 'https://www.chezbakerycafe.com';

    // Ambil data dari API (menu)
    const menus = await fetch(`${siteUrl}/api/menus`).then(res => res.json());

    // Inisialisasi sitemap stream
    const sitemap = new SitemapStream({ hostname: siteUrl });

    // Tambahkan semua halaman dari navigation (skip external link)
    navigation.forEach((nav) => {
        if (nav.href.startsWith('http')) return; // skip external
        sitemap.write({
            url: nav.href,
            changefreq: 'weekly',
            priority: nav.href === '/' ? 1.0 : 0.7,
        });
    });

    // Tambahkan halaman dinamis (menus)
    menus.forEach((menu: any) => {
        sitemap.write({
            url: `/menus/${menu.slug}`,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod: menu.updatedAt,
        });
    });

    sitemap.end();

    // Simpan ke public/sitemap.xml
    const sitemapPath = path.resolve('./public/sitemap.xml');
    streamToPromise(sitemap).then((sm) => {
        createWriteStream(sitemapPath).write(sm.toString());
        console.log(`✅ Sitemap generated at ${sitemapPath}`);
    });
}

generateSitemap().catch(console.error);
