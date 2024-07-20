
import { Client } from 'pg';
import NodeCache from 'node-cache';
import { NextApiRequest, NextApiResponse } from 'next';
import { Asset } from '@/components/custom-components/constants';

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const cache = new NodeCache({ stdTTL: 600 });

//-/api/asset

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  try {
    const cachedData = cache.get<Asset[]>('assetsData');

    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    await client.connect();
    const result = await client.query('SELECT id, name, duration, ratings FROM assets');
    await client.end();

    const songData: Asset[] = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      duration: row.duration,
      rating: row.ratings,
    }));

    cache.set('assetsData', songData);
    res.status(200).json(songData);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.end();
  }
}
