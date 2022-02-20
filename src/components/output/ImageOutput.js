import styled from '@emotion/styled';

const ImageDiv = styled.div`
    padding-left: 10px;
    display: flex;

    object-fit: cover;
`;
//     align-items: center;
export default function ImageOutput({src, alt}){
    return (
        <ImageDiv>
            <img src={src} alt={alt}/>
        </ImageDiv>
    );
}