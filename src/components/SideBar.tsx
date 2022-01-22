import { useEffect, useState } from 'react';
import { Button } from './Button';
import { api } from './../services/api';
import './../styles/sidebar.scss';
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SideBarProps {
  genre: GenreResponseProps,
  handleClickButton: (id: number) => void
}

export function SideBar({genre, handleClickButton}: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
      <nav className="sidebar"> 
        <span>Watch<p>Me</p></span>
        <div className="buttons-container">
          {genres.map(currentGenre => (
            <Button
              key={String(currentGenre.id)}
              title={currentGenre.title}
              iconName={currentGenre.name}
              onClick={() => handleClickButton(currentGenre.id)}
              selected={genre.id === currentGenre.id}
            />
          ))}
        </div>
      </nav>
  );
}