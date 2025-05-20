// pages/api/news/portalB.ts
import type { NextApiHandler } from 'next';
import { fetchPortalB } from '../../../services/portalB';

const handler: NextApiHandler = async (req, res) => {
  try {
    const news = await fetchPortalB();
    res.status(200).json(news);
  } catch (error) {
    // Menambahkan penanganan error untuk melihat detailnya di konsol server
    console.error('Error fetching news from Portal B:', error);
    res.status(500).json({ message: 'Failed to fetch news from Portal B', error: error.message });
  }
};

export default handler;