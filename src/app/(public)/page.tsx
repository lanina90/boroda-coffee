import Container from '@components/components/Container/Container';
import Products from '@components/components/Products/Products';
import { db } from '@components/lib/firebase';
import { collection, getDocs } from '@firebase/firestore';
import { IProduct } from '@components/types/IProduct';

export default async function Home() {
  const productsCollection = collection(db, 'products');
  const productSnapshot = await getDocs(productsCollection);

  const products: IProduct[] = productSnapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      name: data.name || '',
      roasting: data.roasting || '',
      taste: data.taste || '',
      options: data.options || '',
      image: data.image || '',
      composition: data.composition || '',
    };
  });

  return (
    <Container>
      <Products products={products} />
    </Container>
  );
}
