const { gps } = require('../models')
const { Sequelize } = require('sequelize')

const getAllDevice = async (req, res, next) => {
    try {
        const deviceList = await gps.findAll({
            attributes: [
                [
                    Sequelize.fn('DISTINCT', Sequelize.col('device_id')) ,'device_id'
                ]
            ],
            order: ["device_id"]

        })
        res.status(200).json(deviceList)
    } catch (error) {
        next(error)
    }
}

const getDeviceDetail = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deviceDetail = await gps.findAll({
            where: {
                device_id: id
            },
            attributes: { exclude: ["createdAt", "updatedAt"] }
        })
        res.status(200).json(deviceDetail)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllDevice,
    getDeviceDetail
}