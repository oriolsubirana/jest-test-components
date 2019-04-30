import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from './button';

describe('common/components/form/button specs', () => {
    it('should call onClick prop when simulate button click', () => {
        const props = {
            label: 'test label',
            onClick: jest.fn(),
        }

        //Act
        const component = shallow(
            <Button
                {...props}
            />
        );

        const preventDefaultSpy = jest.fn();
        component.simulate('click', {
            preventDefault: preventDefaultSpy,
        })

        //Assert
        expect(props.onClick).toHaveBeenCalled();
        expect(preventDefaultSpy).toHaveBeenCalled();
    });

});