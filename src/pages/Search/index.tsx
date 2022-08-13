import axios from 'axios';
import { useState } from 'react';
import MainButton from '../../components/MainButton';
import Result from '../../components/Result';
import { Profile } from '../../types/Profile';

import './styles.css';

type FormData = {
    username: string;
}

const Search = () => {

    const [formData, setFormData] = useState<FormData>({
        username: ''
    });

    const [profile, setProfile] = useState<Profile>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.username}`)
            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                setProfile(undefined);
            });

    }

    return (
        <div className='main-container'>
            <div className='search-container'>
                <form onSubmit={handleSubmit}>
                    <div className='search-form-container'>
                        <h1>Encontre um perfil Github</h1>
                        <input
                            type="text"
                            name='username'
                            value={formData.username}
                            placeholder='Usuário Github'
                            onChange={handleChange}
                        />
                    </div>
                    <div className='button-container'>
                        <MainButton text='Encontrar' />
                    </div>
                </form>
            </div>
            <div>
                {profile &&
                    <Result profile={profile} />
                }
            </div>
        </div>
    );
}

export default Search;