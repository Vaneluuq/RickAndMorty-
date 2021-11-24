import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CardCharacter from './CardCharacter';


test('renders content', () => {
    const character = {
        Name: "Abradolf Lincler",
        Status: "Alive", 
        Species: "Human",
        Gender: "Male",
        Origin: {
            name:"unknown"
        }
    }

    const component = render(<CardCharacter character= {character}/>)
    component.getByText('Abradolf Lincler')
    expect(component.container).toHaveTextContent(character.Origin.name)
})

