// pages/index.tsx
import useSWR from 'swr';
import Card from '../components/Card'; // Pastikan path ini benar
import { NewsItem } from '../services/portalA'; // Import interface NewsItem

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Home() {
  const { data: A, error: errorA, isLoading: loadingA } = useSWR<NewsItem[]>('/api/news/portalA', fetcher);
  const { data: B, error: errorB, isLoading: loadingB } = useSWR<NewsItem[]>('/api/news/portalB', fetcher);
  const { data: C, error: errorC, isLoading: loadingC } = useSWR<NewsItem[]>('/api/news/portalC', fetcher);

  // Periksa apakah ada error saat fetching
  if (errorA || errorB || errorC) {
    console.error('Error fetching data:', errorA, errorB, errorC);
    return <div className="text-red-500 text-center p-4">Failed to load news. Please try again later.</div>;
  }

  // Tampilkan pesan loading saat data sedang diambil
  if (loadingA || loadingB || loadingC) {
    return <div className="text-center p-4">Loading news...</div>;
  }

  // Pastikan data tidak null atau undefined setelah loading selesai
  // Default ke array kosong jika data masih null/undefined
  const all: NewsItem[] = [
    ...(A || []),
    ...(B || []),
    ...(C || [])
  ];

  // Periksa jika tidak ada berita yang ditemukan
  if (all.length === 0) {
    return <div className="text-center p-4">No news articles found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {all.map(item => (
        // Pastikan item.slug ada dan unik sebagai key
        <Card key={item.slug} {...item} />
      ))}
    </div>
  );
}