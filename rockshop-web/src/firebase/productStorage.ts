import { db } from './config.ts'
import { collection, SetOptions } from 'firebase/firestore/lite'

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}



export const productCollection = collection(db, 'product-db')



interface FirestoreProduct {
    name: string;
    price: number;
    description: string;
    imageUrl: string;
}

interface FirestoreSnapshot {
    id: string;
    data: (options?: SetOptions) => FirestoreProduct;
}


export const productConverter = {
    toFirestore: (product: Product): FirestoreProduct => {
        return {
            name: product.name,
            price: product.price,
            description: product.description,
            imageUrl: product.imageUrl
        }
    },
    
    toProduct: (snapshot: FirestoreSnapshot, options?: SetOptions): Product => {
        const data = snapshot.data(options)
        return {
            id: snapshot.id,
            name: data.name,
            price: data.price,
            description: data.description,
            imageUrl: data.imageUrl
        }
    }
}

export productCollection
