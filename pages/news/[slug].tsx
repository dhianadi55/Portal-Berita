import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function NewsDetail() {
  const { slug } = useRouter().query;
  const { data, error } = useSWR(
    slug ? `/api/news/portalA?slug=${slug}` : null,
    url => fetch(url).then(r => r.json())
  );
  if (!data) return <p>Loading...</p>;
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <time className="block mb-4">{new Date(data.publishedAt).toLocaleString()}</time>
      <img src={data.imageUrl} alt={data.title} />
      <p className="mt-4">{data.content}</p>
    </div>
  );
}