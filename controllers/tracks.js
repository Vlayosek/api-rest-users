import models from '../models/index.js';
/**
 *  Obtener una lista de items.
 * @returns {Array} Lista de items.
 */
const getItems = async (req, res) => {
    const data = await models.trackModel.find({});
    res.send({ message: 'Get all tracks', items: data });
}

/**
 * Obtener un detalle
 * @param {*} id 
 * @returns 
 */
const getItem  = (id) => {
    // Logic to get item by id
    return `item${id}`;
}

/**
 * Inserta un registro
 * @param {*} item 
 * @returns 
 */
const createItem = async (req,res) => {
    const { body } = req
    console.log(body);
    const data = await models.trackModel.create(body);
    res.send({ message: 'Item created', item: data });
}

/**
 * Actualiza un registro
 * @param {*} id 
 * @param {*} item 
 * @returns 
 */
const updateItem = (id, item) => {
    // Logic to update an existing item
    return `Updated item${id} to ${item}`;
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
const deleteItem = (id) => {
    // Logic to delete an item
    return `Deleted item${id}`;
}

export { getItems, getItem, createItem, updateItem, deleteItem };