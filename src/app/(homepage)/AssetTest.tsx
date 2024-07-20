import { Asset } from '@/components/custom-components/constants';
import React, { useEffect, useState } from 'react';

const AssetsList: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await fetch('/api/asset'); // Ensure this matches your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch assets');
        }
        const data: Asset[] = await response.json();
        setAssets(data);
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Assets</h1>
      <ul>
        {assets.map(asset => (
          <li key={asset.id}>
            {asset.name} - Duration: {asset.duration} seconds - Rating: {asset.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssetsList;
