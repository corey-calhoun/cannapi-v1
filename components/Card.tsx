import styled from "styled-components"
import { AiOutlineHeart, AiOutlineDislike } from 'react-icons/ai'

function Card({title, type, effect, flavor, ailment, description}) {
    return (
        <CardContainer className='
        flex-cols 
        bg-white
        border 
        rounded-md 
        shadow-lg 
        w-full 
        h-full
        p-2 
        break-words 
        space-y-2
        '>
            {/* <CardImage 
                src={image}
                alt='Card Image'
                className='object-fill w-full rounded-t-md h-3/5'
            /> */}
            <CardTitle className='text-lg uppercase'>{title}</CardTitle>
            <CardCategory className='text-xs uppercase'>{type}</CardCategory>
            <CardEffect className='text-sm'>Effects: {effect}</CardEffect>
            <CardFlavor className='text-sm'>Flavor Profile: {flavor}</CardFlavor>
            <CardAilment className='text-sm'>Used For: {ailment}</CardAilment>
            <CardDescription className='text-xs'>{description}</CardDescription>
            <CardActions className='flex w-1/4 justify-between'>
                <CardButton className='hover:text-red-700'>
                    <AiOutlineHeart className='text-2xl'/>
                    Save
                </CardButton>
                <CardButton>
                    <AiOutlineDislike className='text-2xl'/>
                    Dislike
                </CardButton>
            </CardActions>
            
        </CardContainer>
    )
}

export default Card;

const CardContainer = styled.div``;

const CardTitle = styled.h1``;

const CardCategory = styled.h3``;

const CardEffect = styled.p``;

const CardFlavor = styled.p``;

const CardAilment = styled.p``; 

const CardDescription = styled.p``;

const CardButton = styled.button`
    display: flex;
    align-items: center;
    padding: 2px; 
    border-radius: 5px;
    margin: 2px; 
    border: 1px solid #000;
`;

const CardActions = styled.div``;