import React from 'react';
import styled from 'styled-components';

import TextStyled from '../components/Text';
import myCards from '../data/cards';

const CardsScreen = () => {
    const renderCard = ({ item }) => (
        <CardContainer>
            <CardInfo>
                <CardLogoContainer bgColor={item.color}>
                    <CardLogo source={item.logo} resizeMode='contain' />
                </CardLogoContainer>
                <CardDetails>
                    <TextStyled heavy>
                        &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;{' '}
                        <TextStyled medium heavy>{item.number}</TextStyled>
                    </TextStyled>
                    <TextStyled small heavy color='#727479' margin='4px 0 0 0'>{item.exp}</TextStyled>
                </CardDetails>
            </CardInfo>
            <CardActions>
                <Remove>
                    <TextStyled heavy color='#727479'>Remove</TextStyled>
                </Remove>
                <Update>
                    <TextStyled heavy>Update</TextStyled>
                </Update>
            </CardActions>
        </CardContainer>
    );

    return (
        <Container>
            <TextStyled center large heavy margin='16px 0 0 0'>My Cards</TextStyled>

            <Cards data={myCards} renderItem={renderCard} />

            <StatusBar barStyle='light-content' />
        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;

const Cards = styled.FlatList`
    padding: 0 8px;
    margin-top: 32px;
`;

const CardContainer = styled.View`
    background-color: #292929;
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 8px;
`;

const CardInfo = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #393939;
    padding-bottom: 12px;
    margin-bottom: 12px;
`;

const CardLogoContainer = styled.View`
    width: 64px;
    height: 64px;
    background-color: ${(props) => props.bgColor};
    align-items: center;
    justify-content: center;
    border-radius: 32px;
`;

const CardLogo = styled.Image`
    width: 40px;
    height: 40px;
`;

const CardDetails = styled.View`
    flex: 1;
    align-items: flex-end;
`;

const CardActions = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const Remove = styled.TouchableOpacity`
    margin-right: 32px;
`;

const Update = styled.TouchableOpacity`
    background-color: #3d3d3d;
    padding: 8px 16px;
    border-radius: 6px;
`;

const StatusBar = styled.StatusBar``;

export default CardsScreen;