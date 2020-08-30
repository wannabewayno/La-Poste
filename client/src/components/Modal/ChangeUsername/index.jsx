import React from 'react';
import { FormContainer, Username, SubmitButton, InlineContainer } from 'grass-roots-react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrentUser } from '../../../redux/actions';
import API from '../../../utils/API';

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
        <FormContainer onSubmit={updateUser} style={{padding:'0'}}>
            <InlineContainer
                minWidth='576px'
                gap="20px"
                style={{alignItems:'baseline', margin:'0 auto'}}
                proportions={[80, 20]}
            >
                <Username
                    name={{display:'Username', id:'newUsername', toDisplay:true}}
                    placeholder='new username...'
                    label={{width:'65px'}}
                    container={{margin:'0px auto'}}
                    color={dark}
                />
                <SubmitButton
                    text='update'
                    size='small'
                    style={{margin:'0px'}}
                    color={accent}
                />
            </InlineContainer>
        </FormContainer>
    )
}
