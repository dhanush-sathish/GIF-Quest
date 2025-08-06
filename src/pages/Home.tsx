import GifGrid from '@/components/GifGrid'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const Home = () => {

  const [query, setQuery] = React.useState<string>('');


  return (
    <div className='w-full max-w-4xl mx-auto p-4 text-center space-y-4'>
      <h1 className="text-3xl font-bold">Gif Quest</h1>
      <SearchBar query={query} setQuery={setQuery}/>
      <GifGrid query={query}/>
    </div>
    
  )
}

export default Home