import {createProduct} from '../Controllers/ProductController.js';


export const resolvers = {

    Query:{
        Products: () =>{ return 'Products' },

        Product({id}) { return `Hello ${id}!`; },
    }, 
    
    Mutation: {
        createProduct(_, {input}){
            createProduct(input);
            return input;
        }
    }
};