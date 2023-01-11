import { Box, Typography } from '@mui/material';
import Container from 'components/container';
import { portfolioList } from './portfolioList';
import PortfolioItem from 'components/PortfolioItem/PortfolioItem';

const Portfolio = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px 0',
          }}
        >
          <Typography
            variant="h5"
            sx={{ marginBottom: 3, textAlign: 'center' }}
          >
            Portfolio
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {portfolioList.map(item => (
                <PortfolioItem item={item} />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Portfolio;
