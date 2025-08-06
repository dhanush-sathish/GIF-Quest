import { fetchGifs } from '@/lib/Giphy'
import React from 'react'

interface Props {
    query: string;
}

const GifGrid:React.FC<Props> = ({ query }: Props) => {

    const [gifs, setGifs] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const getgif = async () => {
            setLoading(true);
            try {
                const res = await fetchGifs(query);
                setGifs(res);
            } catch (error) {
                console.error("Error fetching gifs:", error);
            } finally {
                setLoading(false);
            }
        }

        getgif();
    }, [query])

    if (loading) {
        return <div>Loading GIF...</div>;
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {gifs.map((gif) => (
        <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
      ))}
    </div>
  )
}

export default GifGrid