import { IProduct } from '@components/types/IProduct';
import { firestore } from '@components/lib/firebaseAdmin';

export const fetchProducts = async () => {
  try {
    console.log('📡 Отримуємо продукти з Firestore через Admin SDK...');

    const productsCollection = firestore.collection('products');
    const snapshot = await productsCollection.get();

    if (snapshot.empty) {
      console.warn('⚠️ Немає товарів у Firestore!');
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
  } catch (error) {
    console.error('❌ Помилка при отриманні продуктів через Admin SDK:', error);
    return [];
  }
};
