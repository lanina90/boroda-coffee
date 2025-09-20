import Products from '@components/components/Products/Products';
import { fetchProducts } from '@components/utils/fetchProducts';
import AboutCoffee from '@components/components/AboutCoffee/AboutCoffee';
import CoffeeStorage from '@components/components/CoffeeStorage/CoffeeStorage';
import CustomerInfo from '@components/components/CustomerInfo/CustomerInfo';
import Cooperation from '@components/components/Cooperation/Cooperation';
export const revalidate = 0;

export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
      <Products products={products} />
      <AboutCoffee />
      <CoffeeStorage />
      <CustomerInfo />
      <Cooperation />
    </>
  );
}
