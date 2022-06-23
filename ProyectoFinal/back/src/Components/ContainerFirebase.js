import  admin from "firebase-admin";
import serviceAccount from "../ecommerce/keyGenerada.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()
const query = db.collection('productos')

class ContainerFirebase {
	
    async getById(id) {
		const document = await query.doc(id).get()
		return document.data()
	}

	async deleteById(id) {
		await query.doc(id).delete()
	}

	async updateById(id, newData) {	
		newData.id = id
		await query.doc(id).set(newData)
	}

	async save(object) {    
		const product = await query.add(object)
		object.id = product.id
		query.doc(product.id).set(object)
		return product.id
	}

	async getAll() {
		const snapshot = await query.get()
    	return snapshot.docs.map(doc => doc.data());
	}
}

export default ContainerFirebase;