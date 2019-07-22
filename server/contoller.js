let getVehicles = (req,res) => {
    const db = req.app.get("db")
    db.get_vehicles().then(response => {
        res.json(response)
    })
}
let getVehicle = (req,res) => {
    const db = req.app.get("db")
    const {id} = req.params

    db.get_vehicle(id).then(response => {
        res.json(response)
    })
}

module.exports  = {
    getVehicles,
    getVehicle,
}