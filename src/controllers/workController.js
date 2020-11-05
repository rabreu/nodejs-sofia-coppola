const { response } = require('express')
const workSchema = require('../models/workSchema')

const getAll = (request, response) => {
    console.log(`${request.method} ${request.url}`)
    workSchema.worksCollection.find((error, work) => {
        if(error)
            return response.status(500).send(error)
        return response.status(200).send(work)
    })
}

const getById = (request, response) => {
    console.log(`${request.method} ${request.url}`)
    const id = request.params._id
    workSchema.worksCollection.findById(id, (error, work) => {
        if(error)
            return response.status(404).send("Sofia Coppola's work not found. :(")
        return response.status(200).send(work)
    })
}

const getAllAsDirector = (request, response) => {
    console.log(`${request.method} ${request.url}`)
    const id = request.params._id
    workSchema.worksCollection.find({"role":"Director"}, (error, work) => {
        if(error)
            return response.status(404).send(error)
        return response.status(200).send(work)
    })
}

const addWork = (request, response) => {
    console.log(`${request.method} ${request.url}`)
    const workBody = request.body
    const work = new workSchema.worksCollection(workBody)

    work.save((error) => {
        if(error)
            return response.status(400).send(error)
        return response.status(201).send(work)
    })
}

const updateWork = (request, response) => {
    console.log(`${request.method} ${request.url}`)
    const id = request.params._id
    const workBody = request.body
    const novo = { new: true }

    workSchema.worksCollection.findByIdAndUpdate(
        id,
        workBody,
        novo,
        (error, work) => {
            if(error)
                return response.status(500).send(error)
            else if (work)
                return response.status(200).send(work)
            return response.sendStatus(404)
        }
    )
}

const deleteWork = (request, response) => {
    console.log(`${request.method} ${request.url}`)
    const id = request.params._id

    workSchema.worksCollection.findByIdAndDelete(id, (error, work) => {
        if(error)
            return response.status(500).send(error)
        else if (work)
            return response.status(200).send("Sofia Coppola's work deleted. :o")
        return response.sendStatus(404)
    })
}

module.exports = {
    getAll,
    getById,
    getAllAsDirector,
    addWork,
    updateWork,
    deleteWork
}