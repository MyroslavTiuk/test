import React from 'react';
import { Card, Header } from './components';
import { instance } from './service/api/instance';
import { ICard } from './types/types';

type IFilter = ICard['type'] | 'all';

function App() {
  const [filter, setFilter] = React.useState<IFilter>('all');
  const [search, setSearch] = React.useState('');

  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState<ICard[]>([]);

 

  const filteredData = React.useMemo(() => {
    return data.filter((item) => {
    const isTitleMatch = item.title.toLowerCase().includes(search.toLowerCase());
    const isFilterMatch = filter === 'all' ? true : item.type === filter;
    return isTitleMatch && isFilterMatch;
    });
    }, [data, filter, search]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await instance.get<ICard[]>('resources');
        setData(response.data);
      } catch (e) {
        window.alert('error');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as IFilter;
    setFilter(newValue);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  };

  const renderList = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (filteredData.length === 0) {
      return <div>Empty</div>
    }

    if (isError && !isLoading) {
      return <div>Error</div>;
    }

    return (
      <ul className="mt-[50px] grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredData.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    );
  };

  return (
    <article>
      <Header onSearch={handleSearch} />
      <div className="mx-auto max-w-[1160px] px-[20px]">
        <main>
            <div className="mt-[50px] flex items-center gap-x-6">
              <span>Sort by:</span>
              <select
                onChange={handleSortChange}
                className="min-w-[210px] appearance-none rounded border border-grey px-[15px] py-[6px] outline-none"
              >
                <option value="all">all</option>
                <option value="individual">individual</option>
                <option value="organisation">organisation</option>
                <option value="project">project</option>
              </select>
            </div>
            {renderList()}
        </main>
      </div>
      <footer className="mt-[50px] h-[40px] bg-light-grey py-[9px]">
        <p className="text-center">Copyright 2023</p>
      </footer>
    </article>
  );
}

export default App;
