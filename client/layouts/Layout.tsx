import { ReactNode } from 'react';
import { Noto_Sans } from '@next/font/google';
import { Box, Container } from '@chakra-ui/react';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

const notoFont = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'fallback',
});

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container className={notoFont.className} maxWidth={'1728px'}>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Container>
  );
}
