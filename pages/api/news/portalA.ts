// pages/api/news/portalA.ts
import type { NextApiHandler } from 'next';
import { fetchPortalA } from '../../../services/portalA';

const handler: NextApiHandler = async (req, res) => {
  try {
    const news = await fetchPortalA();
    res.status(200).json(news);
  } catch (error) {
    // Menambahkan penanganan error untuk melihat detailnya di konsol server
    console.error('Error fetching news from Portal A:', error);
    res.status(500).json({ message: 'Failed to fetch news from Portal A', error: error.message });
  }
};

export default handler;