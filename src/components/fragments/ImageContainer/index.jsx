import { StyledImageContainer } from './style'

export const ImageContainer = ({ src, alt, children  }) => {
    return (
        <StyledImageContainer>
            <img src={src} alt={alt} />
            {children}
        </StyledImageContainer>
    )
}