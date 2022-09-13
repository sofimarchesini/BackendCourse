import supertest from 'supertest';
import chai from 'chai';
const request = supertest('http://localhost:8080/productos');
const expect = chai.expect;

describe('test productos', () => {
  describe('lista de productos', () => {
    it('Debería retornar un status 200', async () => {
      const response = await request.get('/');
      expect(response.status).to.eql(200);
    });
    
    it('Debería retornar un objeto como data', async () => {
      const response = await request.get('/');
      expect(response.body).to.be.an('object');
    });
  });

  describe('crear producto', async () => {
    it('Debería retornar un status 201', async () => {
      const response = await request.post('/create').send({
        name: 'Vintage',
        description: 'Bolso Amarillo',
        code: '123',
        img: 'img1',
        price: 44,
        stock: 3,
      });
      expect(response.status).to.eql(201);
      expect(response.body.product).include.keys( 'name', 'description', 'code', 'img', 'price', 'stock', '_id');
      expect(response.body.product.name).to.eql('Vintage');
      expect(response.body.product.description).to.eql('Bolso Amarillo');
      expect(response.body.product.code).to.eql('123');
      expect(response.body.product.img).to.eql('img1');
      expect(response.body.product.price).to.eql(44);
      expect(response.body.product.stock).to.eql(3);
    });
  });


  describe('actualizar producto', async () => {
    it('Debería retornar un status 201 y modificar un producto', async () => {
      let response = await request.post('/create').send({
        name: 'Vintage',
        description: 'Bolso Amarillo',
        code: '123',
        img: 'img1',
        price: 44,
        stock: 3,
      });
      const productId = response.body.product._id;
      response = await request.put(`/update/${productId}`).send({
        name: 'HOL',
        description: 'Bolso Amarillo',
        code: '123',
        img: 'img1',
        price: 44,
        stock: 3,
      });
      expect(response.status).to.eql(201);
      expect(response.body.product).include.keys( 'name', 'description', 'code', 'img', 'price', 'stock', '_id');
      expect(response.body.product.name).to.eql('HOL');
      expect(response.body.product.description).to.eql('Bolso Amarillo');
      expect(response.body.product.code).to.eql('123');
      expect(response.body.product.img).to.eql('img1');
      expect(response.body.product.price).to.eql(44);
      expect(response.body.product.stock).to.eql(3);
    });
  });

  describe('borrar producto', async () => {
    it('Debería retornar un status 200 y borrar un producto', async () => {
        let response = await request.post('/create').send({
            name: 'Vintage',
            description: 'Bolso Amarillo',
            code: '123',
            img: 'img1',
            price: 44,
            stock: 3,
          });
      const id = response.body.product._id;
      response = await request.delete(`/delete/${id}`);
      expect(response.status).to.eql(200);
      expect(response.body.product).include.keys( 'name', 'description', 'code', 'img', 'price', 'stock', '_id');
      expect(response.body.product.name).to.eql('Vintage');
      expect(response.body.product.description).to.eql('Bolso Amarillo');
      expect(response.body.product.code).to.eql('123');
      expect(response.body.product.img).to.eql('img1');
      expect(response.body.product.price).to.eql(44);
      expect(response.body.product.stock).to.eql(3);
      expect(response.body.product._id).to.eql(id);

    });
  });
});