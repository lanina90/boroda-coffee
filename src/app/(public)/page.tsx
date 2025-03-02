import Container from '@components/components/Container/Container';
import Products from '@components/components/Products/Products';
import { fetchProducts } from '@components/utils/fetchProducts';
import AboutCoffee from '@components/components/AboutCoffee/AboutCoffee';
import CoffeeBrewing from '@components/components/CoffeeBrewing/CoffeeBrewing';
import CoffeeStorage from '@components/components/CoffeeStorage/CoffeeStorage';
import CustomerInfo from '@components/components/CustomerInfo/CustomerInfo';

export default async function Home() {
  const products = await fetchProducts();

  return (
    <Container>
      <Products products={products} />
      <AboutCoffee />
      <CoffeeBrewing />
      <CoffeeStorage />
      <CustomerInfo />
    </Container>
  );
}
