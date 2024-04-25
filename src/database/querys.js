export const querys = {
    getAllProducts: 'SELECT * FROM Products',
    addNewProduct:'INSERT INTO Products (name,description,quantity) VALUES (@name,@description,@quantity)',
    getProductById:'SELECT * FROM Products WHERE Id=@Id',
    deleteProduct:'DELETE FROM [master].[dbo].[Products] WHERE Id=@Id',
    getTotalProducts:'SELECT count(*) FROM Products',
    updateProductById:'UPDATE Products SET Name=@name,Description=@description,Quantity=@quantity WHERE Id=@Id'
}