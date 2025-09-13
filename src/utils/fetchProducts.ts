import { IProduct } from '@components/types/IProduct';
import { firestore } from '@components/lib/firebaseAdmin';

export const fetchProducts = async () => {
  try {
    const productsCollection = firestore.collection('products');
    const snapshot = await productsCollection.get();

    if (snapshot.empty) {
      return [];
    }

    const products: IProduct[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name || '',
      roasting: doc.data().roasting || '',
      taste: doc.data().taste || '',
      options: doc.data().options || {},
      image: doc.data().image || '',
      composition: doc.data().composition || '',
    }));

    return products;
  } catch {
    return [];
  }
};
