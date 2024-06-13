import joi from 'joi'
import { generalFields } from '../../middleware/validation.js'


export const add = {
    body:joi.object().required().keys({
        carName: joi.string().required(),
        description: joi.string().required(),
        model: joi.string().required(),
        brand: joi.string().required(),
        speed: joi.string().required(),
        seatType: joi.string().required(),
        price: joi.string().required(),
        gps: joi.string().required(),
        automatic: joi.string(),
        imgUrl: joi.string().required(),
        rating: joi.string(),
    }),
    params:joi.object().required().keys(),
    query:joi.object().required().keys(),
}
export const update = {
    body:joi.object().required().keys({
        carName: joi.string(),
        description: joi.string(),
        model: joi.string(),
        brand: joi.string(),
        speed: joi.string(),
        seatType: joi.string(),
        price: joi.string(),
        gps: joi.string(),
        automatic: joi.string(),
        imgUrl: joi.string(),
        rating: joi.string(),
    }),
    params:joi.object().required().keys({
        id:generalFields.id.required()
    }),
    query:joi.object().required().keys(),
}
export const getById= {
    body:joi.object().required().keys(),
    params:joi.object().required().keys({
        id:generalFields.id.required()
    }),
    query:joi.object().required().keys(),
}
export const deleteCar= {
    body:joi.object().required().keys(),
    params:joi.object().required().keys({
        id:generalFields.id.required()
    }),
    query:joi.object().required().keys(),
}