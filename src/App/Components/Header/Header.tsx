import * as React from 'react';
import { LogoHeader, ContainerLinks } from './HeaderStyles';
import { Link } from '@reach/router';

export interface HeaderProps {
  
}

export function Header (props: HeaderProps) {
  return (
    <ContainerLinks>
      <Link to="/">
        <LogoHeader>
          Google <strong>&nbsp;BOOKS&nbsp;</strong>
        </LogoHeader>
      </Link>
      <Link to="/reviews">
        * Ver todas las reseñas *
      </Link>
    </ContainerLinks>
  );
}
