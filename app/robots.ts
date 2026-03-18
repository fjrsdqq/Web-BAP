import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://bataviaasiaproject.com/sitemap.xml',
    host: 'https://bataviaasiaproject.com',
  }
}
