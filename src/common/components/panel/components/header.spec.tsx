import * as React from 'react';
import { Header } from './header';
import { shallow } from 'enzyme';

describe('common/components/panel/header tests', () => {
    it('should render as expected when passing required properties', () => {
        // Arrange
        const props = {
            title: 'test title'
        }

        // Act
        const component = shallow(<Header {...props} />);

        // Assert
        expect(component).toMatchSnapshot();
    });
});