import {getConnection, sql, querys} from '../database'
export const getProducts = async (req,res)=>{
    try{
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts)
    console.log(result);
    res.json(result.recordset)
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

export const createNewProduct = async (req,res)=>{
    try{
        const {name,description} = req.body;
        let {quantity} = req.body
         if(!name || !description){
             return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
         }
    
         if(!quantity) quantity = 0
    
         const pool = await getConnection();
         await pool.request().input('name', sql.VarChar, name)
         .input('description', sql.VarChar, description)
         .input('quantity', sql.Int, quantity)
         .query(querys.addNewProduct);
    
        res.json({name,description,quantity})
        } catch(error){
            res.status(500)
            res.send(error.message)
        }
}

export const getProductById = async (req,res)=>{
    try{
        const {id} = req.params;

    
         const pool = await getConnection();
         const result = await pool.request()
         .input('Id',id)
         .query(querys.getProductById);
         res.send(result.recordset[0])
        } catch(error){
            res.status(500)
            res.send(error.message)
        }
}

export const deleteProduct = async (req,res)=>{
    try{
        const {id} = req.params;

    
         const pool = await getConnection();
         const result = await pool.request()
         .input('Id',id)
         .query(querys.deleteProduct);
         res.sendStatus(204)
        } catch(error){
            res.status(500)
            res.send(error.message)
        }
}

export const getTotalProducts = async (req,res)=>{
    try{    
         const pool = await getConnection();
        const result = await pool.request()
         .query(querys.getTotalProducts);
         console.log(result);
         res.json(result.recordset[0][''])
        } catch(error){
            res.status(500)
            res.send(error.message)
        }
}

export const updateProduct = async (req,res)=>{
    try{ 
        
        const {name,description, quantity} = req.body;
        const {id} = req.params;

         if(!name || !description || !quantity) {
             return res.status(400).json({msg: 'Bad Request. Please Fill all fields'})
         }

         const pool = await getConnection();
         await pool
        .request()
        .input('name', sql.VarChar, name)
        .input('description', sql.Text, description)
        .input('quantity', sql.Int, quantity)
        .input('id', sql.Int, id)
        .query(querys.updateProductById);

         res.json({name,description,quantity})
        } catch(error){
            res.status(500)
            res.send(error.message)
        }
}