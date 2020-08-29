import React from 'react';
import { FormContainer, Password, SubmitButton, InlineContainer } from 'grass-roots-react';
import { useSelector, useDispatch } from 'react-redux';
import API from '../../../utils/API';
import { updateCurrentUser } from '../../../redux/actions';

export default function(){

    //get our global states and dispatch
    const dispatch = useDispatch();
    const { username, color:{ accent, dark } } = useSelector(state => state);

    async function updateUser({newUsername, newPassword, confirmPassword}) {

        // only include the info that you want to update
        const updatedInfo = {};
        if(newUsername) updatedInfo.username = newUsername;
        if(newPassword && confirmPassword) {
            if(newPassword === confirmPassword) updatedInfo.password = newPassword;
            else {
                // throw up a tool tip to let the user know that the passwords don't match
                return //return early 
            }
        }

        // call our /api/user and make a patch request
        const { message, status } = await API.updateUser({ username, updatedInfo });

        switch(status){
            case'ok': {
                if(newUsername) dispatch(updateCurrentUser(newUsername));
                else console.log('Password succesfully changed');
                break;
            }
            case'fail': {
                console.log(new Error(message));
                break;
            }
            default: console.log(new Error('Error updating user'));
        }
    }


    return (
        <FormContainer onSubmit={updateUser} style={{ padding:'0', marginTop:'40px' }}>
             <InlineContainer
                minWidth='576px'
                gap="20px"
                style={{alignItems:'baseline', margin:'0 auto'}}
                proportions={[40,40,20]}
            >
                <Password
                    color='black'
                    name={{display:'Password', id:'newPassword', toDisplay:true}}
                    placeholder='new password...'
                    label={{width:'65px'}}
                    container={{margin:'0 auto'}}
                    color={dark}
                />
                <Password
                    color='black'
                    name={{display:'Confirm', id:'confirmPassword', toDisplay:true}}
                    placeholder='confirm it...'
                    label={{width:'65px'}}
                    container={{margin:'0 auto'}}
                    color={dark}
                />
                <SubmitButton
                    text='update'
                    color='black'
                    size='small'
                    style={{margin:'0'}}
                    color={accent}
                />
            </InlineContainer>
        </FormContainer>
    )
}