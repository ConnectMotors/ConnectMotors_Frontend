import styled from "styled-components";

export const FooterBg = styled.footer`
  background-color: var(--azul-1);
  padding: 40px 0px;
  width: 100%;
`;

export const FooterContainer = styled.footer`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 41px 239px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 1200px) {
    padding: 30px 20px;
    gap: 40px;
  }
`;

export const Column = styled.div`
  min-width: 140px;
  margin-bottom: 20px;
`;

export const Title = styled.h4`
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ItemLista = styled.li`
  margin: 6px 0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: var(--azul-4);
  }
`;

export const BarraLogo = styled.div`
  background-color: var(--azul-3);
  padding: 10px 60px;
  text-align: center;
  img{
    display: inline-block;
  }

  @media (max-width: 600px ) {
    img{
      width: 300px;
    }
  }
  @media (max-width: 400px ) {
    img{
      width: 200px;
    }
  }
`;

export const CopyRight = styled.p`
  font-size: 15px;
  margin-top: 36px;
  color: var(--cinza-5 );
  text-align: center;

`;