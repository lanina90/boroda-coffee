import Container from '@components/components/Container/Container';
import Products from '@components/components/Products/Products';
import { fetchProducts } from '@components/utils/fetchProducts';

export default async function Home() {
  const products = await fetchProducts();

  return (
    <Container>
      <Products products={products} />
    </Container>
  );
}
