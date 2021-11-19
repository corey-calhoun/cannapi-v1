import { useState } from 'react';
import styled from "styled-components"

export interface SearchbarContainerProps {
    onSearch(term: string): void;
}

function Searchbar({onSearch}: SearchbarContainerProps) {

    const [value, setValue] = useState('');

    const submitValue = () => {
        setValue(value);
        console.log(value)
        onSearch(value);
    }

    return (
        
        <SearchbarContainer className='flex p-2 justify-center'>
            <form onSubmit={e => {
                e.preventDefault();
                onSearch(value);
            }}>
                <SearchbarInput 
                    type="text" 
                    placeholder="Search" 
                    className='
                        w-2/3 
                        h-10 
                        px-4 
                        bg-white 
                        border-2 
                        border-gray-300 
                        rounded-lg 
                        focus:outline-none 
                        focus:border-gray-500
                    '
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            submitValue();
                        }
                    }}
                />
                <SearchbarButton
                    type="submit"
                    value="Search"
                    className='
                        bg-blue-500
                        w-1/4
                        h-10
                        rounded-lg
                        ml-2
                    '
                    onClick={submitValue}
                >
                    Search
                </SearchbarButton>
            </form>
        </SearchbarContainer>
    )
}

export default Searchbar

const SearchbarContainer = styled.div``;

const SearchbarInput = styled.input``;

const SearchbarButton = styled.button``;