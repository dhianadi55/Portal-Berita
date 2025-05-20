// services/portalA.ts
import axios from 'axios';

// Definisikan interface untuk NewsItem agar lebih rapi dan jelas
export interface NewsItem {
  slug: string;
  title: string;
  publishedAt: string;
  imageUrl: string;
}

export async function fetchPortalA(): Promise<NewsItem[]> {
  const NEWSAPI_KEY = process.env.NEWSAPI_KEY; // Ambil API Key dari environment variable

  if (!NEWSAPI_KEY) {
    throw new Error('NEWSAPI_KEY is not defined. Please add it to your .env.local file.');
  }

  try {
    // Menggunakan NewsAPI.org untuk berita teratas dari Indonesia
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=id&apiKey=${NEWSAPI_KEY}`
    );

    // Pastikan data dan articles ada sebelum memproses
    if (!data || !data.articles) {
      return [];
    }

    // Memetakan data dari NewsAPI.org ke format NewsItem yang kita inginkan
    return data.articles.map((article: any) => ({
      // NewsAPI.org tidak selalu punya 'id' unik yang cocok untuk slug,
      // jadi kita bisa buat slug dari judul dengan sedikit manipulasi.
      // Pastikan slug unik jika digunakan untuk navigasi!
      slug: article.title
        ? article.title.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').slice(0, 100) + '-' + Date.now()
        : 'no-title-slug-' + Date.now(),
      title: article.title || 'No Title Available',
      publishedAt: article.publishedAt,
      imageUrl: article.urlToImage || '/placeholder-image.jpg', // Berikan fallback jika gambar tidak ada
    }));
  } catch (error) {
    console.error('Error fetching news from NewsAPI:', error);
    // Melemparkan error kembali agar bisa ditangkap di layer API route
    throw new Error('Could not fetch news from NewsAPI. Please check your API key or network.');
  }
}