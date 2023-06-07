import { StyledImageContainer } from './style'

export const ImageContainer = ({ src, alt, children, onClick }) => {
    const handleClick = () => {
        if (onClick) {
        onClick();
        }
    }

    return (
        <StyledImageContainer onClick={handleClick}>
            <img src={src} alt={alt} />
            {children}
        </StyledImageContainer>
  )
}