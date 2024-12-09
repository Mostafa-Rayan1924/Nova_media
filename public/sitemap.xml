export async function GET() {
  const baseUrl = "https://novamedia-eg.com"; // رابط موقعك الأساسي

  // الصفحات الثابتة
  const staticPages = [
    "", // الصفحة الرئيسية
    "services",
    "market",
    "exhibitions",
    "contactus",
    "team",
    "job-ads",
    "site-ads",
  ];

  // إنشاء خريطة الموقع بصيغة XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
      )
      .join("")}
  </urlset>`;

  // إرسال الملف كاستجابة
  return new Response(sitemap.trim(), {
    // إزالة أي فراغات زائدة
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
