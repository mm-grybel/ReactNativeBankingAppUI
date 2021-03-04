import React, { useState } from 'react';
import styled from 'styled-components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TextStyled from '../components/Text';
import NumberPad from '../components/NumberPad';

const SendRequestScreen = () => {
    const [amount, setAmount] = useState('0');

    const convertToDollars = (currentAmount) => {
        const newAmount = currentAmount / 100;

        return newAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const pressKey = (item, index) => {
        setAmount((prev) => {
            return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
        });
    };

    return (
        <Container>
            <TextStyled center large heavy margin='16px 0 0 0'>Send</TextStyled>

            <Amount>
                <TextStyled title heavy>{convertToDollars(amount)}</TextStyled>
                <TextStyled bold color='#727479'>Choose amount to send</TextStyled>
            </Amount>

            <User>
                <ProfilePhoto source={require('../assets/profilePhoto.png')} />
                <UserDetails>
                    <TextStyled medium heavy>John Doe</TextStyled>
                    <TextStyled bold color='#727479'>Patreaon</TextStyled>
                </UserDetails>

                <MaterialIcons name='edit' size={16} color='#ffffff' />
            </User>

            <Send>
                <TextStyled medium heavy>Send {convertToDollars(amount)} to John Doe</TextStyled>
            </Send>

            <NumberPad onPress={pressKey} />

            <StatusBar barStyle='light-content' />
        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;

const Amount = styled.View`
    margin-top: 64px;
    align-items: center;
`;

const User = styled.View`
    margin: 32px 16px;
    flex-direction: row;
    align-items: center;
`;

const ProfilePhoto = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 12px;
`;

const UserDetails = styled.View`
    flex: 1;
    margin: 0 16px;
`;

const Send = styled.TouchableOpacity`
    margin: 16px;
    background-color: #5196F4;
    padding: 16px 32px;
    align-items: center;
    border-radius: 12px;
`;

const StatusBar = styled.StatusBar``;

export default SendRequestScreen;
