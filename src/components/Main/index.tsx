import * as S from './styles'

const Main = ({
    title = 'Boilerplate',
    description = 'Typescript, ReactJS, NextJS e Styled Components',
}) => (
    <S.Wrapper>
        <S.Logo src="/img/logo.svg" alt="Boilerplate" />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration
            src="/img/hero-illustration.svg"
            alt="Um desenvolvedor de frente par auma tela com código"
        />
    </S.Wrapper>
)

export default Main
