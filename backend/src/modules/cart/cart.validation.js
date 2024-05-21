import joi from 'joi'


export const add = {
    body:joi.object().required().keys({
        bookId:generalFields.id.required(),
        quantity:joi.number().min(1).positive().required()
    }),
    params:joi.object().required().keys(),
    query:joi.object().required().keys(),
}



export const deleteFromCart= {
    body:joi.object().required().keys(),
    params:joi.object().required().keys({
        id:generalFields.id.required()
    }),
    query:joi.object().required().keys(),
}