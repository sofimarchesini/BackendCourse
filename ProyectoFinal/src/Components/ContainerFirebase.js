import  admin from "firebase-admin";
import serviceAccount from "../ecommerce/keyGenerada.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()
const query = db.collection('productos')

class ContainerFirebase {
	
    async deleteById(id) { await query.doc(id).delete() }

    async getById(id) {
		const doc = await query.doc(id).get()
		return doc.data()
	}

    async save(newProduct) {    
		const prod = await query.add(newProduct)
		object.id = prod.id
		query.doc(prod.id).set(newProduct)
		return prod.id
	}

	async updateById(id, data) {	
		data.id = id
		await query.doc(id).set(data)
	}

	async getAll() {
		const all = await query.get()
    	return all.docs.map(doc => doc.data());
	}
}

export default ContainerFirebase;